
const names = ["sourav", "leVEl", "rADer", "join"];
const output = [];


for (let i = 0; i < names.length; i++) {

    const normal = names[i];
    const reversed = normal.split('').reverse('').join('');

    // const trying = normal.split('').reverse().join()
    // console.log(trying)

    if(normal.toUpperCase() == reversed.toUpperCase()){
          output.push(normal);
    } 

}

console.log(output)


