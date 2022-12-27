console.log('%c HI', 'color: firebrick')
const imgContainer = document.querySelector('#dog-image-container')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener('DOMContentLoaded', () => {
  const imgTag = document.createElement('img')

  const dogImgs = fetch(imgUrl)
    .then( res => res.json())
    .then( data => {
      console.log(data.message)
      //iterate through each img and append to the dom

    })
    .catch( err => console.error(err.message))
  dogImgs.alt = 'Doggie Pic'
  console.log(dogImgs)
  imgContainer.appendChild(dogImgs)
})