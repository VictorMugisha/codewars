function range(start, stop, step) {
    let myStart = start || 0
    let myStep = step || 1
    const result = []
    for (myStart; myStart < stop; myStart+=myStep) {
        result.push(myStart)
    }
    console.log(result)
}

// range(1, 11);
// // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

range(1, 4, 0); // /!\ note that the step is 0
// // => [1, 1, 1]

// range(0);
// // => []

// range(10, 0); // /!\ note that the end is before the start
// // => []

// range(10);
// // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// range(0, 30, 5);
// // => [0, 5, 10, 15, 20, 25]