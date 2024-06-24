
self.onmessage = (message) => {
    const calculate = () => {
        let sum = message.data
        for (let i = 1; i <= 1000000000; i++) {
            sum+= i
        }
        self.postMessage(sum)
    }
    calculate()
}