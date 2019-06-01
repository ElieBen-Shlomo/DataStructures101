const DataStructures = require("../data-structures/linked-list")

class Stack extends DataStructures.LinkedList {
    pop() {
        let item = this.head 
        this.head = item.next
        return item.data
    }

    push(data) {
        this.addToLinkedHead(data)
    }

    peek() {
        if (this.head != null) return this.head.data
        else return null
    }

    isEmpty() {
        return this.head == null
    }
}

module.exports = {
    Stack
}