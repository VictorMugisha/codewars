function range(...params) {
    let start, step, limit
    let result = []
    if (params.length > 3) return []
    if (params.length === 1) {
        start = 1
        step = 1
        limit = params[0]
    } else if (params.length === 2) {
        start = params[0]
        step = 1
        limit = params[1]
    } else {
        start = params[0]
        step = params[1]
        limit = params[2]
    }

    for (start; start <= limit; start += step) {
        result.push(start)
    }

    console.log(result)

}

range()
range(5) // [1, 2, 3, 4, 5]);
range(3, 7) // [3, 4, 5, 6, 7]);
range(2, 3, 15) // [2, 5, 8, 11, 14]);