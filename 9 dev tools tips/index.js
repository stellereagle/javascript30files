// Usual
console.log('hello')

// Interpolated
console.log('hello this is %s string', '💻')

// styled
console.log('%c This is error', 'color:red;font-size:21px')

// warning
console.warn('This is a warning')

// info
console.info('this is a info')

// testing
const p = document.querySelector('p')
console.assert(p.classList.contains('more'), 'It is not present')

const dogs = [
  {
    name: 'Hugo',
    age: '7'
  },
  {
    name: 'Snickers',
    age: '5'
  }
]

// this is for the element
console.log(p)
// to find the available methods
console.dir(p)

// fetch from dogs
dogs.forEach(dog => {
  console.group(`${dog.name}`)
  console.log(`The name of dog is ${dog.name}`)
  console.log(`${dog.name} is ${dog.age} years old`)
  console.groupEnd(`${dog.name}`)
})

// count
console.count('Counting')
console.count('Count')
console.count('Counting')
console.count('Counting')
console.count('Count')

// fetching time
console.time('Fetch Time')
fetch('https://api.github.com/users/stellereagle')
    .then(data => data.json())
    .then(data => {
      console.timeEnd('Fetch Time')
      console.log(data)
    })
