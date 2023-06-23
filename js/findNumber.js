
// // sum 3 number to get the result
// const number = [35,78,65,52,25,85,29,25,75,27,97,78,72,96,85,37,29,56,65,45,67,35];
// const target = 199;


// function getTheValue(number, target){

//     for (let i = 0; i < number.length; i++) {
//         const first = number[i];
//         for (let j = 0; j < number.length; j++) {
//             const second = number[j];
//             for (let l = 0; l < number.length; l++) {
//                 const third = number[l];

//                 if(first + second + third === target){
//                     return [first, second, third];
//                 }
//             }
//         }
//     }
//     return null;

// }

// const result = getTheValue(number, target)
// console.log(result)




// multiply numbers to get the result

const number = [35,78,65,52,25,85,29,25,75,27,97,78,72,96,85,37,29,56,65,45,67,35];
const target = 393432;

function getTheValue(number, target) {

        for (let a = 0; a < number.length; a++) {
                const num1 = number[a];
                for (let b = 0; b < number.length; b++) {
                        const num2 = number[b];
                        for (let c = 0; c < number.length; c++) {
                            const num3 = number[c];
                            
                            if(num1 * num2 * num3 === target){
                                    return [num1, num2, num3];
                            }
                        }
                }
        }
        return null;

}

const result = getTheValue(number, target);
console.log(result)






