document.addEventListener("DOMContentLoaded", () => {

  let image = document.createElement("img")
  let body = document.querySelector('body')

  let button = document.getElementById('button')
  button.addEventListener("click", () => {


    function getRandomImage() {

      fetch("https://dog.ceo/api/breeds/image/random").then(response => {
        return response.json()
      }).then(othResponse => {
        image["src"] = othResponse.message
        document.body.appendChild(image)
      })
    }

    getRandomImage();

  });

});
