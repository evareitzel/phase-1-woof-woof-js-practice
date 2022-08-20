// Challenge 1: View data ✅

// Challenge 2: Add pups  to Dog Bar ✅
// onPageLoad fetch pup data
// get div#dog-bar
// Add span w pup name to Dog Bar
function getPupData() {
  fetch('http://localhost:3000/pups')
    .then(resp => resp.json())
    .then((pupData) => {
      pupData.forEach((pup) => addPupData(pup))
    })
}

function addPupData(pup) {
  const dogBar = document.querySelector('#dog-bar')
  const dogName = document.createElement('span')
  dogName.innerText = `${pup.name}`
  console.log(dogName)
  document.querySelector('#dog-bar').append(dogName)
}

document.addEventListener('DOMContentLoaded', () => {
  getPupData()
})