// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false


function isValidPassword(password, username){
	if(password.length < 9  || password.includes(" ") || password.includes(username)) {
		return false
	} return true
	} 

	isValidPassword("password","username")
	

// Write a function to find 
// the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2


function findAverage(arr){
	let total = 0
	for (let sum of arr){
	total += sum
	}
	average = total / arr.length
	console.log(average)
}

findAverage([1,2,3,4])


// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

function isPangram(phrase){
	let lowerCased = phrase.toLowerCase()
	for (let char of "abcdefghijklmnopqrstuvwxyz"){	
	if(!lowerCased.includes(char)){
		return false;
	} 
} 
return true;
}  
console.log(isPangram('The five boxing wizards jump quickly'))

// Write a getCard() function which returns
// a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

function getCard(){
	const values = ["1","2","3","4","5","6","7","8","9","10","J","Q","K","A"]
	const randomValue = values[Math.floor(Math.random() * values.length)];

	const suit = ["clubs", "spades", "hearts", "diamonds"]
	const randomSuit = suit[Math.floor(Math.random() * suit.length)];

	// console.log(randomValue)
	// console.log(randomSuit)

	let newObject = [];

	newObject.push(randomValue);
	newObject.push(randomSuit);

	console.log({value: randomValue, suit: randomSuit})
}

getCard()



// write a function that will double an array

function doubleArr(arr){
	const result = []
	for (let element of arr){
		let double = element * 2
		result.push(double)
	}
	console.log(result)
}
doubleArr([1,2,3])


// functions as arguments

function triple(x){
	x()
	x()
	x()
}

function greet(){
		console.log("Hello")
}

triple(greet)


// JS Methods

const numbers = [2,3,4,5,6,7,8]

numbers.forEach(function(num){
console.log(num * 2)
})

function printTriple(n){
console.log(n*3)
}

numbers.forEach(printTriple)

numbers.forEach(function(x){
console.log(x*10)
})

const books = [{
	title: "1984",
	autohor: "George Orwell"
},
{
	title: "Belarus",
	autohor: "Yanka Kupala"
}]

for (let i of books){
	console.log(i.title)
}


// JS Map Methods, extract portions, reverse array, modify array

const numeros = [2,3,4,5,6,7,8] 
const words = ['asap', 'byob', 'diy']

const doubles = numeros.map(function (numero){
  return numero * 2
})

const numDetail =numeros.map(function(g){
	return {
		value: g,
		isEven: g % 2 ===0
	}
})


const abbrevs = words.map(function(word){
	return word.toUpperCase().split('').join('.')
})

const titlesAbbrevs = books.map(function (b){
	return b.title
})


// arrow functions

const square = function(v){
	return v * v
}

const square1 = (a) => {
	return a * a
}

const square2 = h => h*h;


const doubles2 = numeros.map(k => k * 4)

const parityList = numeros.map((l) => l % 2 === 0 ? 'even' : 'odd')

// find Method finds only the first match and returns it

// filter Methods

const oddNums = numeros.filter(r => r % 2 === 1)

const realismGenre = books.filter(t => t.genre.includes("Realism"))


// every Method, checks if every elements meets certain criteria, either true or false
// some Method, checks if some elements meet certain criteria, either true or false


// sort Method (array.slice() copies the array)

const prices = [2, 56.3, 525.4, 9000, 7500.6]

const sort1 = prices.sort((a, b) => a - b)

books.sort((a,b) => a.rating - b.rating)

