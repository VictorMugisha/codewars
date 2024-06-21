

function twinPrime(n) {
    let start = 2
    let twins = []
    for (start; start <= n; start++) {
        let k = start + 2
        if (isPrime(start) && isPrime(k)) {
            twins.push([start, k])
        }
    }
    return twins.length
}

function isPrime(number) {
    let n = 2
    if (number < n) return false
    while (n < number) {
        if (number % n === 0) {
            return false
        }
        n++
    }
    return true
}







// function twinPrime(n) {
//     let twins = [];
//     for (let start = 2; start <= n; start++) {
//         let k = start + 2;
//         if (k <= n + 1 && isPrime(start) && isPrime(k)) {
//             twins.push([start, k]);
//         }
//     }
//     return twins.length;
// }

// function isPrime(number) {
//     if (number < 2) return false;
//     for (let n = 2; n <= Math.sqrt(number); n++) {
//         if (number % n === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// // Example usage:
// console.log(twinPrime(12)); // Output: 3
