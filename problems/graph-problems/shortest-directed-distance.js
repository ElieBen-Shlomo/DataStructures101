const DirectedNode = require("../../data-structures/DirectedGraph").DirectedNode
// Will use depth first and return as soon as the destination is hit

// root ->n1,n2
// n2 -> n3 -> n4 -> root

const root = new DirectedNode(1, [])
const n1 = new DirectedNode(3, [])
const n2 = new DirectedNode(6, [])
const n3 = new DirectedNode(10, [])
const n4 = new DirectedNode(2, [])
const n5 = new DirectedNode(100, [])

root.addNeighbors([n1, n2])
n2.addNeighbors([n3])
n3.addNeighbors([n4])
n4.addNeighbors([root])

function checkPath(node, destination) {
    function temp(node, destination) {
        if (node != null && node.visited == false) {
            node.visited =  true

            if (node.neighbors.length > 0) {
                for (let n of node.neighbors) {    
                    if (n == destination) return true 
                    console.log('data: ' + n.data)
                    if (checkPath(n, destination) == true) return true
                }
            }
        }
    }
    return temp(node, destination) == true ? true : false
}

console.log(checkPath(root, n5))