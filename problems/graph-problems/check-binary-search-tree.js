const Node = require("../../data-structures/graphs.js").BinaryNode
const getBST = require("./minimal-binary-search-tree").getBST
const BinaryNode = require("../../data-structures/graphs.js").BinaryNode

function isBST(root) {
    function isBSTAuxillary(node, min, max) {
        if (node == null) return true

        const doesLeftNodeExist = node.left != null
        const doesRightNodeExist = node.right != null

        console.log('data: ' + node.data + ', min: ' + min + ', max: ' + max)

        returnValue = null
        if (doesLeftNodeExist && !doesRightNodeExist) {
            const newMax = node.data
            const isInBounds = node.left.data >= min && node.left.data < newMax
            returnValue = 
                isInBounds ? isBSTAuxillary(node.left, min, newMax) : false
        } else if (!doesLeftNodeExist && doesRightNodeExist) {
            const newMin = node.data
            const isInBounds = node.right.data < max && node.right.data > newMin
            returnValue = 
                isInBounds ? isBSTAuxillary(node.right, newMin, max) : false
        } else if (doesLeftNodeExist && doesRightNodeExist) {
            const isInBounds = node.left.data >= min && node.right.data < max
                && node.left.data < node.data && node.right.data >= node.data
            returnValue = 
                isInBounds ? isBSTAuxillary(node.left, min, node.data) &&
                    isBSTAuxillary(node.right, node.data, max) : false
        } else {
            return true
        }

        return returnValue
    }

    return isBSTAuxillary(root, -Number.MAX_VALUE, Number.MAX_VALUE)
}

const root = new BinaryNode(20)
root.left = new BinaryNode(8)
root.right = new BinaryNode(22)
root.left.left = new BinaryNode(4)
root.left.right = new BinaryNode(12)
root.left.right.left = new BinaryNode(10)
root.left.right.right = new BinaryNode(13)

console.log(isBST(root))
