/**
 * Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds
 */

function displayNumber() {
    let timer = setInterval(() => {
        let number = Math.round(Math.random() * 20)
        console.log(number)
    }, 2000)

    setTimeout(clearInterval, 5000, timer)
}

displayNumber()

