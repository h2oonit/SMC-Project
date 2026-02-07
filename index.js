const movieListEl = document.querySelector(".showcase__movies--list")
const bestMovieListEl = document.querySelector(".best__movies--slider")
const bestMovieBkgdEl = document.querySelector("#best")
const movieGalleryEl = document.querySelector(".movies__gallery")
let loadIndex = 0;



// MAIN

async function main() {
    let i = 0;
    const movies = await fetch('http://www.omdbapi.com/?apikey=6e82b9d2&s=movie');
    const moviesData = await movies.json();
    const moviesDataSearch = moviesData.Search;


    let movieCurrent = moviesDataSearch[i];
    let movieCurrentOutput = Object.values(movieCurrent)
    let movieCurrentLink = movieCurrentOutput[4]

    movieListEl.innerHTML = `
        <div class="showcase__movie">
            <img src="${movieCurrentLink}" class="movie__img--background" alt="">
            <figure class="movie__img--wrapper">
                <img src="${movieCurrentLink}" class="movie__img" alt="">
            </figure>
        </div>`;

    // console.log(i + movieCurrentLink)
 
    setInterval(() => {
        
        if (i < 9) {
            i = i + 1;
        }
        else {
            i = 0;
        }

        let movieCurrent = moviesDataSearch[i];
        let movieCurrentOutput = Object.values(movieCurrent)
        let movieCurrentLink = movieCurrentOutput[4]
        
        movieListEl.innerHTML = `
            <div class="showcase__movie">
                <img src="${movieCurrentLink}" class="movie__img--background" alt="">
                <figure class="movie__img--wrapper">
                    <img src="${movieCurrentLink}" class="movie__img" alt="">
                </figure>
            </div>`;

        // console.log(i + movieCurrentLink)
    },10000)
}



// TOP 10

async function topTenMovies() {
    let i = 0;
    
    const movies = await fetch('http://www.omdbapi.com/?apikey=6e82b9d2&s=last');
    const moviesData = await movies.json();
    const moviesDataSearch = moviesData.Search;
    let movieCurrent = moviesDataSearch;
    let movieCurrentOutput = Object.values(movieCurrent)
    let movieCurrentLink = movieCurrentOutput[4]

    bestMovieListEl.innerHTML = moviesDataSearch.map(movie => bestMoviesHTML(movie)).join('');

    function changeBackground(movie) {
        return `
        <img src="${movie.Poster}" class="best__movie--bkgd" alt="">`
    }
    
    // bestMovieBkgdEl.innerHTML = moviesDataSearch.map(movie => changeBackground(movie)).join('');

    
}

function bestMoviesHTML(movie) {
    return `
        <div class="best__movie" onhover="changeBackground('${movie}')">
            <figure class="best__movie--wrapper">
                <img src="${movie.Poster}" class="best__movie--img" alt="">
            </figure>
        </div>`;
}

function bestBkgdHTML(movie) {
    ;
}



// MOVIE GALLERY 

async function movieGallery() {
    const moviesPg1 = await fetch('http://www.omdbapi.com/?apikey=6e82b9d2&s=movie&page=1');
    const moviesPg2 = await fetch('http://www.omdbapi.com/?apikey=6e82b9d2&s=movie&page=2');
    const moviesData1 = await moviesPg1.json();
    const moviesData2 = await moviesPg2.json();
    const moviesDataSearch = [].concat(
        moviesData1.Search,
        moviesData2.Search,
    )
    console.log(moviesDataSearch);

    movieGalleryEl.innerHTML = moviesDataSearch.map(movie => movieGalleryHTML(movie)).join('');

}

function movieGalleryHTML(movie) {
    return `
        <div class="gallery__movie">
            <figure class="gallery__movie--wrapper">
                <img src="${movie.Poster}" class="gallery__movie--img" alt="">
            </figure>
        </div>`;
}



// LOADING MORE MOVIES 

