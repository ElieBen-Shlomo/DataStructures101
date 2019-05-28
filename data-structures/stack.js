const DataStructures = require("../data-structures/linked-list")

class Stack extends DataStructures.LinkedList {
    pop() {
        let item = this.head 
        this.head = item.next
        return item
    }

    push(data) {
        this.addToLinkedHead(data)
    }

    peek() {
        return this.head.data
    }

    isEmpty() {
        return this.head == null
    }
}

let blah = new Stack()
blah.push(0)
blah.push(1)
blah.push(2)
blah.push(3)

blah.print()