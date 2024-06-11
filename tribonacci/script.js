function tribonacci(signature,n){
    if (n === 0) return []

    const result = []
    // let first = signature[0]
    // let second = signature[1]
    // let third = signature[2]
    let [first, second, third] = signature
    let forth

    if (n < signature.length) {
        for (let i = 0; i < n; i++) {
            result.push(signature[i])
        }

    } else {
        result.push(first)
        result.push(second)
        result.push(third)
        for (let i = 4; i <= n; i++) {
            forth = first + second + third
            result.push(forth)
            // [first, second, third] = [second, third, forth]
            first = second
            second = third
            third = forth
        }
    }
    return result
}

console.log(tribonacci([1,1,1], 10))
console.log(tribonacci([0,0,1], 10))
console.log(tribonacci([1,1,1],  1))
console.log(tribonacci([300,200,100], 0))