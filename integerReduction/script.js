/**
 * 
 * 1. Get the smallest digit from the input number
 * 2. Check all numbers equal to that number and get their positions
 * 3. Count possible combinations from all smallest numbers onwards 
 * 4. Compare combinations obtained and return the integer representing the small one of them
 */

function solve (n, k) {
    let stringN = ""+n
    let len = stringN.length
    let resCount = len - k

    let possibleCombinations = []
    let combination = []

    let smallest = stringN.split('').sort()[0]
    let allSmallest = []
    for (let [index,item] of stringN.split('').entries()) {
        if (item === smallest) {
            let newStr = stringN.split('').splice(index, resCount)
            console.log(newStr)
        }
    }

}

console.log(solve(123056,4))
// console.log(solve(1063056,4))