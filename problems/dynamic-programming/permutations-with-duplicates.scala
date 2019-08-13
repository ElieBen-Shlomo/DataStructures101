// Print all permutations of a string with duplicate elements

object Main {
  type Permutation = List[Char]
  private val string = "elie"

  def main(args: Array[String]) = {
    println(permutations(listToFrequency(string.toList)))
  }

  def permutations(freq: Map[Char, Int]): List[Permutation]= {
      if (freq.size == 1) List(freq.keys.toList.flatMap(key => (0 until freq(key)).toList.map(i => key)))
      else freq.keys.toList.flatMap(key => {
        val newFreq =  if (freq(key) > 1) freq + (key -> (freq(key) - 1)) else freq - key
        permutations(newFreq).map(perm => List(key) ++ perm)
      })
    }

  def listToFrequency[A](list: List[A]): Map[A, Int] = {
    var freqMap: Map[A, Int] = Map()
    list.foreach(e => {
      freqMap += (e -> (freqMap.getOrElse(e, 0) + 1))
    })
    freqMap
  }
}
