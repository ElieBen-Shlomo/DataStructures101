// Converting a sorted array in to a binary search tree of minimal height

class BinaryNode {
    constructor(data, left, right) {
        this.data = data
        this.left = left
        this.right = right
    }
}

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

function getBST(arr) {
    if (arr.length > 0) {
        const index = getMedianIndex(arr)
        const twoLists = splitList(arr, index)
        const leftList = twoLists[0]
        const rightList = twoLists[1]
        return new BinaryNode(arr[index], getBST(leftList), getBST(rightList))
    } 
}

module.exports = {
    getBST
}
