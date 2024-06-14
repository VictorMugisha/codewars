function isSumOfCubes(s) {
    let groups = [];
    let group = [];
    let result = [];
    let sum = 0;

    // // Helper function to check if a number is a sum of cubes of its digits
    // function isCubeSum(num) {
    //     let digits = num.toString().split('').map(Number);
    //     let cubeSum = digits.reduce((acc, digit) => acc + Math.pow(digit, 3), 0);
    //     return cubeSum === num;
    // }

    // Iterate through the string to find groups of digits
    for (let char of s) {
        if (!isNaN(char) && char !== ' ' && group.length < 3) {
            // console.log(char)
            group.push(char);
        } else {
            if (group.length > 0) {
                console.log(group)
                // groups.push(group.join(''));
                group = [];
            }
        }
    }
    console.log(group)

    // // Add the last group if it exists
    // if (group.length > 0) {
    //     groups.push(group.join(''));
    // }

    // // Split longer groups into parts of three digits each
    // let splitGroups = [];
    // for (let g of groups) {
    //     while (g.length > 3) {
    //         splitGroups.push(g.slice(0, 3));
    //         g = g.slice(3);
    //     }
    //     if (g.length > 0) {
    //         splitGroups.push(g);
    //     }
    // }

    // // Check each group to see if it is a sum of cubes of its digits
    // for (let numStr of splitGroups) {
    //     let num = parseInt(numStr, 10);
    //     if (isCubeSum(num)) {
    //         result.push(num);
    //         sum += num;
    //     }
    // }

    // // Return the formatted result
    // if (result.length > 0) {
    //     return `${result.join(' ')} ${sum} Lucky`;
    // } else {
    //     return "Unlucky";
    // }
    return ''
}


// console.log(isSumOfCubes("aqdf&0#1xyz!22[153(777.777"))
// console.log(isSumOfCubes("QK29a45[&erui9026315"))
// console.log(isSumOfCubes("0 9026315 -827&()"))
console.log(isSumOfCubes("Once 1000upon a midnight 110dreary, while100 I pondered, 9026315weak and weary -827&()"))