object Main {
  var cache: Map[Int, Int] = Map(0 -> 0, 1 -> 1, 2 -> 2)

  def main(args: Array[String]) = {
    println(climbStairs(5))
  }

  def climbStairs(n: Int): Int = {
    if (n==0) cache(0)
    else if(n == 1) cache(1)
    else if(n ==2) cache(2)
    else{
      if (cache.isDefinedAt(n)) cache(n)
      else {
        val res = climbStairs(n - 2) + climbStairs(n - 1)
        cache += (n -> res)
        res
      }
    }
  }
}
