const Node = require("../../data-structures/graphs.js").BinaryNode
const getBST = require("./minimal-binary-search-tree").getBST
const BinaryNode = require("../../data-structures/graphs.js").BinaryNode

const arr = [1,2,3]
const treeRoot = getBST(arr)

function isBST(root) {
    function isBSTAuxillary(node, min, max) {
        console.log(node.data)
        if (node == null) return true

        const doesLeftNodeExist = node.left != null
        const doesRightNodeExist = node.right != null

        returnValue = null
        if (doesLeftNodeExist && !doesRightNodeExist) {
            const isInBounds = node.left.data >= min
            returnValue = 
                isInBounds ? isBSTAuxillary(node.left, min, node.data) : false
        } else if (!doesLeftNodeExist && doesRightNodeExist) {
            console.log('right')
            const isInBounds = node.right.data < max && node.right.data > min // we need to do this extra logic for the other cases 
            returnValue = 
                isInBounds ? isBSTAuxillary(node.right, node.data, max) : false
        } else if (doesLeftNodeExist && doesRightNodeExist) {
            console.log
            const isInBoudns = node.left.data >= min && node.right.data < max
            returnValue = 
                isInBoudns ? isBSTAuxillary(node.left, min, node.data) &&
                    isBSTAuxillary(node.right, node.data, max) : false
        } else {
            return true
        }

        return returnValue

        console.log(min + ' , ' + max)
        console.log(node)
        return (node == null) ? true : 
            (node.left.data > min && node.right.data < max) ?
                isBSTAuxillary(node.left, min, node.data) && 
                isBSTAuxillary(node.right, node.data, max) :
                    false
    }

    return isBSTAuxillary(root, Number.MIN_VALUE, Number.MAX_VALUE)
}

treeRoot.right.right = new BinaryNode(-100)
console.log(isBST(treeRoot))

// unfinished