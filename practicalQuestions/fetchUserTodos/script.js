const usersUrl = "https://jsonplaceholder.typicode.com/users"
const todosUrl = "https://jsonplaceholder.typicode.com/todos"

/**
 * 1. Define an async function that will fetch all the data
 * 2. Use async and await to get data from users and data from todos
 * 3. After getting the data, I will loop through all the users array using map
 * 4. For each user I will filter the todos array checking if todo.userId === currentUser.id 
 * 5. Return an object on each iteration having the id, name from the user object and the array of all todos corresponding to that user
 * 6. Finally, return this newly formed array of objects
 */

// async function getData() {
//     try {
//         const usersRequest = await fetch(usersUrl)
//         if (!usersRequest.ok) {
//             throw new Error("The users failed!!")
//         }
//         const users = await usersRequest.json()
//         const todosRequest = await fetch(todosUrl)
//         if (!todosRequest.ok) {
//             throw new Error("The todos failed!!")
//         }
//         const todos = await todosRequest.json()

//         const result = users.map(user => {
//             const {id, name} = user
//             const userTodos = todos.filter(todo => todo.userId === id)
//             return { id, name, todos: userTodos}
//         })

//         console.log(result)
//     } catch (error) {
//         console.error("ERROR", error)
//     }
// }

// getData()


const retryAPI = "https://jsonplaceholder.typicode.com/us89ers"
let retries = 1
async function fetchWithRetries() {
    try {
        const res = await fetch(retryAPI)
        if (!res.ok) {
            if (retries <= 3) {
                console.log("Retried..." + retries + " times")
                retries += 1
                return await fetchWithRetries()
            }
        }
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.error("ERROR", error)
    }
}
// fetchWithRetries()



// Imagine you are developing a real-time news application, and you need to fetch posts from three different sources to provide users with the latest updates. 

// The API endpoints for getting posts are:

// https://dummyjson.com/posts
// https://this-may-not-exist.com/posts
// https://jsonplaceholder.typicode.com/posts

// To ensure a seamless user experience, you are supposed to create a function called getFastPosts that fetches posts from these endpoints simultaneously (concurrently) and only presents data from the source that responds the quickest, while ignoring slower or potentially unreliable sources.

// Example of how the function should be used 
// // getFastPosts() code here...

// getFastPosts().then((posts) => {
//     console.log(posts)
// })

async function getFastPosts() {
    const url1 = "https://dummyjson.com/posts"
    const url2 = "https://this-may-not-exist.com/posts"
    const url3 = "https://jsonplaceholder.typicode.com/posts"
    const promises = [fetch(url1), fetch(url2), fetch(url3)]
    try {
        const res = await Promise.any(promises)
        const data = await res.json()
        return data
    } catch (error) {
        console.error("ERROR", error)
    }
}

getFastPosts()
    .then(res => console.log(res))
























// async function fetchUserTodos() {
//     const usersUrl = "https://jsonplaceholder.typicode.com/users"
//     const todosUrl = "https://jsonplaceholder.typicode.com/todos"

//     const usersPromise = await fetch(usersUrl)
//     const todosPromise = await fetch(todosUrl)

//     const responses = await Promise.all([usersPromise, todosPromise].map(promise => promise.json()))
//     const users = responses[0]
//     const fetchedTodos = responses[1]

//     const combined = users.map(user => {
//         const relativeTodos = fetchedTodos.filter(todo => user.id === todo.userId)
//         return { user, relativeTodos }
//     })
//     // showData(combined)
//     // console.log(users)
//     // console.log(fetchedTodos)

//     const real = users.map(user => {
//         const { id, name } = user
//         const todos = fetchedTodos.filter(todo => todo.userId === id)
//         return { id, name, todos }
//     })
//     console.log(real[7]);
// }

// fetchUserTodos()


// function showData(data) {
//     const number = document.getElementById("number")
//     number.textContent = data.length
//     const container = document.querySelector(".todos")
//     data.forEach(user => {
//         const currentUser = user.user
//         const hisTodos = user.relativeTodos

//         const div = document.createElement("div")

//         const h2 = document.createElement('h2')
//         h2.textContent = "Name: " + currentUser.name
//         div.appendChild(h2)

//         const todosList = document.createElement("ul")

//         hisTodos.forEach(todo => {
//             let li = document.createElement('li')
//             li.textContent = todo.title
//             todosList.appendChild(li)
//         })
//         div.appendChild(todosList)

//         container.appendChild(div)
//     })
// }