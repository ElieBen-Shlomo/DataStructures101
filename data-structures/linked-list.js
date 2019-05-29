'use strict';

class Node {
    constructor(data, prev, next) {
        this.data = data
        this.prev = prev
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    addToLinkedHead(data) {
        const node = new Node(data, null, this.head)
        if (this.head) this.head.prev = node;
        else this.tail = node
        this.head = node
    }

    removeNode(node) {
        let prevNode = node.prev
        let nextNode = node.next

        if (nextNode != null && prevNode != null) {
            prevNode.next = nextNode
            nextNode.prev = prevNode
        } else if (nextNode == null && prevNode != null) {
            prevNode.next = null
        } else if (prevNode == null && nextNode != null) {
            this.head = nextNode
            nextNode.prev = null
        } else if (prevNode == null && nextNode == null) {
            this.head = null
            this.tail = null
        }
    }
    

    linkedSize() {
        function size(node, count) {
        
            if (node.next == null) return count
            else return size(node.next, count+1)
        }
    
        return size(this.head, 1) 
    }

    print() {
        function print(node) {
            console.log(node.data)
            if (node.next != null) print(node.next)
        }
        print(this.head)
    }

    size() {
        var count = 0
        var node = this.head
        while (node != null) {
            count++
            node = node.next
        }
        return count
    }
}

function addLists(lowerList, upperList) {
    let joinedList = new LinkedList()
    var node = lowerList.head
    while (node != null) {
        joinedList.addToLinkedHead(node.data)
        node = node.next
    }

    node = upperList.head
    while (node != null) {
        joinedList.addToLinkedHead(node.data)
        node = node.next
    }
    
    return joinedList
}

module.exports = {
    LinkedList,
    Node,
    addLists
}