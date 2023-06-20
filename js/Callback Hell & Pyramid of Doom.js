
const load = function(src, callback){
  let script = document.createElement("script");
  script.src = src;

  script.onload = function(){
    console.log("load done")
    callback(null, src);
  }

  script.onerror = function(){
    callback(new Error("There is an problem! with the src link"));
    console.error("error -505")
  }

  document.body.appendChild(script);
}

function toHello(error, src){
  if(error){
    console.warn(error)
    console.error(error)
    return;
  }
  console.log("hello world!" + " - " + src)
}


// callback hell && pyramid of doom
load("https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js", function toHello(error, src){
  if(error){
    console.warn(error)
    console.error(error)
    return;
  }
  load("https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js", function toHello(error, src){
    if(error){
      console.warn(error)
      console.error(error)
      return;
    }
    load("https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js", function toHello(error, src){
      if(error){
        console.warn(error)
        console.error(error)
        return;
      }
      load("https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js", function toHello(error, src){
        if(error){
          console.warn(error)
          console.error(error)
          return;
        }
        load("https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js", function toHello(error, src){
          if(error){
            console.warn(error)
            console.error(error)
            return;
          }
          load("https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js", function toHello(error, src){
            if(error){
              console.warn(error)
              console.error(error)
              return;
            }
            load("https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js", function toHello(error, src){
              if(error){
                console.warn(error)
                console.error(error)
                return;
              }
              load("https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js", function toHello(error, src){})
            })
          })
        })
      })
    })
  })
})













