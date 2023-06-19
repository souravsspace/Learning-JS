
// syncronous programming

// let a = prompt("How are you ?");
// let b = prompt("what is your name ?").toUpperCase();
// let c = prompt("what is your age ?");

// alert(b + " " + "is your name, your age is" + " " + c + ". " + "You said that you are" + " " + a);

// serial vabe syncronous kaj kore


// asynchronous programming

// console.log("start")
// setTimeout(function() {
//   console.log("after 2000ms")
// }, 2000)
// console.log("end")




// callback function

// function loadScript(src, callback){
//   let BootStrapScript = document.createElement("script");
//   BootStrapScript.src = src;

//   BootStrapScript.onload = function(){
//     console.log("script src - " + src);
//     callback(null, src);
//   }

//   BootStrapScript.onerror = function(){
//     callback(new Error("src got some problem"))

//     console.error("error loading script - ", src);
//     console.warn("error loading script - ", src);
//   }

//   document.body.appendChild(BootStrapScript);
// }


// function hello(error, src){
//   if(error){
//     console.log(error)
//     return;
//   }
//   alert("hello bro --> " + " " + src);
// }
// // function bye(error, src){
// //   alert("bye bro" , src)
// // }

// // loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", hello)

// loadScript("https://cdn.jddssdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", hello)
// // error hobe cz eta exist i kore na



// // practice callback function without error

// const toLoad = function(src, callback){
//   let script = document.createElement("script");
//   script.src = src;

//   script.onload = function(){
//     console.log("script loaded!")
//     console.log("The bootStrap5 script is - ", src)
//     callback(src);
//   }

//   document.body.appendChild(script);
// }


// function showTime(src){
//   console.log(new Date());
//   console.log("Show time running!" + " " + "the src cdn is -" + " " + src);
// }

// toLoad("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", showTime)




// practice callback function with error

const toLoad = function(src, callback){
  let script = document.createElement("script");
  script.src = src;

  script.onload = function(){
    console.log("script loaded!")
    console.log("The bootStrap5 script is - ", src)
    callback(error, src);
  }

  script.onerror = function(){
    callback(new Error("The src has some problems"))

    console.warn("warn 404")
    console.error("error 404")
  }

  document.body.appendChild(script);
}


function showTime(error, src){
  if(error){
    console.warn(error)
    return
  }

  console.log(new Date());
  console.log("Show time running!" + " " + "the src cdn is -" + " " + src);
}

toLoad("https://cdn.souravukil-jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", showTime)



