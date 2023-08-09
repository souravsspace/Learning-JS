// search animation
const searchBox = document.querySelector("[searchBox]")
const inputBox = document.querySelector("[inputBox]")
const searchBtn = document.querySelector("[searchBtn]")
const closeBtn = document.querySelector("[closeBtn]")


// search animation main logic
searchBox.addEventListener("click", ()=>{
    let val = searchBox.classList.contains("active")
    if(!val){
        searchBox.classList.add("active");
        searchBox.focus();
    } else {
        searchBox.value = '';
    }
})

closeBtn.addEventListener("click", ()=>{
  console.log(searchBox.classList)
  console.log(searchBox.classList.remove('active'))

  searchBox.classList.remove('active')
})



