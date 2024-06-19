

const worker = new Worker("worker.js")

worker.postMessage(12)

worker.onmessage = function (message) {
    console.log("From main: ", message.data)
}