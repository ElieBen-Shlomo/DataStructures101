// Get a robot from the the top left to the bottom right of a grid. He can only go right and down.
// There are a bunch of 'holes' in the map where the robot cannot venture.
// Without holes, we would try to take the diagonal because of Pythagoras.

object Main {
  private val rows = 4
  private val columns = 3
  private val holes : List[(Int, Int)] = List(
    (0,1), (2,1)
  )
  type Location = (Int, Int)
  type Path = List[Location]

  def main(args: Array[String]) = {
    val initialPaths = List(List((0,0)))

    println(findPaths(initialPaths, 5))
  }

  def findPaths(paths: List[Path], depth: Int): List[Path] =
    if (depth == 0) paths
    else findPaths(expandPaths(paths), depth - 1)

  def expandPaths(paths: List[Path]): List[Path] = {
    val pathLength = paths.head.length

    val pathsWithHeads = paths.map(path => (path, path.last))
    val pathsWithNeighbors = pathsWithHeads.map{case (path, last) => (path, neighbors(last))}

    val pathsWithValidNeighbors = pathsWithNeighbors.map{case (path, neighbors) => (path, neighbors.filter(validLocation(_ , holes, rows, columns)))}

    val newPaths: List[Path] = pathsWithValidNeighbors.flatMap{
      case (path, neighbors) => neighbors.map(validNeighbor =>
        path ++ List(validNeighbor)
      )
    }

    newPaths.filter(_.length == pathLength + 1)
  }

  def validLocation(location: Location, holes: List[Location], rows: Int, columns: Int): Boolean =
    !holes.contains(location) && location._1 < rows && location._2 < columns

  def neighbors(location: Location): List[Location] = {
    List(location + (0,1), location + (1,0))
  }
  implicit class TuppleAdd(t: (Int, Int)) {
    def +(p: (Int, Int)) = (p._1 + t._1, p._2 + t._2)
  }
}
