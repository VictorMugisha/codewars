function solve(arr, n) {
    let catsCaught = 0;
    let caught = Array(arr.length).fill(false); // To track caught cats

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'D') {
            for (let j = Math.max(0, i - n); j <= Math.min(arr.length - 1, i + n); j++) {
                if (arr[j] === 'C' && !caught[j]) {
                    caught[j] = true;
                    catsCaught++;
                    break; // Move to the next dog after catching a cat
                }
            }
        }
    }

    return catsCaught;
}

const test1 = solve(['D','C','C','D','C'], 2)
console.log(test1)