import scala.collection.mutable.ArrayBuffer
// Triple step. A child can jump up by 1, 2, or 3 steps. In how many different ways can they
// jump up to n steps.

// f(n) = f(n-1) + f(n-2) + f(n-3)

object Main {
  private val cache: ArrayBuffer[Int] =  ArrayBuffer(1,2,4)

  def main(args: Array[String]): Unit = {
    val n = 3
    println("f(" + n + ") = " + f(n+1))
  }

  val f: Int => Int = n => {
    if (n < cache.length) cache(n)
    else {
      cache += f(n-1) + f(n-2) + f(n-3)
      cache(n)
    }
  }
}