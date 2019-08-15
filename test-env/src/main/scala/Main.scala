import scala.collection.mutable.ArrayBuffer

object Main {

  def main(args: Array[String]) = {
    println(lengthOfLongestSubstring(""))
  }

  def lengthOfLongestSubstring(s: String): Int = {
    val charList = s.toList
    val hashMap = toHashMap(charList)
    println(hashMap)
    val listOfLists = hashMap.keys.toList.map(char => maxDifference(hashMap(char)))
    println(listOfLists)
    if (listOfLists.nonEmpty) listOfLists.max else 0
  }

  def toHashMap(list: List[Char]): Map[Char, List[Int]] = {
    list.zipWithIndex.foldLeft(Map.empty[Char, List[Int]])((map, e) => map + (e._1 -> (map.getOrElse(e._1, List()) ++ List(e._2))))
  }

  def maxDifference(list: List[Int]): Int = {
    if (list.length == 0) return 0
    var diff = 0
    for (i <- 1 until list.length) {
      val newDiff = Math.abs(list(i) - list(i - 1))
      if (newDiff > diff) {
        diff = newDiff
      }
    }
    diff
  }

}
