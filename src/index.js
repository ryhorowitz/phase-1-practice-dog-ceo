const div = document.querySelector('.my-class')
const breedList = document.querySelector('#dog-breeds')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgDiv = document.createElement('div')
const firstLetterSelector = document.querySelector("#breed-dropdown")
console.log(firstLetterSelector)
function changeColor() {
  this.style.color = "red";
}

function filterBreeds(e) {
  // create selector for select tag
  // console.log(firstLetterSelector)
  const letter = e.target.value
  console.log(letter)

  const filteredBreedListLIs = Array.from(breedList.children).filter( breedLI => {
    if (letter === breedLI.id[0]) {
      return breedLI
    }
  })
  console.log(filteredBreedListLIs)
  //remove all children of the ul
  while (breedList.firstChild) {
    breedList.removeChild(breedList.firstChild)
  }
  filteredBreedListLIs.forEach( breed => {
    breedList.appendChild(breed)
  })
  //replace with li from filteredBreedList

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
      const breeds = data.message
      for (let breed in breeds) {
        const breedLI = document.createElement('li')
        breedLI.id = breed
        breedLI.textContent = breed
        breedLI.addEventListener('click', changeColor)
        breedList.appendChild(breedLI)
      }

    })
    .catch(err => console.error(err.message))

    firstLetterSelector.addEventListener('change', filterBreeds)
})
