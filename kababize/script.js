
function kebabize (str) {
    let [results, ...remaining] = str.split('')
    for (let char of remaining) {
        if (!isNaN(char)) {
            continue
        }
        if (char === char.toUpperCase()) {
            results += `-${char.toLowerCase()}`
        } else {
            results += char.toLowerCase()
        }
    }
    return results.toLowerCase()
}

console.log(kebabize("camelsHaveThreeHumps")) //  -->  "camels-have-three-humps"
console.log(kebabize("camelsHave3Humps")) //  -->  "camels-have-humps"
console.log(kebabize("CAMEL")) //  -->  "c-a-m-e-l"