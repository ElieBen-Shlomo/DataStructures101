import scala.collection.mutable
import scala.collection.mutable.ArrayBuffer

object Main {

  def main(args: Array[String]) = {
    val a = "abccbfeghhgeq"
    val b = "abcdcba"
    val c = "babad"
    val d = ""
    val e = "aa"
    val f = "r"

    println(longestPalindrome(a))
    println(longestPalindrome(b))
    println(longestPalindrome(c))
    println(longestPalindrome(d))
    println(longestPalindrome(e))
    println(longestPalindrome(f))
  }

  def longestPalindrome(s: String): String = {
    if (s.length == 0) return ""
    var dist = 0
    var str = ""
    var isEven = true

    val list = s.toList
    for (i <- 0 until s.length ) {
      val l1 = expandAroundCenter(list, i, i)
      val l2 = expandAroundCenter(list, i, i + 1)
      val l = Math.max(l1, l2)
      isEven = l == l2

      if (l > dist) {
        dist = l
        str = s.slice(i - (l-1)/2 , i + l/2 + 1)
      }
    }
    str
  }

  def expandAroundCenter(s: List[Char], i: Int, j: Int): Int = {
    var left = i
    var right = j
      while (0 <= left && right < s.length && s(left) == s(right)) {
      left -= 1
      right += 1
    }
    right - left - 1
  }
}
