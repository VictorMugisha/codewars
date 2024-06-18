function createAlarm(name, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 2) reject("Delay is not sufficient")
        setTimeout(resolve, delay * 1000, `Wake up ${name}`)
    })
}

createAlarm('John', 4).then((message) => {
    console.log(message) // output "Wake up John" after 4 seconds
}).catch((error) => {
    console.error(error)
})