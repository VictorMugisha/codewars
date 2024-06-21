/**
 * Write a JavaScript function `fetchToDo` that uses XMLHttpRequest to fetch data from the given URL (https://jsonplaceholder.typicode.com/todos/1). The function should handle both successful responses and errors (such as network issues or invalid URLs). Upon receiving a successful response, it should log the fetched data to the console. If there's an error, it should catch the error and log an appropriate message.
 */
const log = console.log

// function fetchToDo() {
//     const xhr = new XMLHttpRequest()
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true)
//     xhr.send()
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4) {
//             if (xhr.status >= 200 && xhr.status <= 300) {
//                 const data = JSON.parse(xhr.response)
//                 log(data)
//             } else if (xhr.status >= 400 && xhr.status <= 500) {
//                 log("ERROR: 404 End point not found!")
//             } else {
//                 log("ERROR: The Fetch Failed with the status code: ", xhr.status)
//             }
//         }
//     }
//     xhr.onerror = () => {
//         log("Something wrong with the url!")
//     }
// }

fetchToDo()

/**
 * Extend the `fetchToDo` function from Question 4 to include custom headers in the request. Specifically, you need to add a User-Agent header with a custom value and a Content-Type header set to application/json. Additionally, modify the function to send a JSON payload in the request body. After sending the request, the function should parse the JSON response and log the parsed object to the console.
 */

function fetchToDo() {
    const xhr = new XMLHttpRequest()
    xhr.open("POST", "https://jsonplaceholder.typicode.com/todos", true)

    xhr.setRequestHeader("User-Agent", "Victor")
    xhr.setRequestHeader("Content-Type", "application/json")
    
    const payload = JSON.stringify({
        userId: 200,
        name: "Victor Mugisha"
    })

    xhr.send(payload)

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