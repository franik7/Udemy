// we can store functions inside of objects
// (function added as a property to an object is called a method)

const math = {
	numbers: [1, 2, 3],
	add: function (n,m) {
		return n + m
	}
}

console.log(math.add(3,7))


// shorthand method for above

const auth = {
	username: "TommyBot",
	login(){
		console.log("Logged you in!")
	},
	logout(){
		console.log("Goodbye")
	}
}


//THIS keyword 

function sayHi(){
	console.log("Hi")
	console.log(this)
}

const person = {
	first: "Cherilyn",
	last: "Sarkisyan",
	nickName: "Cher",
	fullName() {
		const {first, last, nickName} = this
		return `${first} ${last} AKA ${nickName}`;
	},
	printBio(){
		const fullName = this.fullName()
		console.log(`${fullName} is a person`)
	}
}

// useful with dot context (objectName.function() that includes THIS)


// Annoyer

const annoyer = {
phrases: ["literally","cray cray","I can't even", "Totes!","YOLO","Can't Stop, Won't Stop"],
pickPhrase(){
	const {phrases} = this
	const index = Math.floor(Math.random() * phrases.length)
	return phrases[index]
},
start() {
	this.timerId = setInterval(() => {
		console.log(this.pickPhrase())
	},3000)
}, 
stop(){
	clearInterval(this.timerId)
	console.log("This is over!")
	}
}


//querySelector, find first element with class: and ID:

document.querySelector("h1") //only first one
document.querySelector("#h1") // only first one by ID
document.querySelector(".class") // only first one by class
document.querySelector("li.class") // only first one by class within list (li)
document.querySelector("section li.class") // second one within section and then list
document.querySelector("input[type="password"]") // select by input type
document.querySelectorAll("inputs") // gets all inputs
document.querySelectorAll(".special") // gets all class specials


//twisting the DOM
//innerText and textContent

document.querySelector("h1")

h1.innerText
h1.innerText = "I'm hungry!" // will change the text
//innerText shows what's on the page, textContent shows everything (including console.log and if anything is hidden)

//innerHTML, retrieves all other tags inside the element (all the content)
const form = document.querySelector("form")
form.innerHTML // shows everything for the form

h1.innerHTML += " is cool" // My Webpage is cool. If you want to 
//update an element within HTML, use innerHTML, not innerText 

//value
inputs[0].value // gets value out of the first input element

//get attribute or set attribute
const range = document.querySelector('input[type="range"]') // selects range
range.getAttribute("max") // shows max value
range.setAttribute("max", "1000") // sets max value

//finding parents/children/siblings
const firstLi = document.querySelector("li")
firstLi.parentElement // ul
firstLi.parentElement.parentElement // body
const ul = document.querySelector("ul")
ul.children[0] // finding children of the element
firstLi.nextElementSibling //Second Things, selects sibling below
thirdLI.previousElementSibling //Second Things, selects sibling above

//change multiple elements
const allLis = document.querySelectorAll("li")
for (let i = 0; i < allLis.length; i++) {
	allLis[i].innerText = "WE ARE THE CHAMPIONS" // every single LI is updated
}






