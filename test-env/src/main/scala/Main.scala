import com.sun.xml.internal.ws.dump.LoggingDumpTube.Position

import scala.collection.mutable.ArrayBuffer

object Main {
  var state: List[ArrayBuffer[Int]] = List(ArrayBuffer(1,2,3,4,5), ArrayBuffer(), ArrayBuffer())

  def main(args: Array[String]) = {
    moveStack(2, 0, 1)
    println(state)
  }

  def moveStack(stackIndex: Int, startPosition: Int, endPosition: Int): Unit = {
    if (stackIndex == 1) {
      val head = state(startPosition).head
      state(endPosition).prepend(head)
      state(startPosition).remove(0)
    } else if (stackIndex == 2) {
      moveStack(1, startPosition, otherPosition(startPosition, endPosition))
      moveStack(1, startPosition, endPosition)
      moveStack(1, otherPosition(startPosition, endPosition), endPosition)
    }
  }

  def otherPosition(position1: Int, position2: Int): Int= {
    (3 - position1 - position2) % 3
  }
}
