const StackStructure = require("../../data-structures/stack")
// We keep the stack minimum stored in state
// Every time we add an element to the stack, we attach the current stack minimum to that node
// When we add a node we compare the stack minimum to the node.data and reavaluate appropriately 
// When we pop the head, we set the stack min as the head.nextMin

class NodeWithMin {
    constructor(data, prev, next, nextMin) {
        this.data = data
        this.prev = prev
        this.next = next
        this.nextMin = nextMin
    }
}

class StackWithMin extends StackStructure.Stack {
    constructor() {
        super()
        this.min = null
    }

    addToLinkedHead(data) {
        const node = new NodeWithMin(data, null, this.head, this.min)
        if (this.head) this.head.prev = node;
        else this.tail = node
        this.head = node
    }

    push(data) {
        if (data < this.min) this.min = data
        this.addToLinkedHead(data)
    }

    pop() {
        let item = this.head 
        this.head = item.next

        this.min = item.nextMin

        return item.data
    }
}

let stack = new StackWithMin()
stack.push(1)
stack.push(2)
stack.push(-3)
stack.push(4)
stack.push(5)
stack.push(-100)

console.log(stack.min)
