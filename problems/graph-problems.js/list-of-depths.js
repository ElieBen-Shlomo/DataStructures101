const Node = require("../../data-structures/graphs.js").BinaryNode
const getBST = require("./minimal-binary-search-tree").getBST

const arr = [1,2,3,4,5,6,7,8]
const treeRoot = getBST(arr)

console.log(treeRoot)
