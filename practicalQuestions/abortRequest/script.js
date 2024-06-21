
/**
 * Write a function that takes a URL and fetches data from that URL but aborts when the request takes more than 10ms
 */

function getData() {
    const request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/users", true)
    request.send()

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                const data = JSON.parse(request.response)
                console.log(data);
            }
        }
    })
    setTimeout(() => {
        request.abort()
    }, 10)

    request.addEventListener("abort", () => {
        console.log("Request was succesfully aborted!")
    })
}


getData()