
const dataOne = {
  a:5, b:9, h:1, h:8, o:3, p:9
}
const dataTwo = {
  b:5, s:9, v:1, g:8, p:9, o:8
}

// const target = {p:9}


// find siblings 
function findingValue(dataOne, dataTwo){

    let dataValue = {}

    for (let i in dataOne) {
      if(dataOne[i] == dataTwo[i]){
        dataValue = dataOne[i];
      }
    }

    return dataValue
} 

const result = findingValue(dataOne, dataTwo);
console.log(result)




// add two objects togather
const allData = {
  ...dataOne,
  ...dataTwo
}

// console.log(allData)


// object to array 
const objectToArray = Object.keys(allData).map((key) => [key, allData[key]])

// console.log(objectToArray)



