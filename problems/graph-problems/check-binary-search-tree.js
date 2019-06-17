const Node = require("../../data-structures/graphs.js").BinaryNode
const getBST = require("./minimal-binary-search-tree").getBST
const BinaryNode = require("../../data-structures/graphs.js").BinaryNode

const arr = [1,2,3]
const treeRoot = getBST(arr)

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

console.log(isBST(treeRoot))
