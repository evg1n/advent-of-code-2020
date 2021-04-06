// Day 1: Report Repair

const readline = require('readline');
const fs = require('fs');

let inputArr = []
let numbers = new Set()

const rl = readline.createInterface({
  input: fs.createReadStream('./input.txt'),
	output: process.stdout
});

const sortedArray = inputArr.sort((a,b) => (a - b));

const startOne = (sum) => sortedArray.forEach(
	(item, index, array) => {
	array.indexOf(sum - item) > -1 
	? numbers.add(array[array.indexOf(sum - item)])
	: null
}
)

const startTwo = () => sortedArray.forEach((item, index, array) => {
	let startingVal = 2020 - item
	startOne(startingVal)
	if (index === array.length - 1){
		multiplyAll([...numbers])
	}
})

const multiplyAll = (array) => {

	const reducer = (acc, val) => acc * val
	let result = array.reduce(reducer)
  
  console.log('Result:', result)

  return result
}

rl.on('line', async (input) => {
  await inputArr.push(parseInt(input));
});

// For the first part use:
rl.on('close', () => startOne(2020))

// For the second part use:
rl.on('close', () => startTwo())
