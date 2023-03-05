
const authurSearch = document.getElementById("input");

authurSearch.addEventListener("keyup", (e)=>{
  const currentValue = e.target.value.toLowerCase(),
        authurs = document.querySelectorAll("li.items");

  authurs.forEach((authur) =>{
    if(authur.textContent.toLowerCase().includes(currentValue)){
      authur.style.display = "block";
    } else {
      authur.style.display = "none";
    }
  })

})


// https://www.youtube.com/watch?v=ifi6dXOl3g4&ab_channel=Treehouse