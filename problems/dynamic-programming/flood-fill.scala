import scala.collection.mutable.ArrayBuffer
// Recursively fill region with paint

object Main {
  var map: ArrayBuffer[ArrayBuffer[Int]] = ArrayBuffer(ArrayBuffer(1,1,1,1), ArrayBuffer(0,0,0,1), ArrayBuffer(1,0,0,1), ArrayBuffer(1,0,1,1))
  val start = (0,0)
  val initialColour = map(start._1)(start._2)
  val newColour = 2

  def main(args: Array[String]) = {
    expandPaint(start)
    println(map)

  }

  def expandPaint(cell: (Int, Int)):Unit = {

      val surroundingPoints = List(
        cell + (1, 0),
        cell + (-1, 0),
        cell + (0, 1),
        cell + (0, -1),
      )

      surroundingPoints.foreach(cell => {
        if (mapConstraints(cell)) {
          if (map(cell._1)(cell._2) == initialColour) {
            map(cell._1)(cell._2) = newColour
            expandPaint(cell)
          }
        }
      })
  }

  def mapConstraints(cell: (Int, Int)): Boolean = {
    val x = cell._2
    val y = cell._1
    y >= 0 && y < map.length && x >= 0 && x < map(0).length
  }

  implicit class TuppleAdd(t: (Int, Int)) {
    def +(p: (Int, Int)) = (p._1 + t._1, p._2 + t._2)
  }
}
