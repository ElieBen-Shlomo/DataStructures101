const StackStructure = require("../../data-structures/stack")
// Just a stack of stacks with an upper limit on the inner stack

let STACK_SIZE = 5

class MultiStack extends StackStructure.Stack {

    constructor() {
        super()
        this.push(new StackStructure.Stack())
    }

    multiPush(data) {
        if (this.head.data.size() < STACK_SIZE) {
            this.head.data.push(data)
        } else {
            this.push(new StackStructure.Stack())
            this.head.data.push(data)
        }     
    }

    multiPop() {
        if (this.head.data.size() >= 2) {
            this.head.data.pop()
        } else {
            this.pop()
        }
    } 
}

let mStack = new MultiStack()
mStack.multiPush(1)
mStack.multiPush(2)
mStack.multiPush(3)
mStack.multiPush(4)
mStack.multiPush(5)

mStack.multiPush(6)
mStack.multiPush(7)
mStack.multiPush(8)

mStack.multiPop()
mStack.multiPop()
mStack.multiPop()

mStack.multiPop()
mStack.multiPop()
mStack.multiPop()

mStack.print()