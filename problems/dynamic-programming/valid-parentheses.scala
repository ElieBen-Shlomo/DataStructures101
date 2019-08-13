// Print all permutations of a string with duplicate elements

object Bracket extends Enumeration {
  type Bracket = Value
  val Left, Right = Value
}
import Bracket._

//type Expression = List[Bracket.Value]

object Main {
  def main(args: Array[String]) = {
    val n = 3
    val expressions = parentheses(n)
    val stringExpressions = expressions.map(_.map(letter => if (letter == Left) '(' else ')').mkString)
    println(stringExpressions)
  }

  def parentheses(n: Int): List[List[Bracket.Value]] = {
    if (n == 1) List(List(Left, Right))
    else {
      val prevValidExpressions = parentheses(n - 1)
      val newValidExpressions =
        prevValidExpressions.map(expression => List(Left) ++ expression ++ List(Right)) ++
        prevValidExpressions.map(expression => List(Left) ++  List(Right) ++ expression) ++
        prevValidExpressions.map(expression => expression ++ List(Left) ++  List(Right))
      getUnique(newValidExpressions)
    }
  }

  def getFrequency[A](list: List[A]): Map[A, Int] = {
    list.foldLeft(Map.empty[A, Int]){(map, e) => map + (e -> (map.getOrElse(e, 0) + 1))}
  }

  def getUnique[A](list: List[A]) : List[A] = {
    list.foldLeft(Set.empty[A]){(set, e) => set + e}.toList
  }
}
