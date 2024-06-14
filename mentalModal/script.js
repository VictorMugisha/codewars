
function createAlarm(name, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 2000) reject("Delay is not sufficient")
        setTimeout(resolve, delay, `Wake up ${name}`)
    });
}

createAlarm("Victor", 1000).then(res => console.log(res))
.catch(err => console.log(err))

createAlarm("Chriss", 3000).then(res => console.log(res))
.catch(err => console.log(err))