function addNameToDogBar(pup) {
  const dogNameBtn = document.createElement('span')
  dogNameBtn.innerText = pup.name
  dogNameBtn.addEventListener('click', (e) => dogNameBtnClickHandler(e, pup.id))
  document.querySelector('#dog-bar').append(dogNameBtn)
}

function dogNameBtnClickHandler(e, id){
  // console.log(e.target.value)
  console.log(e.target.innerText)
  getOneDog(id)
}

function showInfo(pup){
  const dogInfo = document.querySelector('#dog-info')

  const infoImg = document.createElement('img')
  infoImg.src = pup.image

  const infoTitle = document.createElement('h2')
  infoTitle.innerText = pup.name

  const goodDogBtn = document.createElement('button')
  goodDogBtn.innerText = pup.isGoodDog ? 'Good Dog!' : 'Bad Dog!'

  dogInfo.append(infoImg, infoTitle, goodDogBtn)
}

// dogBtn.addEventListener("click", goodDogBtnClickHandler)


// function goodDogBtnClickHandler(e){
  // ternerary good/Bad
  // goodDogBtn.innerText = 'Good Dog' ? 'Bad Dog' : 'Good Dog'
// }

// Fetches

function getPupData() {
  fetch('http://localhost:3000/pups')
  .then(resp => resp.json())
  // .then((pupData) => console.log(pupData))
  .then((pupData) => {
    pupData.forEach((pup) => addNameToDogBar(pup))
  })
}

function getOneDog(id){
  fetch(`http://localhost:3000/pups/${id}`)
  .then(resp => resp.json())
  .then((data) => {
    showInfo(data)
  })
}

  // function updateGoodOrBad(){
  //   fetch('http://localhost:3000/pups')
  //   .then(resp => resp.json())
  //   .then((data) => {
  //     // Is PATCH request
  //     // Header
  //     // Body
  //   })
  // }

  document.addEventListener('DOMContentLoaded', () => {
    getPupData()
  })


// Pseudocode

// Challenge 1: View data ✅

// Challenge 2: Add pups  to Dog Bar ✅
// onPageLoad fetch pup data
// get div#dog-bar
// Add span w pup name to Dog Bar

// Challenge 3: Show Info About Each Pup ✅
// when user clicks dogName, display info in div#dog-info
  // img  w URL
  // h2 w dog's name
  // button saying 'Good Dog!' or 'Bad Dog!' based on iSGoodDog

  // Challenge 4: Toggle Good Dog
  // Change button btw Good & Bad
  // update DB to reflect isGoodDog value
    // add click event listener
    // callback: toggle btw good/bad
    // call PATCH fetch