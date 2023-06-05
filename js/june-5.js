
let container = document.getElementsByClassName("container")[0];

// let container = document.getElementsByClassName("container")[0].firstElementChild;
// container.innerHTML = container.innerHTML + "<h1> Hey Guys</h1>";


// for(let i = 0; i < 10; i++);{
//   let newDiv = document.createElement("div");
//   newDiv.innerHTML = newDiv.innerHTML + "<h4>Heyy guy</h4>";
//   container.appendChild(newDiv);
//   i++;
//   console.log(i)
// }

// for(let i = 0; i++; i < 10){
//   let newDiv = document.createElement("div");
//   console.log(i)

//   newDiv.innerHTML = newDiv.innerHTML + "hey new";
//   container.appendChild(newDiv)
// }

// console.log(container);

let appendWithLink = document.createElement("div");

appendWithLink.innerHTML = appendWithLink.innerHTML + 
`
<a href=\"\">Click me</a>
<div class="h-div">
  <ul>
    <li>Name</li>
    <li>age</li>
  </ul>
</div>
`;

container.firstElementChild.appendChild(appendWithLink);

container.firstElementChild.lastElementChild.setAttribute("class", "bala")

// console.log(container.firstElementChild.lastElementChild)


//////////////////////////////////////


let newElement = document.createElement("div");

newElement.innerHTML = newElement.innerHTML + "<h3>New element</h3>"

// container.firstElementChild.children[2].appendChild(newElement);
// append = add element to the last of the following element

// container.firstElementChild.children[2].prepend(newElement);
// prepend = add element to the first of the following element

// container.firstElementChild.children[2].before(newElement);
// before = add element to outside first of the following element

// container.firstElementChild.children[2].after(newElement);
// after = add element to outside last of the following element

// container.firstElementChild.children[2].replaceWith(newElement);
// replaceWith = replace the following element with the created element


// console.log(
//   container.firstElementChild.children[2]
// )





// insertAdjacentHTML, insertAdjacentElement and insertAdjacentText


let main = document.getElementById("main");
main.style.border = "1px solid green";
main.style.padding = "20px"

main.insertAdjacentHTML('beforeBegin', '<h1>beforeBegin</h1>')
main.insertAdjacentHTML('beforeend', '<h1>beforeend</h1>')
main.insertAdjacentHTML('afterbegin', '<h1>Afterbegain</h1>')
main.insertAdjacentHTML('afterEnd', '<h1>Afterend</h1>')

// main.remove()




