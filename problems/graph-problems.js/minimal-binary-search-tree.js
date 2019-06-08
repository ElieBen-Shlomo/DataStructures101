const DirectedNode = require("../../data-structures/DirectedGraph").DirectedNode
const BinaryNode = require("../../data-structures/DirectedGraph").BinaryNode
const Tree = require("../../data-structures/DirectedGraph").Tree

// Converting a sorted array in to a binary search tree of minimal height
//const sortedArray = [1,2,5,7,9,11,20]
const sortedArray = [1,2,3]

function getMedianIndex(array) {
    length = array.length
    index = Math.ceil(length / 2) - 1
    return index
}

function splitList(array, index) {
    const first = array.slice(0, index)
    const last = array.slice(index + 1)
    return [first, last]
}

function minimalTree(array) {
    function getNode(arr) {
        if (arr.length > 0) {
            const index = getMedianIndex(arr)
            twoLists = splitList(arr, index)
            leftList = twoLists[0]
            rightList = twoLists[1]
            return new BinaryNode(arr[index], getNode(leftList), getNode(rightList))
        } 
    }

    return new Tree(getNode(array)) 
}

const tree = minimalTree(sortedArray) 
tree.printElementsPreOrder()

// For some reason, this recursive function never hits the getNode(rightList)