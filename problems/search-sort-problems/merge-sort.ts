function merge<A>(s: A[], t: A[]): A[] {
    function tPush() {
      const head = tTemp[0]
        tempArr.push(head)
        tTemp.splice(0,1)
    }

    function sPush() {
      const head = sTemp[0]
        tempArr.push(head)
        sTemp.splice(0,1)
    }

    var sTemp = s.slice()
    var tTemp = t.slice()

    const tempArr:A[] = []
    const totalLength = s.length + t.length
    while (tempArr.length < totalLength) {
      if (sTemp.length == 0 && tTemp.length != 0) {
        tPush()
      } else if (sTemp.length != 0 && tTemp.length == 0) {
        sPush()
      } else {
        if (sTemp[0] <= tTemp[0]) {
          sPush()
        } else {
          tPush()
        }
      }
    }

    return tempArr
}

function mergeSort<A>(arr: A[]): A[] {
  if (arr.length == 1) {
    return arr
  }
  

  var tempArr = arr.slice()
  const middleIndex = Math.floor(tempArr.length / 2) 
  const leftArr = tempArr.splice(0,middleIndex)
  tempArr = arr.slice()
  const rightArr = tempArr.splice(middleIndex)

  const left = (mergeSort(leftArr))
  const right = (mergeSort(rightArr))
  
  return merge(left, right)
}

console.log(mergeSort([2, 5, 3, 1, 4, 7, 10, 15,-23,321,0,100]))
