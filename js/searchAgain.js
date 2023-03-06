
const authurSearch = document.getElementById("search");

authurSearch.addEventListener("keyup", (e)=>{
    const currentValue = e.target.value.toLowerCase(),
          authurs = document.querySelectorAll("li");

    authurs.forEach((authur)=>{
      if (authur.textContent.toLowerCase().includes(currentValue)) {
          authur.style.display = "block";
        } else {
          authur.style.display = "none";
      }
    })

});