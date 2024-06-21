function stringExpansion(s = "") {
    let previousNumber = 1
    let resultString = ''
    for (let char of s) {
        if (!isNaN(char)) {
            previousNumber = Number(char)
        } else {
            resultString += char.repeat(previousNumber)
        }
    }
    console.log(resultString);
}

stringExpansion("3D2a5d2f") // DDDaadddddff
stringExpansion("3abc") //"aaabbbccc"
stringExpansion("1111") // ""