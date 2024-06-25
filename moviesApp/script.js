const cardsContainer = document.querySelector(".cards")
const searchBox = document.querySelector("#search-input")
const searchBtn = document.querySelector("#search-btn")


// async function getMovies() {
//     const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': 'e9c1bea884msh92e0c00b80d4a14p1acc87jsncd8e45e0f1f1',
//             'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         updateDom(result)
//     } catch (error) {
//         console.error(error);
//     }
// }


async function getMovies() {
    const url = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e9c1bea884msh92e0c00b80d4a14p1acc87jsncd8e45e0f1f1',
            'x-rapidapi-host': 'movie-database-alternative.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

function updateDom(movies) {
    console.log(movies[0])
}

getMovies()