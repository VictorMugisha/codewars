// function myFetch(endpoint, options) {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest()
//         request.open("GET", endpoint)

//         request.addEventListener('readystatechange', () => {
//             if (request.readyState === 4 && request.status >= 200 && request.status <= 300) {
//                 resolve(request.responseText)
//             } else {
//                 console.log(request.readyState)
//                 console.log(request.status)
//                 reject("Something seems not right!!")
//             }
//         })
//         request.send()

//         request.onerror = function () {
//             reject("Request was not successfull")
//         }
//     })
// } 

// myFetch("https://jsonplaceholder.typicode.com/todos")
// .then(data => console.log(data))
// .catch(error => console.log('Error:', error));

// function myFetch(endpoint, options = {}) {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();
//         request.open(options.method || "GET", endpoint);

//         //Set request headers if provided in options
//         if (options.headers) {
//             Object.keys(options.headers).forEach(key => {
//                 request.setRequestHeader(key, options.headers[key]);
//             });
//         }

//         request.addEventListener('readystatechange', () => {
//             if (request.readyState === 4) {
//                 if (request.status >= 200 && request.status < 300) {
//                     resolve(request.responseText);
//                 } else {
//                     reject(`Request failed with status ${request.status}: ${request.statusText}`);
//                 }
//             }
//         });

//         request.onerror = function () {
//             reject("Network error or request was not successful");
//         };

//         // Send the request with a body if provided
//         request.send(options.body || null);
//     });
// }

// myFetch("https://jsonplaceholder.typicode.com/todos")
//     .then(data => console.log(data))
//     .catch(error => console.log('Error:', error));


// function myFetch() {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest()
//         request.open("GET", 'https://jsonplaceholder.typicode.com/todos/')
//         request.addEventListener("readystatechange", () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 console.log(request.response);
//                 resolve(request.response)
//             }
//             else {
//                 console.log("Error", request.readyState)
//                 reject('Error From Reject')
//             }
//         })
//         request.send()
//     })
// }
// myFetch()
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error);
//     })


function myFetch() {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("GET", 'https://jsonplaceholder.typicode.com/todos/');

        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    // console.log(request.response);
                    resolve(request.response);
                } else {
                    console.log("Error: HTTP status", request.status);
                    reject('Error: HTTP status ' + request.status);
                }
            }
        });

        request.onerror = function() {
            reject('Network error');
        };

        request.send();
    });
}

myFetch()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log('Error:', error);
    });
