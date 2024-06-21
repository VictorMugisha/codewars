function groupInts(xs = [], x) {
    if (xs.length === 0) return [];
    const list = []
    let groupOfLess = []
    let groupOfGreater = []
    for (let number of xs) {
        if (number < x) {
            if (groupOfGreater.length !== 0) {
                list.push(groupOfGreater)
                groupOfGreater = []
            }
            groupOfLess.push(number)
        } else {
            if (groupOfLess.length !== 0) {
                list.push(groupOfLess)
                groupOfLess = []
            }
            groupOfGreater.push(number)
        }
    }

    if (groupOfLess.length !== 0) list.push(groupOfLess)
    if (groupOfGreater.length !== 0) list.push(groupOfGreater)

    console.log(list)
}

groupInts([1, 1, 1, 0, 0, 6, 10, 5, 10], 6)
