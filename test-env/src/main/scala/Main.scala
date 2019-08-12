import scala.collection.mutable.Map
// Find all subsets of a given set

object Main {
  type Subset = List[Int]
  type PowerSet = List[Subset]

  private val set = List(1,5,12,2)
  private val cache: Map[Int,PowerSet] = Map()

  def main(args: Array[String]) = {
    val powerSetIndices = powerSet(set.length)
    val powerSetValues = powerSetIndices.map(subsetIndices =>
      subsetIndices.map(index =>
        set(index - 1)))

    println(powerSetValues)
  }

  def powerSet(size: Int): PowerSet= {

    if (cache.contains(size)) {
      cache(size)
    } else if (size == 0) {
      cache += (0 -> List())
      List(List())
    } else {
      val previousSubsets = powerSet(size - 1)
      val newSubsets = previousSubsets ++ previousSubsets.map(subset => subset ++ List(size))
      newSubsets
    }
  }
}
