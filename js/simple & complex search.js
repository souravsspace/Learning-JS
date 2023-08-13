
import { userData } from "../js/userData.js";





const mainLogic = () => {
  
          const searchInput = document.querySelector('[searchInput]')
          const searchBtn = document.querySelector('[searchBtn]')
          const middleHeader = document.querySelector('[middle]')
            
      searchInput.addEventListener('input', showResult)
      // searchBtn.addEventListener('click', showResult)

      function showResult(e){
          const value = e.target.value.toLowerCase()
          const userCard = document.querySelector('.card')

          userData.forEach((user)=> {
                const userName = (user.firstName + " " + user.lastName).toLowerCase().includes(value)
                const userCountry = user.country.toLowerCase().includes(value)
                const userEmail = user.email.toLowerCase().includes(value)
                const userGender = user.gender.toLowerCase().includes(value)
                const userNumber = new String(user.number).includes(value)

                const isVisible = userName || userCountry || userEmail || userGender || userNumber
              
                userCard.classList.toggle('hide', !isVisible)
          })
      }
      
      userData.map((user)=>{
        // creating variable for userCard
          const userCard = document.createElement('div')
          const userFullName = document.createElement('h2')
          const userEmail = document.createElement('p')
          const userNumber = document.createElement('p')
          const userGender = document.createElement('p')
          const userCountry = document.createElement('p')

          // seting class to element
          userCard.classList.add('card')
          
          // inserting element on the middle section
          middleHeader.appendChild(userCard)
          userCard.appendChild(userFullName)
          userCard.appendChild(userEmail)
          userCard.appendChild(userNumber)
          userCard.appendChild(userGender)
          userCard.appendChild(userCountry)
          
          // pushing userData inside userCard
          userFullName.textContent = user.firstName + " " + user.lastName
          userEmail.textContent = "Email :" + " " + user.email
          userNumber.textContent = "Marks :" + " "+ user.number
          userGender.textContent = "Sex :" + " " + user.gender
          userCountry.textContent = "Country :" + " " + user.country
      })

}


mainLogic();