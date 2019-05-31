const StackStructure = require("../../data-structures/stack")
//We implement a Queue using two stacks. The only interesting api is dequeue

class QueueFromStack extends StackStructure.Stack {

    constructor() {
        super()
        this.tempStack = new StackStructure.Stack()
    }

    dequeue() {
        if (this.tempStack.size() == 0) {
            while (this.head != null) {
                this.tempStack.push(this.pop())
            }
        } else {
            return this.tempStack.pop()
        }

        return this.tempStack.pop()
    }
}

let queue = new QueueFromStack()
queue.push(1)
queue.push(2)
queue.push(3)

queue.dequeue()
queue.dequeue()

queue.push(4)
queue.push(5)

queue.dequeue()
queue.dequeue()

console.log("left stack:")
queue.print()

console.log("right stack:")
queue.tempStack.print()