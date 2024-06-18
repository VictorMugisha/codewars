async function fetchMultipleAPIs(apis) {
    try {
        let promise1 = await fetch(apis[0])
        let promise2 = await fetch(apis[1])
        let promise3 = await fetch(apis[2])

        let promises = [promise1, promise2, promise3]
        
        let results = await Promise.all(promises.map(promise => promise.json()))
        return results
    } catch (error) {
        console.log("Error: Something went wrong!")
    }
}

const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'
];

fetchMultipleAPIs(apiUrls)
    .then(results => {
        console.log('Combined Results:', results);
    })
    .catch(error => {
        console.log('Error:', error.message);
    });