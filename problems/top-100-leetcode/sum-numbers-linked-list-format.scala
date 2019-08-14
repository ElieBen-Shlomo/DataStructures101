// Add two numbers (Linked List)
// Unfinished

class ListNode(var _x: Int = 0) {
   var next: ListNode = null
   var x: Int = _x
}

object Main {

  def main(args: Array[String]) = {
    var l1 = new ListNode(2)
    l1.next = new ListNode(4)
    l1.next.next = new ListNode(3)

    var l2 = new ListNode(5)
    l2.next = new ListNode(6)
    l2.next.next = new ListNode(8)
    l2.next.next.next = new ListNode(9)

    var sum = addTwoNumbers(l1, l2, false)

    println(sum._x)
    println(sum.next._x)
    println(sum.next.next._x)
    println(sum.next.next.next._x)
    println(sum.next.next.next.next._x)
  }


  def addTwoNumbers(l1: ListNode, l2: ListNode, carryOn: Boolean): ListNode = {
    val x1 = l1._x
    val x2 = l2._x
    val sum = x1 + x2 + (if (carryOn) 1 else 0)

    val nextCarryOn = if (sum >= 10) true else false
    val sumDigit = if (!nextCarryOn) sum else sum - 10

    var node = new ListNode(sumDigit)

    if (l1.next == null && l2.next == null) {
      if (carryOn) return new ListNode(0)
      else return node
    }

    val l1Next = if (l1.next != null) l1.next else new ListNode(0)
    val l2Next = if (l2.next != null) l2.next else new ListNode(0)

    node.next = addTwoNumbers(l1Next, l2Next, nextCarryOn)
    node
  }
}
