document.addEventListener("DOMContentLoaded", () => {

  let body = document.querySelector('body')
  let button = document.querySelector(".button");
  let title = document.querySelector('#title')
  let director = document.querySelector('#director')
  let description = document.querySelector('#description')
  let releaseDate = document.querySelector('#releaseDate')
  let rottenTomato = document.querySelector('#rotten')
  let movies;

  function displayMovie() {
  fetch("https://ghibliapi.herokuapp.com/films")
  .then(response => {
    return response.json()
  })
  .then(parseRes => {
    movies = parseRes;

    for(let i = 0; i < movies.length; i++){
      let option = document.createElement("option");
      option.innerText = movies[i].title;
      option.setAttribute('value', [i])
      button.appendChild(option);
    }
  })
}

  function displayMovieInfo() {
    title.innerText = movies[button.value].title;
    director.innerText = movies[button.value].director
    description.innerText = movies[button.value].description
    releaseDate.innerText = movies[button.value].release_date
    rottenTomato.innerText = movies[button.value].rt_score

  }


  button.addEventListener("click", () => {
    displayMovie()
    displayMovieInfo()
  });

})
