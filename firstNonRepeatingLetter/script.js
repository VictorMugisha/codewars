
function firstNonRepeatingLetter(string) {
    if (string === "") return ""
    for (let char of string) {
        const myCase = char === char.toUpperCase() ? "upper" : "lower"
        const clone = string.toLowerCase()
        if (clone.indexOf(char.toLowerCase()) === clone.lastIndexOf(char.toLowerCase())) {
            return myCase === "upper" ? char.toUpperCase() : char.toLowerCase()
        }
    }
    return ""
}

console.log(firstNonRepeatingLetter('a')); // a
console.log(firstNonRepeatingLetter('stress')); // t
console.log(firstNonRepeatingLetter('moonmen')); // e
console.log(firstNonRepeatingLetter('sTreSS')); // T
console.log(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!")); // ,

