import scala.collection.mutable
import scala.collection.mutable.ArrayBuffer

object Main {

  def main(args: Array[String]) = {
    val nums = Array(13,5,-4,-9,1,-3,10,-7,7,3,1,-13,-11,7,-10,12,-15,13,5,-8,-11,-12,-15,-13,-3,-13,5,-4,6,1,-10,4,13,-7,3,-9,-3,-2,-1,12,9,-15,14,5,0,-10,-5,-8,-12,-15,-1,-8,11,-9,-14,-7,-6,7,-4,-15,-15,-7,-4,14,1,6,12,14,12,-11,11,-2,11,2,-12,-4,7,-2,-5,10,-9,10,9,-13,-14,11,-13,-13,3,-1,9,3,7,-9,-6,-14,4,-8,7,1,-12,-5,14,14,12,10,-12,-3,-7,-2,-8,-9,-7,9,-7,-13,5,-12,-11,-7,2,14,3,-14)
    println(unique(threeSum(nums)).map(x => mapToList(x)))
  }

  def threeSum(nums: Array[Int]): List[List[Int]] = {
    val keyToIndicies = nums.toList.zipWithIndex.foldLeft(Map.empty[Int, List[Int]])((map, e) => map + (e._1 -> (map.getOrElse(e._1, List()) ++ List(e._2))))

    var ret:ArrayBuffer[List[Int]] = ArrayBuffer()

    for (i <- nums.indices; j <- nums.indices if j > i) {
      val sum = nums(i) + nums(j)
      val isSumInNegativeHash = keyToIndicies.contains(-sum)
      val isTripleValid =
          !keyToIndicies.getOrElse(-sum, List()).contains(i) &&
          !keyToIndicies.getOrElse(-sum, List()).contains(j)
      // triple = (i,j, -sum). We need to check that -sum isn't one of i or j
      if (isSumInNegativeHash && isTripleValid) {
        ret += List(nums(i), nums(j) , -sum)
      }
    }
    ret.toList
  }

  def unique(list: List[List[Int]]): List[Map[Int, Int]] = {
    var map: Set[Map[Int, Int]] = Set()
    for (triple <- list) {
      val tripletAsMap = triple.foldLeft(Map.empty[Int, Int])((map, e) => map + (e -> (map.getOrElse(e,0)+ 1)))
      map += tripletAsMap
    }
    map.toList
  }

  def isPermutation(a: List[Int], b: List[Int]): Boolean = {
    if (a.length != 3 || b.length != 3) throw new Exception("Dimension error")
    val aMap = a.foldLeft(Map.empty[Int, Int])((map, e) => map + (e -> (map.getOrElse(e,0)+ 1)))
    val bMap = b.foldLeft(Map.empty[Int, Int])((map, e) => map + (e -> (map.getOrElse(e,0)+ 1)))

    aMap == bMap
  }

  def mapToList(map: Map[Int, Int]): List[Int] = {
    var triple: ArrayBuffer[Int] = ArrayBuffer()
    for (key <- map.keys) {
      for (i <- 0 until map(key)) {
        triple += key
      }
    }
    triple.toList

  }
}
