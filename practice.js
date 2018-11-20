// document.addEventListener("DOMContentLoaded", () => {
//
//   // fetch("https:ghibliapi.herokuapp.com/films").then(response => {
//   //   debugger
//   //   return response.json();
//   // }).then(response => {
//   //   debugger
//   // })
//
//   let button = document.getElementById("button");
//
// button.addEventListener("click", getMovies);
//
// function getMovies() {
//   fetch("https://ghibliapi.herokuapp.com/films")
//     .then(response => {
//       return response.json();
//     })
//     .then(response => {
//       showMovies(response);
//     });
// }
//
// function showMovies(allMovies) {
//   let movies = document.getElementById("movies");
//   allMovies.forEach(movie => {
//     let newMovie = document.createElement("li");
//     newMovie.innerText = movie.title;
//     movies.append(newMovie);
//   });
// }
//
// })
