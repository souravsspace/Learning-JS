// ! variable 
const search = document.querySelector("[search]")
const inputBox = document.querySelector("[inputBox]")
const searchBtn = document.querySelector("[searchBtn]")
const closeBtn = document.querySelector("[closeBtn]")

const cardTemplate = document.querySelector("[cardTemplate]")
const cardList = document.querySelector("[cardList]")

let users = []



// ! main logic
const main = ()=>{

      // ? search transition
      
      searchBtn.addEventListener('click', ()=>{
            const toValue = search.classList.contains('active');

            if(toValue){
                inputBox.value = ''
            } 
            else {
              search.classList.add('active')
              inputBox.focus()
            }
      })

      closeBtn.addEventListener('click', ()=> {
        search.classList.remove('active') 
        inputBox.value = ''
      })
      

      // ? search bar logic


      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
          users = data.map(user => {
            const card = cardTemplate.content.cloneNode(true).children[0]
            const userName = card.querySelector("[userName]")
            const userEmail = card.querySelector("[userEmail]")
            const userUsername = card.querySelector("[userUsername]")

            userName.textContent = user.name
            userEmail.textContent = user.email
            userUsername.textContent = "@" + user.username
            
            cardList.appendChild(card)

            return { userName: user.name, userEmail: user.email, userUsername: user.username, element: card}
          }) 
      })

      inputBox.addEventListener('input', (e)=>{
        const value = e.target.value.toLowerCase()
        
        users.forEach(user =>{
            const name = user.userName.toLowerCase().includes(value)
            const username = user.userEmail.toLowerCase().includes(value)
            const email = user.userUsername.toLowerCase().includes(value)

            const isVisible = name || username || email

            user.element.classList.toggle('hide', !isVisible)
        })

      })
}

main();
    
    
    



// https://codepen.io/amit-kharod/pen/xxaZyyW

