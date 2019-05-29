const DataStructures = require("../data-structures/linked-list")
// Remove duplicate elements from a linked list


list = new DataStructures.LinkedList()

list.addToLinkedHead(1)
list.addToLinkedHead(2)
list.addToLinkedHead(3)
list.addToLinkedHead(3)
list.addToLinkedHead(2)
list.addToLinkedHead(5)

// Hash map implementation. O(n) time, O(n) space
var containsElement = new Set()
var node = list.head
while (node != null) { 
    containsElement.add(node.data)
    node = node.next
}
newList = new DataStructures.LinkedList()
for (let key of containsElement) {
    newList.addToLinkedHead(key)
}
list.print()
console.log("")
newList.print()
console.log("")

//In place implementation. O(n^2) time, O(1) space

node = list.head
while (node != null) {
    tempNode = node.next
    while(tempNode != null) {
        if (tempNode.data == node.data) {
            list.removeNode(tempNode)
        }
        tempNode = tempNode.next
    }
    node = node.next
}

list.print()