// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift()
}

function appendDriver(name){
  let newArray = [...drivers, name]
  return newArray
}

function prependDriver(name){
  let newArray = [name, ...drivers]
  return newArray
}

function removeLastDriver() {
  return drivers.slice(0, -1);
}

function removeFirstDriver() {
  return drivers.slice(1)
}
