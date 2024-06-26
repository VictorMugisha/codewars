function rankings(arr = []) {
    const copy = [...arr]
    return arr.map(element => copy.sort((a, b) => b - a).indexOf(element) + 1)
}

rankings([1,2,3,4,5]) // [5,4,3,2,1]
rankings([3,4,1,2,5]) //  [3,2,5,4,1]
rankings([10,20,40,50,30]) //  [5, 4, 2, 1, 3]
rankings([1, 10]) //   [2, 1]
rankings([22, 33, 18, 9, 110, 4, 1, 88, 6, 50]) // [5, 4, 6, 7, 1, 9, 10, 2, 8, 3]
/**
 * 1. 
 */