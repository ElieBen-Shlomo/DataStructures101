function mapStringToFrequencyArray(s: string): number[] {
    const freqArray: number[] = new Array(26).fill(0)

    for (let c of s) {
        const numberFromLetter = parseInt(c, 36) - 10
        freqArray[numberFromLetter] += 1
    }

    return freqArray
}

function lexiographicOrder(s: string, t: string): boolean {
    if (s.length > t.length) return true
    if (s.length < t.length) return false
    if (s.length == 0 && t.length == 0) return true

    const headComparison = s[0] == t[0]
    if (!headComparison) {
        return s[0] > t[0] ? true : false
    } else {
        return lexiographicOrder(s.slice(1), t.slice(1))
    }
}

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
 