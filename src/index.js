function addNameToDogBar(pup) {
  const dogNameBtn = document.createElement('span')
  dogNameBtn.innerText = pup.name
  dogNameBtn.addEventListener('click', (e) => dogNameBtnClickHandler(e, pup.id))
  document.querySelector('#dog-bar').append(dogNameBtn)
}

function dogNameBtnClickHandler(e, id){
  // console.log(e.target.value)
  getOneDog(id)
}

function showInfo(pup){
  console.log(pup)
  const dogInfo = document.querySelector('#dog-info')

  const infoImg = document.createElement('img')
  infoImg.src = pup.image

  const infoTitle = document.createElement('h2')
  infoTitle.innerText = pup.name

  const goodDogBtn = document.createElement('button')
  goodDogBtn.dataset.id = pup.id
  goodDogBtn.innerText = pup.isGoodDog ? 'Good Dog!' : 'Bad Dog!'
  goodDogBtn.addEventListener("click", goodDogBtnClickHandler)

  dogInfo.append(infoImg, infoTitle, goodDogBtn)
}

function goodDogBtnClickHandler(e){
  let newValue;
  if(e.target.innerText.includes('Good')){
    e.target.innerText = 'Bad Dog!'
    newValue = false
  } else {
    e.target.innerText = 'Good Dog!'
    newValue = true
  }
  updateGoodDog(e.target.dataset.id, newValue)
  }

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

function updateGoodDog(id, newValue){
  console.log(id)
  fetch(`http://localhost:3000/pups/${id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      isGoodDog: newValue
    })
  })
  .then(resp => resp.json())
  .then(data => console.log(data))
  }

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

  // Challenge 4: Toggle Good Dog ✅
  // Change button btw Good & Bad
  // update DB to reflect isGoodDog value
    // add click event listener
    // callback: toggle btw good/bad
    // call PATCH fetch