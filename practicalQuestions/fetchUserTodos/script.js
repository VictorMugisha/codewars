

async function fetchUserTodos() {
    const usersUrl = "https://jsonplaceholder.typicode.com/users"
    const todosUrl = "https://jsonplaceholder.typicode.com/todos"

    const usersPromise = await fetch(usersUrl)
    const todosPromise = await fetch(todosUrl)

    const responses = await Promise.all([usersPromise, todosPromise].map(promise => promise.json()))
    const users = responses[0]
    const todos = responses[1]
    
    const combined = users.map(user => {
        const relativeTodos = todos.filter(todo => user.id === todo.userId)
        return {user, relativeTodos}
    })
    showData(combined)
}

fetchUserTodos()


function showData(data) {
    const number = document.getElementById("number")
    number.textContent = data.length
    const container = document.querySelector(".todos")
    data.forEach(user => {
        const currentUser = user.user
        const hisTodos = user.relativeTodos

        const div = document.createElement("div")

        const h2 = document.createElement('h2')
        h2.textContent = "Name: " + currentUser.name
        div.appendChild(h2)
        
        const todosList = document.createElement("ul")
        
        hisTodos.forEach(todo => {
            let li = document.createElement('li')
            li.textContent = todo.title
            todosList.appendChild(li)
        })
        div.appendChild(todosList)

        container.appendChild(div)
    })
}