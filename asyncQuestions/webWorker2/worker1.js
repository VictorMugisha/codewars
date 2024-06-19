
function* generateFibb() {
    let first = 0
    let second = 1
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
    
    const obj = generateFibb()
    for (let i = start; i <= end; i++) {
        series.push(obj.next().value)
    }
    postMessage(series)
} 