// Challenge 1: View data ✅

// Challenge 2: Add pups  to Dog Bar ✅
// onPageLoad fetch pup data
// get div#dog-bar
// Add span w pup name to Dog Bar
function getPupData() {
  fetch('http://localhost:3000/pups')
  .then(resp => resp.json())
  // .then((pupData) => console.log(pupData))
  .then((pupData) => {
    pupData.forEach((pup) => addPupData(pup))
  })
}

function addPupData(pup) {
  const dogName = document.createElement('span')
  dogName.innerText = `${pup.name}`
  dogName.addEventListener('click', clickHandler)
  document.querySelector('#dog-bar').append(dogName)
}

// Challenge 3: Show Info About Each Pup
  // when user clicks dogName, display info in div#dog-info
    // img  w URL
    // h2 w dog's name
    // button saying 'Good Dog!' or 'Bad Dog!' based on iSGoodDog

function clickHandler(e){
  console.log(e.target.pup)
  const dogInfo = document.querySelector('#dog-info')
  // dogInfo.innerHTML = `<img src='${pup.image}'>`
}

document.addEventListener('DOMContentLoaded', () => {
  getPupData()
})