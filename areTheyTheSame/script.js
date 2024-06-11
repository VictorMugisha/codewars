function comp(array1, array2){
    if (array1 === null || array2 === null || !Array.isArray(array1) || !Array.isArray(array2) || array1.length !== array2.length) {
        return false
    }

    for (let element of array2) {
        let sqrt = Math.sqrt(element)
        let count = array2.filter(n => n === element).length
        let array1Count = array1.filter(n => n === sqrt).length
        if (!array1.includes(sqrt) || count !== array1Count) {
            return false
        }
    }


    // for (let element of array2) {
    //     let sqrt = Math.sqrt(element)
    //     if (!array1.includes(sqrt)) {
    //         return false
    //     }
    // }

    return true
}


console.log(comp([2, 2, 3], [4, 9, 9])) // Should return false
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361]))