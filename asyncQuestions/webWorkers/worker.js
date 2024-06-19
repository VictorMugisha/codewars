

self.onmessage = function(message) {
    const data = message.data
    let sum = 0
    let number = 1
    while(number <= data) {
        sum += number
        number++
    }
    console.log("From Worker: ", sum)
    postMessage(sum)
}
