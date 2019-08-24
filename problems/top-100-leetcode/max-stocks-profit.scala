
object Main {

  def main(args: Array[String]) = {
    val stocks = Array(7,1,5,3,6,4)
    val s2 = Array(7,6,4,3,1)
    val s3 = Array(1,2,3,2,3,4,5,6,5,4,3,10,5,-10)

    val s4: Array[Int] = Array(-10)
    println(maxProfit(stocks))
    println(maxProfit(s2))
    println(maxProfit(s3))
    println(maxProfit(s4))

  }

  def maxProfit(prices: Array[Int]): Int = {

    var min = (0, Int.MaxValue)
    var max = (0, Int.MinValue)
    var profit = 0

    for (i <- prices.indices) {
      if (prices(i) < min._2) {
        min = (i, prices(i))
        max = min
      }

      if (prices(i) > max._2) {
        max = (i, prices(i))
      }


      if (max._2 - min._2 > profit) {
        profit = max._2 - min._2

        println(min)
        println(max)
      }
    }
    profit
  }
}