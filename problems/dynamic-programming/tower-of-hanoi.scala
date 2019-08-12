// Tower of Hanoi problem solved recursively 

import scala.collection.mutable.ArrayBuffer

object Main {
  var state: List[ArrayBuffer[Int]] = List(ArrayBuffer(1,2,3,4,5), ArrayBuffer(), ArrayBuffer())

  def main(args: Array[String]) = {
    println(state)
    moveStack(5, 0, 2)
  }

  def moveStack(stackSize: Int, startPosition: Int, endPosition: Int): Unit = {
    if (stackSize == 1) {
      val head = state(startPosition).head
      state(endPosition).prepend(head)
      state(startPosition).remove(0)
    } else if (stackSize == 2) {
      moveStack(1, startPosition, otherPosition(startPosition, endPosition))
      moveStack(1, startPosition, endPosition)
      moveStack(1, otherPosition(startPosition, endPosition), endPosition)
    } else if (stackSize > 2) {
      moveStack(stackSize - 1, startPosition, otherPosition(startPosition, endPosition))
      moveStack(1, startPosition, endPosition)
      moveStack(stackSize - 1, otherPosition(startPosition, endPosition), endPosition)
    }

    println(state)
  }

  def otherPosition(position1: Int, position2: Int): Int= {
    (3 - position1 - position2) % 3
  }
}
