const usersContainer = document.querySelector(".users")
const input = document.querySelector("#search-box")
const button = document.querySelector("#search-btn")

const url = "https://api.github.com/users"
async function getData() {
    try {
        const response = await fetch(url)
        const result = await response.json()
        updateUI(result)
    } catch (error) {
        console.log(error)
    }
}

function updateUI(accounts) {
    console.log(accounts[0])
    accounts.forEach(account => {
        
    })
}

button.addEventListener("click", () => {
    getData()
})
