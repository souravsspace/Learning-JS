const characters = [
  {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      eye_color: 'blue',
      gender: 'male',
  },
  {
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      eye_color: 'yellow',
      gender: 'male',
  },
  {
      name: 'Leia Organa',
      height: '150',
      mass: '49',
      eye_color: 'brown',
      gender: 'female',
  },
  {
      name: 'Anakin Skywalker',
      height: '188',
      mass: '84',
      eye_color: 'blue',
      gender: 'male',
  },
];

const numbers = [2,5,67,3,78,2,5,76,87,4,3,34,5,73,63];


// ########## REDUCE ##########

//     Get the total mass of all characters
//     Get the total height of all characters
//     Get the total number of characters in all the character names
//     Get the total number of characters by eye color (hint. a map of eye color to count)



const eyeClr = characters.reduce((acc, curr) =>{
      const clr = curr.eye_color;
      if(acc[clr]){
        acc[clr]++;
      } else {
        acc[clr] = 1
      }
      return acc
}, {})

console.log(eyeClr)



// const toHeight = characters.reduce((a, b)=>{
//       return a + b.height
// }, 0)

// console.log(toHeight);




// const totalMass = characters.reduce((acc, crr)=>{
//       return crr.mass + acc
// }, 0)

// console.log(totalMass)






// #########SORT##########

//     Sort by name
//     Sort by mass
//     Sort by height
//     Sort by gender


// const byGender = characters.sort((a,b) =>{
//       if(a.gender === "male") {return -1}
//       return 1
// })

// console.log(byGender)

// const byName = characters.sort((a,b)=>{
//       if(a.name < b.name){return -1}
//       return 1
// })

// console.log(byName)

// const height = characters.sort((a, b)=>{
//       return a.height - b.height
// })

// console.log(height)

// let mass = characters.sort((a, b)=>{
//     return a.mass - b.mass
// })
// console.log(mass)
// console.log(mass.reverse())











// ______ array.map() ________
// Get an array of all names
// Get an array of all heights
// Get an array of objects with just name and height properties
// Get an array of all first names

// const getArrayName = characters.map((character)=>{
//       return character.name
// })

// // console.log(getArrayName)


// const arrayHeight = characters.map((character)=>{
//       return character.height
// })
// // console.log(arrayHeight)

// const arrayNameHeight = characters.map((character)=>{
//     return [character.name, character.height]
// })
// // console.log(arrayNameHeight)

// const FirstName = characters.map((character)=>{
//       return character.name.split(" ")[0]
// })

// // console.log(FirstName)



// ######### SOME ######## 
// Is there at least one male character?
// Is there at least one character with blue eyes?
// Is there at least one character taller than 200?
// Is there at least one character that has mass less than 50?


// const male = characters.some((character)=>{
//       return character.gender === "male"
// })

// console.log(male)

// const blueEye = characters.some((character)=>{
//       return character.eye_color === 'blue'
// })

// console.log(blueEye)



// const taller = characters.some((character)=>{
//       return character.height > 200
// })

// console.log(taller)



// const mass = characters.some((character)=>{
//       return character.mass < 50
// })

// console.log(mass)






// Array.filter()

// const filter = characters.filter(character => character.mass < 100)
// console.log(filter)
// let genderMaleFeMalee = characters.filter(character => character.gender == 'male')
// console.log(genderMaleFeMalee)
// const eyeColor = characters.filter(x => x.eye_color = 'blue')
// console.log(eyeColor)





//  for each loop
// const numbers = [2,5,67,3,78,2,5,76,87,4,3,34,5,73,63];

// numbers.forEach((value, index, array)=>{
  //     console.log(value, index, array)
  // })
  
// let sum = 0;
// numbers.forEach(value =>{
//       return sum += value
//   })
  
//   console.log(sum)



// https://github.com/jamesqquick/javascript-array-functions-practice