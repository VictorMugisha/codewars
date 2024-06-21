/**
 * Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.
 */

const log = console.log



function fetchData(retries) {
    const api = "https://jsonplaceholder.typicode.com/users"
    if (retries < 1) {
        return
    }
    log("Remaining retries ", retries--)
    // const request = Promise.reject("Rejected")
    const request = fetch(api)
    return request

}
let number = 3
fetchData(number)
    .then(res => res.json())
    .then(data => log(data))
    .catch(err => {
        log(err)
        if (number > 1) {
            fetchData(number--)
        }
        else {
            log("Retries are expired")
        }
    })

