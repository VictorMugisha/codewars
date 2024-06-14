

async function getData() {
    const url1 = "https://jsonplaceholder.typicode.com/posts",
    url2 = "https://jsonplaceholder.typicode.com/comments",
    url3 = "https://jsonplaceholder.typicode.com/albums"

    try {
        const response1 = fetch(url1)
        const response2 = fetch(url2)
        const response3 = fetch(url3)

        const res = await Promise.all([response1, response2, response3])
        const data = await Promise.all(res.map(r => r.json()))
        return data
    } catch (error) {
        return error
    }

}

getData().then(res => console.log(res))
.catch(err => console.log(err))