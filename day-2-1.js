//Day 2: Password Philosophy

const readline = require('readline');
const fs = require('fs');

let inputArr = []
let validPasswords = []
let invalidPasswords = []

const rl = readline.createInterface({
  input: fs.createReadStream('./input.txt')
});


const countOccurence = (char, password) => {

let regex = new RegExp(char, 'g')

 return password.match(regex) ? password.match(regex).length : 0

}

const limitChecker = (min, max, occurence) => occurence >= min && occurence <= max

const start = () => {

	let passwords = inputArr.map(item => {
	 return {	
			min: item.split(' ')[0].split('-')[0],
			max: item.split(' ')[0].split('-')[1],
			char: item.split(' ')[1].split(':')[0],
			pass: item.split(':')[1].trim(),
		}
	})

	passwords.forEach(item => {
	
		let occurence = countOccurence(item.char, item.pass)
		let withinLimit = limitChecker(item.min, item.max, occurence)
		return withinLimit ? validPasswords.push(item) : invalidPasswords.push(item)
	})

	console.log('INVALID PASSWORDS:', invalidPasswords.length)
	console.log('VALID PASSWORDS:', validPasswords.length)

	return validPasswords.length
}

rl.on('line', async (input) => {
  await inputArr.push(input);
});

rl.on('close', () => start())
