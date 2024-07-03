function lcmCardinality(n) {
    let initial = 1
    let boundary = n
    const pairs = []
    // pairs.push([initial, boundary])
    while (boundary > 1) {
        while (initial < n) {
            if (n % initial === 0 && n % boundary === 0) {
                if (!pairs.toString().includes(([initial, boundary]).toString())) {
                    pairs.push([initial, boundary])
                }
            }
            initial++
        }
        boundary -= 1
        initial = 1
    }
    // console.log(pairs)
    console.log(pairs.length)
}

lcmCardinality(1)
lcmCardinality(12)
lcmCardinality(24)
lcmCardinality(25)