const div = document.querySelector('.my-class')
const breedList = document.querySelector('#dog-breeds')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgDiv = document.createElement('div')

function changeColor() {
  this.style.color = "red";
}

document.addEventListener('DOMContentLoaded', () => {

  const dogImgs = fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
      // console.log(data.message)
      const pics = data.message
      //iterate through each img and append to the dom
      pics.forEach((pic, index) => {
        const imgTag = document.createElement('img')
        imgTag.id = 'dog-' + index
        imgTag.src = pic
        imgTag.alt = 'Doggie Picture'
        // console.log(imgTag)
        // console.log(div) // returning null????
        div.appendChild(imgTag)
      });
    })
    .catch(err => console.error(err.message))

  const getBreeds = fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
      // console.log(data.message)
      const breeds = data.message
      // adds the breeds to the page in the <ul> provided in index.html
      //foreach breed create a li and appendChild to the breedsList
      for (let breed in breeds) {
        const breedLI = document.createElement('li')
        breedLI.id = breed
        breedLI.textContent = breed
        //onClick change color
        breedLI.addEventListener('click', changeColor)
        breedList.appendChild(breedLI)
      }

    })
    .catch(err => console.error(err.message))

    // Once all of the breeds are rendered in the <ul>, add JavaScript so that, when the user clicks on any one of the <li>s, the font color of that <li> changes. This can be a color of your choosing.

})