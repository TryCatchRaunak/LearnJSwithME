//ACCESSING ELEMENTS 

//1. Selecting with ID
    //document.getElementById("myID");
let IDSelect = document.getElementById("heading");//return the object of h1
console.dir(IDSelect);
//When a ID Element doesn't exist this method returns NULL

//2. Selecting with Class 
    //document.getElementByClassName("myClass");
let classSelect = document.getElementsByClassName("para");
console.dir(classSelect);//returns an HTML Colection of a Class
//When a Class Element doesn't exist this method returns an EMPTY HTML Collection

//3. Selecting with Tag
    //document.getElementByTagName("p/h1/h2/h4/div/body,etc...");
let tagSelect = document.getElementsByTagName("p");
console.dir(tagSelect);//returns an HTML Collection of a Tag
//When a Tag Element doesn't exist this method returns an EMPTY HTML Collection

//.4. Query Selector//returns nodeList
    //document.querySelector("myTag / myID / myClass");//returns first element
    //document.querySelectorAll("myTag / myID / myClass");//returns all the elements
console.dir(document.querySelector("p"));
console.dir(document.querySelectorAll("p"));
console.dir(document.querySelector(".para"));//for obtaining object of a class '.' must be used before Class Name
console.dir(document.querySelectorAll("#heading"));//for obtaining object of a class '#' must be used before ID Name






//PROPERTIES OF ELEMENTS

//1. tagName: returns tag for element nodes
let ele = document.querySelector("#heading");
console.log(ele.tagName);

//2. innerText: returns the text content of the element and all its children
console.dir(document.body.firstChild);
/*In a DOM Tree there are 3 types of nodes:
    - text nodes
    - comment nodes
    - element nodes
 In DOM Manipulation we mostly work on element nodes.*/
console.dir(document.querySelector("div").children);

// 3. innerHTML: returns the HTML content of the element and all its children
// Difference between .innerText and .innerHTML
let div = document.querySelector("div");
console.dir(div);

console.dir(div.innerText);//provides pure textual content
console.dir(div.innerHTML);//provides full HTML content
console.dir(div.innerText = "panda");//we can transform Text
console.dir(div.innerHTML = "<div>inner div</div>");//we can transform HTML 

//4. textContent: returns textual content even for hidden elements
let headingHidden = document.querySelector("h2");
console.log(headingHidden.innerText);//returns text content of a hidden element
console.dir(headingHidden.textContent);//returns text content of a hidden element






//ATTRIBUTES OF ELEMENTS

//1. getAttribute(aatr): returns the value of the attribute
let div = document.querySelector("div");
console.log(div);
let id = div.getAttribute("id");
console.log(id);

//2. setAttribute(attr, value): sets the value of the attribute
let section = document.querySelector("section");
console.log(section);
let setAttr = section.setAttribute("name", "timePass");
console.log(section.getAttribute("name"));






//STYLING ELEMENTS
let divStyle = document.querySelector("div");
divStyle.style.backgroundColor = "red";
divStyle.style.fontSize = "34px";






//INSERTING ELEMENTS
//Before inserting we need to create elements
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
divStyle.append(newBtn);//adds element at the end of the parent element

divStyle.prepend(newBtn);//adds element at the start of the parent element

let newDiv = document.createElement("div");
newDiv.innerText = "This is a new div";
divStyle.before(newDiv);//adds element before the parent element

divStyle.after(newDiv);//adds element after the parent element

newDiv.remove();//removes the element from the DOM