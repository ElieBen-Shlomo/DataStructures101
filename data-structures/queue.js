const DataStructures = require("../data-structures/linked-list")
// head is last in
// tail is first in
// next is last -> first
// previ is first -> last

class Queue extends DataStructures.LinkedList {

    add(data) {
        const node = new DataStructures.Node(data, this.tail, null)
        if (this.tail) this.tail.next = node
        else this.head = node
        this.tail = node
    }

    remove() {
        this.head = this.head.next
        this.head.prev = null
    }

    peek() {
        return this.head.data
    }

    isEmpty() {
        return this.head == null
    }
}

module.exports = {
   Queue
}