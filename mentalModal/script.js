
function createAlarm(name, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 2) reject("Delay is not sufficient")
        setTimeout(resolve, delay * 1000, `Wake up ${name}`)
    });
}

createAlarm("Victor", 1).then(res => console.log(res))
.catch(err => console.log(err))

createAlarm("Chriss", 3).then(res => console.log(res))
.catch(err => console.log(err))