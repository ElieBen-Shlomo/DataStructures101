declare var require: any

const getBST = require("./minimal-binary-search-tree").getBST

const arr = [1,2,3,4,5,6,7,8]
const treeRoot = getBST(arr)

console.log(treeRoot)

function invertBinaryTree(root: any) {
    if (root == null) return

    const temp = root.right
    root.right = root.left
    root.left = temp

    invertBinaryTree(root.left)
    invertBinaryTree(root.right)
}

invertBinaryTree(treeRoot)

console.log(treeRoot)