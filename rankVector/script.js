function ranks(arr = []) {
    let result = arr.map(element => [...arr].sort((a, b) => b - a).indexOf(element) + 1)
    console.log(result)
}

ranks([9, 3, 6, 10]) // --> ranks = [2,4,3,1]

ranks([3, 3, 3, 3, 3, 5, 1]) // --> ranks = [2,2,2,2,2,1,7]