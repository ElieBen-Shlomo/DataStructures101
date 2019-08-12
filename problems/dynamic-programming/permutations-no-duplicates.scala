// Print all permutations of a string

object Main {
  type Permutation = List[Int]
  private val string = "Elie"

  private var cache: Map[Int, List[List[Int]]]= Map(0 -> List(List(1)))

  def main(args: Array[String]) = {
    val integerPermutations = permutations(string.length)
    val stringPermutations = integerPermutations.map(_.map(i => string(i - 1)))
    println(stringPermutations)
  }

  def permutations(size: Int): List[List[Int]] = {
    if (size == 1) cache(0)
    else if (cache.contains(size)) cache(size)
    else {
      val oldPermutations = permutations(size - 1)

      val newPermutations = (0 until size).toList.flatMap(index =>
        oldPermutations.map(perm =>
          addToList(perm, index, size)
        )
      )
      cache += size -> newPermutations
      newPermutations
    }
  }

  def addToList[A](list: List[A], index: Int, element: A): List[A] = {
    val lowerList = list.take(index)
    val upperList = list.takeRight(list.length - index)
    lowerList ++ List(element) ++ upperList
  }
}
