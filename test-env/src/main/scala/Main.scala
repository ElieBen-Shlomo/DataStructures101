import scala.collection.mutable
import scala.collection.mutable.ArrayBuffer

object Main {

  def main(args: Array[String]) = {
    println(lengthOfLongestSubstring("abcde"))
  }

  def lengthOfLongestSubstring(s: String): Int = {
    if (s.isEmpty) return 0
    val charList = s.toList
    val hashMap = toHashMap(charList)
    val listOfLists = hashMap.keys.toList.map(char => maxSubstringForGivenCharacter(charList, hashMap, char))
    println(hashMap)
    println(listOfLists)
    listOfLists.max
  }

  def toHashMap(list: List[Char]): Map[Char, List[Int]] = {
    list.zipWithIndex.foldLeft(Map.empty[Char, List[Int]])((map, e) => map + (e._1 -> (map.getOrElse(e._1, List()) ++ List(e._2))))
  }

  def maxSubstringForGivenCharacter(list: List[Char], hashFrequency: Map[Char, List[Int]], char: Char): Int = {
    val occurences = hashFrequency(char)
    if (occurences.length == 1)  list.length - occurences.head
    else maxDifference(occurences)
  }

  def maxDifference(list: List[Int]): Int = {
    if (list.isEmpty) return 0
    else if (list.length == 1) return 1

    var diff = 0
    for (i <- 1 until list.length) {
      val newDiff = Math.abs(list(i) - list(i - 1))
      if (newDiff > diff) {
        diff = newDiff
      }
    }
    diff
  }

//  def lengthOfLongestSubstring(s: String): Int = {
//    if (s.isEmpty) 0
//    else {
//      val lookupTable = mutable.HashMap[Char,Int]()
//      var start = 0
//      var length = 0
//      for ( (c, i) <- s.zipWithIndex) {
//        if (!(lookupTable contains c)) {
//          lookupTable(c) = i
//        } else {
//          val newLength = i - start
//          if (newLength > length) length = newLength
//          start = lookupTable(c) + 1
//          lookupTable.retain((k,v) => v >= start)
//          lookupTable(c) = i
//        }
//      }
//      Math.max(length, (s.length - start))
//    }
//  }

}
