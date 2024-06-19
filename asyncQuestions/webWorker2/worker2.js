
function* generateFibb(start) {
    let first = start.beforeLast
    let second = start.lastVal
    yield first
    yield second
    while (true) {
        let third = first + second
        yield third
        first = second
        second = third
    }
}


onmessage = function(message) {
    const {start, end} = message.data

    const series = []
    
    const obj = generateFibb(start)
    for (let i = start.lastVal; i <= end; i++) {
        series.push(obj.next().value)
    }
    series.splice(0, 2)
    // I removed first two elements because they are identical to the last two elements from the first worker
    series.push(obj.next().value)
    series.push(obj.next().value)
    postMessage(series)
} 