const userCardTemplate = document.querySelector("[data-user-card-template]");
const userCardContainer = document.querySelector("[data-user-card-container]")
const searchInput = document.querySelector("[data-search]")

searchInput.addEventListener("input", e => {
      const value = e.target.value
      users.forEach(user => {
            const isVisible = user.name.toLowerCase().includes(value.toLowerCase()) || user.email.toLowerCase().includes(value.toLowerCase())
            user.element.classList.toggle("hide", !isVisible)
      })
}


fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
      users = data.map(user => {
        const card = userCardTemplate.content.cloneNode(true).children[0]
        
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")
        
        header.textContent = user.name
        body.textContent = user.email

        
        userCardContainer.append(card)
        // console.log(user)
        // console.log(card)

        return { name: user.name, email: user.email, element: card }
      })
      
})


