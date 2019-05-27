const DataStructures = require("../data-structures/linked-list")
// Remove duplicate elements from a linked list


let list = new DataStructures.LinkedList()

list.addToLinkedHead(6)
list.addToLinkedHead(5)
list.addToLinkedHead(4)
list.addToLinkedHead(3)
list.addToLinkedHead(2)
list.addToLinkedHead(1)
list.addToLinkedHead(0)
list.addToLinkedHead(-1)
list.addToLinkedHead(-2)

function partition(mylist, value) {
    lowerList = new DataStructures.LinkedList()
    upperList = new DataStructures.LinkedList()
    head = mylist.head

    function populateLists(node) {
        if (node == null) return
    

        if (node.data < value) {
            lowerList.addToLinkedHead(node.data)
        } else {
            upperList.addToLinkedHead(node.data)
        }
        
        populateLists(node.next)
    }
    populateLists(head)
    
    return DataStructures.addLists(lowerList, upperList)
}

partition(list, 3).print()
