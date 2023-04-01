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