async function loadMoreMovies() {
    const moviesPg1 = await fetch('http://www.omdbapi.com/?apikey=6e82b9d2&s=movie&page=1');
    const moviesPg2 = await fetch('http://www.omdbapi.com/?apikey=6e82b9d2&s=movie&page=2');
    const moviesPg3 = await fetch('http://www.omdbapi.com/?apikey=6e82b9d2&s=movie&page=3');
    const moviesPg4 = await fetch('http://www.omdbapi.com/?apikey=6e82b9d2&s=movie&page=4');
    const moviesPg5 = await fetch('http://www.omdbapi.com/?apikey=6e82b9d2&s=movie&page=5');
    const moviesPg6 = await fetch('http://www.omdbapi.com/?apikey=6e82b9d2&s=movie&page=6');
    const moviesPg7 = await fetch('http://www.omdbapi.com/?apikey=6e82b9d2&s=movie&page=7');
    const moviesPg8 = await fetch('http://www.omdbapi.com/?apikey=6e82b9d2&s=movie&page=8');
    const moviesPg9 = await fetch('http://www.omdbapi.com/?apikey=6e82b9d2&s=movie&page=9');
    const moviesPg10 = await fetch('http://www.omdbapi.com/?apikey=6e82b9d2&s=movie&page=10');
    const moviesData1 = await moviesPg1.json();
    const moviesData2 = await moviesPg2.json();
    const moviesData3 = await moviesPg3.json();
    const moviesData4 = await moviesPg4.json();
    const moviesData5 = await moviesPg5.json();
    const moviesData6 = await moviesPg6.json();
    const moviesData7 = await moviesPg7.json();
    const moviesData8 = await moviesPg8.json();
    const moviesData9 = await moviesPg9.json();
    const moviesData10 = await moviesPg10.json();
    let moviesDataSearch = [].concat(
            moviesData1.Search,
            moviesData2.Search,
        );
    loadIndex = loadIndex + 1;

    if (loadIndex === 1) {
        moviesDataSearch = [].concat(
            moviesDataSearch,
            moviesData3.Search,
        )
        console.log(moviesDataSearch);
        movieGalleryEl.innerHTML = moviesDataSearch.map(movie => movieGalleryHTML(movie)).join('');
    }
    else if (loadIndex === 2) {
        moviesDataSearch =  [].concat(
            moviesDataSearch,
            moviesData3.Search,
            moviesData4.Search,
        )
        console.log(moviesDataSearch);
        movieGalleryEl.innerHTML = moviesDataSearch.map(movie => movieGalleryHTML(movie)).join('');
    }
    else if (loadIndex === 3) {
        moviesDataSearch =  [].concat(
            moviesDataSearch,
            moviesData3.Search,
            moviesData4.Search,
            moviesData5.Search,
        )
        console.log(moviesDataSearch);
        movieGalleryEl.innerHTML = moviesDataSearch.map(movie => movieGalleryHTML(movie)).join('');
    }
    else if (loadIndex === 4) {
        moviesDataSearch =  [].concat(
            moviesDataSearch,
            moviesData3.Search,
            moviesData4.Search,
            moviesData5.Search,
            moviesData6.Search,
        )
        console.log(moviesDataSearch);
        movieGalleryEl.innerHTML = moviesDataSearch.map(movie => movieGalleryHTML(movie)).join('');
    }
    else if (loadIndex === 5) {
        moviesDataSearch =  [].concat(
            moviesDataSearch,
            moviesData3.Search,
            moviesData4.Search,
            moviesData5.Search,
            moviesData6.Search,
            moviesData7.Search,
        )
        console.log(moviesDataSearch);
        movieGalleryEl.innerHTML = moviesDataSearch.map(movie => movieGalleryHTML(movie)).join('');
    }
    else if (loadIndex === 6) {
        moviesDataSearch =  [].concat(
            moviesDataSearch,
            moviesData3.Search,
            moviesData4.Search,
            moviesData5.Search,
            moviesData6.Search,
            moviesData7.Search,
            moviesData8.Search,
        )
        console.log(moviesDataSearch);
        movieGalleryEl.innerHTML = moviesDataSearch.map(movie => movieGalleryHTML(movie)).join('');
    }
    else if (loadIndex === 7) {
        moviesDataSearch =  [].concat(
            moviesDataSearch,
            moviesData3.Search,
            moviesData4.Search,
            moviesData5.Search,
            moviesData6.Search,
            moviesData7.Search,
            moviesData8.Search,
            moviesData9.Search,
        )
        console.log(moviesDataSearch);
        movieGalleryEl.innerHTML = moviesDataSearch.map(movie => movieGalleryHTML(movie)).join('');
    }
    else if (loadIndex === 8) {
        moviesDataSearch =  [].concat(
            moviesDataSearch,
            moviesData3.Search,
            moviesData4.Search,
            moviesData5.Search,
            moviesData6.Search,
            moviesData7.Search,
            moviesData8.Search,
            moviesData9.Search,
            moviesData10.Search,
        )
        console.log(moviesDataSearch);
        movieGalleryEl.innerHTML = moviesDataSearch.map(movie => movieGalleryHTML(movie)).join('');
    }
    else if (loadIndex > 8) {
        alert("No more movies to load!");
        loadIndex = 8;
    }
    
    
}

// CALLING FUNCTIONS 

main();
topTenMovies();
movieGallery();


