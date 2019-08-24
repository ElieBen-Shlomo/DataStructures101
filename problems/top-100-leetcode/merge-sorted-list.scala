
class ListNode(var _x: Int = 0) {
  var next: ListNode = null
  var x: Int = _x
}


object Main {

  def main(args: Array[String]) = {
    val l1 = new ListNode(1)
    l1.next = new ListNode(2)
    l1.next.next = new ListNode(4)

    val l2 = new ListNode(1)
    l2.next = new ListNode(3)
    l2.next.next = new ListNode(4)


    printList(mergeTwoLists(l1,l2))
  }

  def mergeTwoLists(l1: ListNode, l2: ListNode): ListNode = {
    if (l1 == null) l2
    else if (l2 == null) l1
    else {
      if (l1.x < l2.x) {
        val res = new ListNode(l1.x)
        print(res.x)
        res.next = mergeTwoLists(l1.next, l2)
        res
      } else {
        val res = new ListNode(l2.x)
        print(res.x)
        res.next = mergeTwoLists(l1, l2.next)
        res
      }
    }
  }

  def printList(list: ListNode): Unit = {
    if (list == null) return
    else {
      println(list.x)
      printList(list.next)
    }
  }
}
