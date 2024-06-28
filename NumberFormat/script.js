var numberFormat = function (number) {
    const sign = number >= 0 ? "positive" : "negative"
    const numberString = Math.abs(number).toString()
    const length = numberString.length
    let packet = []
    const packets = []

    for (let i = length - 1; i >= 0; i--) {
        if (packet.length !== 3) {
            packet.push(numberString[i])
        }
        if (packet.length === 3) {
            packets.push(packet.reverse().join(''))
            packet = []
        }
    }
    if (packet.length !== 0) {
        packets.push(packet.reverse().join(''))
        packet = []
    }
    return sign === "positive" ? packets.reverse().join(',') : "-" + packets.reverse().join(',')
};

// Test cases
console.log(numberFormat(100000));    // Output: '100,000'
console.log(numberFormat(5678545));   // Output: '5,678,545'
console.log(numberFormat(-420902));   // Output: '-420,902'
