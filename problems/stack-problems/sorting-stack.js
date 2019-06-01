const StackStructure = require("../../data-structures/stack")
// Sorting a stack using a temporary stack
// Will essentially be an implementation of insertion sort

function insert(unsortedStack, sortedStack) {
    const value = unsortedStack.pop()

    if (sortedStack.peek() == null) {
        sortedStack.push(value)
        return
    }

    const size = sortedStack.size()
    
    for (let i = 0; i < size; ++i) {
        const valueFromSortedStackToCompare = sortedStack.peek()
        if (value > valueFromSortedStackToCompare) {
            unsortedStack.push(valueFromSortedStackToCompare)
            sortedStack.pop()
        } else {break}
    }
    const numberOfElementsMovedToUnsortedStack = size - sortedStack.size()
    sortedStack.push(value)
    
    for (let i = 0; i < numberOfElementsMovedToUnsortedStack; ++i) {
        sortedStack.push(unsortedStack.pop())
    }
}


function sortStack(stack) {
    const size = stack.size()
    const sortedStack = new StackStructure.Stack()
    for (let i = 0; i < size; ++i) {
        insert(stack, sortedStack)
    }
    return sortedStack
}


let unsortedStack = new StackStructure.Stack()
unsortedStack.push(5)
unsortedStack.push(4)
unsortedStack.push(1)
unsortedStack.push(9)
unsortedStack.push(4)
unsortedStack.push(1)
unsortedStack.push(9)

unsortedStack.print()
console.log("")
sortStack(unsortedStack).print()

