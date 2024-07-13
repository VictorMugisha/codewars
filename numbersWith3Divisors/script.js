function findDivisors(number) {
    let divisorsCount = 0
    let divisors = []
    let startingPoint = 2
    while (startingPoint < number) {
        if (number % startingPoint === 0) {
            divisorsCount++
            divisors.push(startingPoint)
        }
        startingPoint++
    }
    return divisors
}


function solution(n, m) {
    const solution = [];
    const possibleIntegers = []

    for (let i = n; i <= m; i++) {
        possibleIntegers.push(i)
    }

    for (let number of possibleIntegers) {
        if (findDivisors(number).length === 3) {
            solution.push(number)
        }
    }

    return solution
}

let test = solution(2, 20)
console.log(test);
// console.log(findDivisors(16));