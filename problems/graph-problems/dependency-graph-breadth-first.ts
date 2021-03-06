// Type definitions

class Tuple {  
    public x: String;
    public y: String;

    constructor(x: String, y: String) { 
      this.x = x
      this.y = y 
    } 
} 

type Data = [Array<Tuple>, Array<String>]

// Data initialisation

const nodes = ['a', 'b' ,'c', 'd', 'e', 'f','g']
const graph: Array<Tuple> = [
    new Tuple('d', 'e'), 
    new Tuple('a', 'd'), 
    new Tuple('b', 'd'), 
    new Tuple('f', 'a'),
    new Tuple('f', 'b'),
    new Tuple('a', 'e'),
    new Tuple('g','c')
]

// Function Definition

function isEmpty<T>(list: Array<T>) {
    return list === undefined || list.length == 0
}

function contains<T>(list: Array<T>, e: T) {
    return list.indexOf(e) > -1
}

function setDifference<T>(list1: Array<T>, list2: Array<T>) {
    //list1 - list2
    return list1.filter(e => !contains(list2, e))
}

function buildOrder(data: Data): Array<String> {
    if (isEmpty(data[1])) return []
    const graph = data[0]
    const nodes = data[1]

    const dependentNodes = (graph.map(tuple => tuple.y))
    const nodesThatHaveDependencies = nodes.filter(n => contains(dependentNodes, n))
    const graphPairsThatHaveDependencies = graph.filter(tuple => nodesThatHaveDependencies.indexOf(tuple.x) > -1)
    
    const outerDependencies = setDifference(nodes, dependentNodes)

    if (isEmpty(outerDependencies)) throw new Error('Circular dependency error')

    const graphWithOuterDependenciesRemoved: Data = [graphPairsThatHaveDependencies, nodesThatHaveDependencies]
    return outerDependencies.concat(buildOrder(graphWithOuterDependenciesRemoved))
}

// IO monad

const data: Data = [graph, nodes]
const order = buildOrder(data)

console.log(order)

export {}