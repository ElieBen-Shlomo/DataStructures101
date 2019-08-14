// Two sum
// Assume a unique solution

object Main {
  val nums = List(2,7,11,15,12,25)
  val target = 37

  def main(args: Array[String]) = {
    println(getIndicies(nums, target))
  }

  def toHashMap[A](list: List[A]): Map[A, Int] = {
    list.zipWithIndex.foldLeft(Map.empty[A, Int])((a,b) => a + (b._1 -> b._2))
  }

  def getIndicies(list: List[Int], target: Int): (Int, Int) = {
    val map = toHashMap(list)
    lazy val subtractedList = list.map(e => target - e)
    for (e <- subtractedList.zipWithIndex) {
        if (map.get(e._1).isDefined){
          return (e._2, map(e._1))
        }
    }
    (-1, -1)
  }
}
