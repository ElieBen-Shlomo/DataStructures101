object Main {

  def main(args: Array[String]) = {
    val array = Array(-2,1,-3,4,-1,2,1,-5,4)
    val arr2 = Array(-10,100,1,1,-99,1,1,1,1,1)
    val arr3: Array[Int] = Array(-1,-99)
    println(maxSubArray(array))
    println(maxSubArray(arr2))
    println(maxSubArray(arr3))
  }

  def maxSubArray(nums: Array[Int]): Int = {
    var back = 0
    var front = 0
    var max = 0

    while (back < nums.length) {
      if (nums(back) > 0) {
        front = back
        var sum = 0
        var j = back
        while (j < nums.length && sum >= 0) {
          sum += nums(j)
          if (sum > max) {
            max = sum
          }
          j += 1
          back = j
        }
      } else {
        back += 1
      }
    }
    if (max == 0) nums.max else max
  }
}