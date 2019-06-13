class DirectedNode {
    constructor(data, neighbors) {
        this.data = data
        this.neighbors = neighbors
        this.visited = false
    }

    addNeighbors(neighbors) {
        neighbors.forEach(node => this.neighbors.push(node))
    } 
}

class BinaryNode {
    constructor(data, left, right) {
        this.data = data
        this.left = left
        this.right = right
    }
}

class BinaryTree {
    constructor(root) {
        this.root = root
    }

    printElementsPreOrder() {
        function printSubNodes(node) {
            if (node != null ) {
                console.log(node.data)
                printSubNodes(node.left)
                printSubNodes(node.right)
            }
        }

        printSubNodes(this.root)
    }
}

module.exports = {
    DirectedNode,
    BinaryNode,
    BinaryTree
}