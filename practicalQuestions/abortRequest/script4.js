/**
 * Write a JavaScript function `fetchToDo` that uses XMLHttpRequest to fetch data from the given URL (https://jsonplaceholder.typicode.com/todos/1). The function should handle both successful responses and errors (such as network issues or invalid URLs). Upon receiving a successful response, it should log the fetched data to the console. If there's an error, it should catch the error and log an appropriate message.
 */
const log = console.log

function fetchToDo() {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true)
    xhr.send()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status <= 300) {
                const data = JSON.parse(xhr.response)
                log(data)
            } else if (xhr.status >= 400 && xhr.status <= 500) {
                log("ERROR: 404 End point not found!")
            } else {
                log("ERROR: The Fetch Failed with the status code: ", xhr.status)
            }
        }
    }
    xhr.onerror = () => {
        log("Something wrong with the url!")
    }
}

fetchToDo()