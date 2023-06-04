
let container = document.getElementById("container");

// console.log(container.innerHTML)
// console.log(container.outerHTML)

// console.log(container.innerText)
// console.log(container.outerText)

// console.log(container.firstChild);
// console.log(container.firstElementChild);
// console.log(container.firstElementChild.nextElementSibling);
// console.log(container.firstElementChild.nodeName)
// console.log(container.firstElementChild.nextElementSibling.nodeType)
// console.log(container.firstElementChild.nodeValue)
// console.log(container.firstChild.data);

// console.log(container.lastChild)
// console.log(container.lastElementChild)
// console.log(container.lastElementChild.previousSibling);
// console.log(container.lastElementChild.nodeName)
// console.log(container.lastElementChild.nodeType)
// console.log(container.lastElementChild.nodeValue)

// console.log(container.lastElementChild.parentNode);
// console.log(container.lastElementChild.parentElement.nextElementSibling);

// console.log(container.className)


// console.log(document.body.textContent)
// console.log(container.textContent)


// check it has class or not
// let getClass = container.hasAttribute("class");
// let getClass = container.hasAttribute("container");
// let getClass = container.hasAttribute("id");
// console.log(getClass)

container.setAttribute("love", "true");
container.setAttribute("hidden", "true");
// container.setAttribute("hidden", "flase");
// container.setAttribute("class", "main_page")
// container.setAttribute("id", "main_page")
// console.log(container.attributes)

container.removeAttribute("hidden");
container.removeAttribute("love");

// 2 ta eksathe remove kora jay na 
// it will inly rmv only the firstAttribute
// container.removeAttribute("class", "id");
// container.removeAttribute("id", "class");

// container.removeAttribute("id");
// container.removeAttribute("class");



// console.log(container.attributes)




// get class name 
// console.log(container.attributes);



// see if it has class and love attribute  or not
// console.log(container.hasAttribute("class"))
// console.log(container.hasAttribute("love"))


// set class or id name
// it will reset the before class'es
container.setAttribute("class", "main-page home-page")
// console.log(container.attributes)

// remove class or id attribute
container.removeAttribute("class")
container.removeAttribute("id")
// console.log(container.attributes)


// add new attribute 
container.setAttribute("rue", "true")
// console.log(container.attributes)



// console.log(container.attributes)
// node of this element!!



{
  let headTitle = document.getElementById("head-tittle");

  // create attribute with dataset "data-"
  // example is html <h1 data-name="sourav"></h1>
  
  headTitle.dataset.name
  headTitle.dataset.age

  console.log(headTitle.attributes);
}















