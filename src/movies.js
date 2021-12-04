// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  const listOfDirectors = array.map((names) => {
    return names.director
  })
  return listOfDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const filterGenre = movies.filter((drama) =>{
    return  drama.director === "Steven Spielberg" && drama.genre.includes("Drama")
  }) 
  return filterGenre.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesList) {
if(moviesList.length === 0){
  return 0
}

  const totalAverage = moviesList.reduce((acc, value) => {
    return (acc + value.score)
  }, 0)
  return Math.round((totalAverage/moviesList.length)*100)/100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(listOfMovies) {
  
  const dramaMovies = listOfMovies.filter((movie) => {
    return movie.genre.includes("Drama");
  })
  if(dramaMovies.length === 0){
    return 0
  }
  const dramaAvg = dramaMovies.reduce((acc, value) => {
    return acc + value.score
  }, 0)
  return dramaAvg/dramaMovies.length
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  const copy = movies.slice()
  const orderedMovies = copy.sort((a, b) => {
    if(a.year === b.year){
      return a.title.localeCompare(b.title)
      
    }
    return a.year - b.year
  })
  
  return orderedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  // 1. listOfTitles
  // 2. sortedList
  // 3. cut
  const listCopy = movies.slice();
  const listOfTitles = listCopy.map((names) => {
    return names.title
  })
  
  const sortAlphabet = listOfTitles.sort((a, b) => {
    return a.localeCompare(b)
    
  })
  const firstTwenty = sortAlphabet.slice(0, 20)
  return firstTwenty
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
