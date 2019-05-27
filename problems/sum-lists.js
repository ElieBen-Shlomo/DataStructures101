const DataStructures = require("../data-structures/linked-list")
// Add digits of numbers stored in linked list format. We cannot convert the list to an integer apparently
// Reverse order

function addRepresentations(list1, list2) {
    let summedList = new DataStructures.LinkedList()
    
    function addRepresentations(list1, list2, remainder) {
        //  we need to consider when the lists are of different length
        if (list1.head == null && list2.head == null && remainder != 0) {
            summedList.addToLinkedHead(1)
            return
        } else if (list1.head == null && list2.head == null  && remainder == 0) {
            return summedList
        } else if (list1.head == null && list2.head != null) {
            return DataStructures.addLists(summedList, list2)
        } else if (list1.head != null && list2.head == null) {
            return DataStructures.addLists(summedList, list1)
        }


        let head1 = list1.head
        let head2 = list2.head
        let digitSum = head1.data + head2.data


        if (digitSum >= 10) {
            firstDigit = digitSum - 10
            summedList.addToLinkedHead(firstDigit)
            list1.removeNode(head1)
            list2.removeNode(head2)

            addRepresentations(list1, list2, 1)
        } else {
            summedList.addToLinkedHead(digitSum)
            list1.removeNode(head1)
            list2.removeNode(head2)

            addRepresentations(list1, list2, 0)
        }
    }

    addRepresentations(list1, list2, 0)
    return summedList
}

let list1 = new DataStructures.LinkedList()
let list2 = new DataStructures.LinkedList()

list1.addToLinkedHead(1)
list1.addToLinkedHead(1)
// list1.addToLinkedHead(1)

list2.addToLinkedHead(1)
list2.addToLinkedHead(1)
list2.addToLinkedHead(1)

addRepresentations(list1, list2).print()
