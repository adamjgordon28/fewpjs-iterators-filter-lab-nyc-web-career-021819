// Code your solution here

function findMatching(array, string){
  let matchingNames = array.filter(name => {
    return name.toLowerCase() === string.toLowerCase()
  })
  return matchingNames
}

function fuzzyMatch(array, string){
  let i = string.length
  let matchingNames = array.filter(name => {
    return name.toLowerCase().slice(0,i) === string.toLowerCase()
  })
  return matchingNames
}

function matchName(array, string){
  let matchingNames = array.filter(driver => {
    return driver.name === string
  })
  return matchingNames
}
