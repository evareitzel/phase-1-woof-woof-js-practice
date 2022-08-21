function showInfo(pup){
  // console.log(pup)
  const goodOrBad = () => pup.isGoodDog ? 'Good Dog' : 'Bad Dog'
  const dogInfo = document.querySelector('#dog-info')
  dogInfo.innerHTML = 
  `<h2>${pup.name}</h2>
  <img src='${pup.image}'>
  <btn>${() => pup.isGoodDog ? 'Good Dog' : 'Bad Dog'}</btn>`
  // <btn>${pup.isGoodDog}</btn>`
  // goodOrBad(pup)
}