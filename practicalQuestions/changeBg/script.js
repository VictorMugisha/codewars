
function changeBackground() {
    const element = document.querySelector(".element")
    const colors = ['blue', 'black', 'orange', 'cyan', 'gray', 'grey', 'skyblue']
    const intervalId = setInterval(() => {
        const index = Math.floor(Math.random() * colors.length)
        element.style.backgroundColor = colors[index]
        console.log(colors[index])
    }, 3000)
}

changeBackground()