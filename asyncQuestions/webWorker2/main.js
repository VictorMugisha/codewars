

const worker1 = new Worker("worker1.js")
const worker2 = new Worker("worker2.js")

worker1.postMessage({start: 1, end: 10})

worker1.onmessage = function(message) {
    console.log("from main but worker1",message.data)
    let lastVal = message.data[message.data.length - 1]
    let beforeLast = message.data[message.data.length - 2]
    worker2.postMessage({start: {beforeLast, lastVal}, end: lastVal + 9})
}

worker2.onmessage = function(message) {
    console.log("from main but worker2", message.data)
}