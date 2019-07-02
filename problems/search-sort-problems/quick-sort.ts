function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr

    const middleValue = arr[Math.floor(arr.length / 2)]
    const smallerElements = arr.filter(e => e < middleValue)
    const largerElements = arr.filter(e => e > middleValue)
    const middleElements = arr.filter(e => e == middleValue)

    const smallerSorted = quickSort(smallerElements)
    const largerSorted = quickSort(largerElements)

    return smallerSorted.concat(middleElements).concat(largerSorted)
}

console.log(quickSort([1,2,3,-1,300,-1220,12,-0.2,3]))
