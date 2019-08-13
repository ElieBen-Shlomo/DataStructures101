// How many ways can you sum some numbers to get another number

// I think that the optimal solution to this also involves some caching somewhere

object Main {
  val coins = List(1,2,5)
  var partitions: List[Map[Int, Int]] = List()

  type Partition = Map[Int, Int]
  var cache: Map[(Map[Int, Int], Int), ]

  def main(args: Array[String]) = {
    partition(Map(1->0, 2->0, 5->0), 10)
    println(partitions)
  }

  def partition(freq: Map[Int, Int], n: Int): Unit = {
    freq.keys.foreach(c => {
      val newFreq = freq + (c -> (freq(c) + 1))
      if (n - c > 0) {
        partition(newFreq, n - c)
      } else if (n - c == 0) {
        partitions = partitions ++ List(newFreq)
      }
    })
  }
}
