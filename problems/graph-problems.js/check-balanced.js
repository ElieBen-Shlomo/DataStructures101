const Node = require("../../data-structures/graphs.js").BinaryNode
const getBST = require("./minimal-binary-search-tree").getBST
const BinaryNode = require("../../data-structures/graphs.js").BinaryNode

const arr = [1,2,3]
const treeRoot = getBST(arr)

function assignHeights(node) {
    function depthAuxillary(node) {
        if (node == null) return 0
        else {
            const height = 1 + Math.max(depthAuxillary(node.left), depthAuxillary(node.right))
            node.height = height
            return height
        }
    }

    return depthAuxillary(node, 0) - 1
}

function checkBalanced(root) {
    if (root == null) return true

    const leftHeight = root.left ? root.left.height : 0
    const rightHeight = root.right ? root.right.height : 0

    const isBalanced = Math.abs(leftHeight - rightHeight) <= 1
    return isBalanced ? checkBalanced(root.left) && checkBalanced(root.right)
        : false
}

assignHeights(treeRoot)
console.log(checkBalanced(treeRoot))

treeRoot.right.right = new BinaryNode(100)
treeRoot.left.left = new BinaryNode(100)
treeRoot.right.right.right = new BinaryNode(100)
treeRoot.left.right = new BinaryNode(100)

assignHeights(treeRoot)
console.log(checkBalanced(treeRoot))