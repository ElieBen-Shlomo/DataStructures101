// Get a robot from the the top left to the bottom right of a grid. He can only go right and down.
// There are a bunch of 'holes' in the map where the robot cannot venture.
// Without holes, we would try to take the diagonal because of Pythagoras.

object Main {
  private val rows = 4
  private val columns = 3
  private val holes : List[(Int, Int)] = List(
    (4,1), (2,1), (2,2)
  )
  type Location = (Int, Int)
  type Path = List[Location]

  def main(args: Array[String]) = {
    val initialPath = List((0,0))
    val newPaths = expandPaths(List(initialPath))

    println(newPaths)
  }

  def expandPaths(paths: List[Path]): List[Path] = {
    val pathsWithHeads = paths.map(path => (path, path.head))
    val pathsWithNeighbors = pathsWithHeads.map{case (path, head) => (path, neighbors(head))}
    val pathsWithValidNeighbors = pathsWithNeighbors.map{case (path, neighbors) => (path, neighbors.filter(!holes.contains(_)))}

    val newPaths: List[Path] = pathsWithValidNeighbors.flatMap{
      case (path, neighbors) => neighbors.map(validNeighbor =>
        path ++ List(validNeighbor)
      )
    }

    newPaths
  }


  def neighbors(location: Location): List[Location] = {
    List(location + (0,1), location + (1,0))
  }
  implicit class TuppleAdd(t: (Int, Int)) {
    def +(p: (Int, Int)) = (p._1 + t._1, p._2 + t._2)
  }
}
