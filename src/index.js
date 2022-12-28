console.log('%c HI', 'color: firebrick')
const div = document.querySelector('.my-class')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgDiv = document.createElement('div')

document.addEventListener('DOMContentLoaded', () => {
  
  const dogImgs = fetch(imgUrl)
  .then( res => res.json())
  .then( data => {
    console.log(data.message)
    const pics = data.message
    //iterate through each img and append to the dom
    pics.forEach( (pic, index) => {
      const imgTag = document.createElement('img')
      imgTag.id = 'dog-' + index
      imgTag.src = pic
      imgTag.alt = 'Doggie Picture'
      console.log(imgTag)
      console.log(div) // returning null????
      div.appendChild(imgTag)
      });
    })
    .catch( err => console.error(err.message))

})