// Get user input from the form
const username = document.getElementById("username")
const password = document.getElementById("password")
const formContainer = document.querySelector(".login-form")
const loginForm = document.getElementById("loginForm")

const responseContainer = document.querySelector(".response")
// const restartBtn = document.querySelector("#restart")

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault() // Prevent form submission

    if (username.value === "" || password.value === "") {
        console.log("Please provide full data")
    } else {
        try {
            const users = await getData()
            const user = users.find(user => user.userName === username.value && user.password === password.value)
            if (user) {
                const [loggedUser] = users.filter(user => user.userName === username.value)
                displayUser(undefined, loggedUser)
            } else {
                displayUser("Error")
                console.log("Invalid username or password")
            }
        } catch (error) {
            console.log(error)
        }
    }
})

async function getData() {
    const api = "./data/users.json"
    try {
        const response = await fetch(api)
        return await response.json()
    } catch (error) {
        console.log(error)
        return []
    }
}


function displayUser(error, user) {

    formContainer.style.display = "none"
    responseContainer.style.display = "block"
    const div = document.createElement('div')
    const welcome = document.createElement('h3')
    const h2 = document.createElement('h2')
    const fname = document.createElement('p')
    const lname = document.createElement('p')
    const uname = document.createElement('p')
    const button = document.createElement('button')

    if (!error) {
        const { userName, fistName, lastName } = user

        welcome.textContent = "Login Successful!"
        h2.textContent = "Welcome back, " + fistName + "!"
        fname.textContent = "First Name: " + fistName
        lname.textContent = "Last Name: " + lastName
        uname.textContent = "Usename: " + userName
        button.id = "restart"
        button.textContent = "Restart"

        div.append(welcome, h2, fname, lname, uname, button)
        responseContainer.appendChild(div)
        button.addEventListener('click', () => {
            location.reload()
        })
        return
    }

    if (error) {
        const fail = document.createElement("h3")
        fail.textContent = "Login Failed!!"
        fail.classList.add("error")
        h2.textContent = "Try Again!!"
        button.id = "restart"
        button.textContent = "Try again!"
        button.classList.add("btn-err")

        div.append(fail, h2, button)
        responseContainer.appendChild(div)
        button.addEventListener('click', () => {
            location.reload()
        })
    }
    
}
