import javax.swing.tree.TreeNode

class TreeNode(var _value: Int) {
   var value: Int = _value
   var left: TreeNode = null
   var right: TreeNode = null
}

object Main {

  def main(args: Array[String]) = {
    val t1 = new TreeNode(1)
    t1.left = new TreeNode(3)
    t1.left.left = new TreeNode(5)
    t1.right = new TreeNode(2)

    val t2 = new TreeNode(2)
    t2.left = new TreeNode(1)
    t2.left.right = new TreeNode(4)
    t2.right = new TreeNode(3)
    t2.right.right = new TreeNode(7)

    val res = merge(t1, t2)
    printInOrder(res)

  }

  def merge(t1: TreeNode, t2: TreeNode): TreeNode = {
    if (t1 == null && t2 == null) return null
    else if (t1 == null) {
      val node = new TreeNode(t2.value)
      node.left = merge(null, t2.left)
      node.right = merge(null, t2.right)
      node
    } else if (t2 == null) {
      val node = new TreeNode(t1.value)
      node.left = merge(t1.left, null)
      node.right = merge(t1.right, null)
      node
    } else {
      val node = new TreeNode(t1.value + t2.value)
      node.left = merge(t1.left, t2.left)
      node.right = merge(t1.right, t2.right)
      node
    }
  }

  def printInOrder(t: TreeNode): Unit= {
    if (t == null) return
    else {
      printInOrder(t.left)
      println(t.value)
      printInOrder(t.right)
    }
  }
}
