//sample a element in collection
function sample(collection) {
	let randomIndex = Math.floor(Math.random() * collection.length)
	return collection[randomIndex]
}


function generatePassword(options){
  //define thing user might want
	const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
	const upperCaseLetters = lowerCaseLetters.toUpperCase()
	const numbers = '1234567890'
	const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'


	//console.log('options', options)
	//create a collection to store things user picked up
	let collection = []

	if (options.lowercase ==='on'){
		collection = collection.concat(lowerCaseLetters.split(''))
	}

	if (options.uppercase === 'on') {
		collection = collection.concat(upperCaseLetters.split(''))
	}

	if (options.numbers === 'on') {
		collection = collection.concat(numbers.split(''))
	}

	if (options.symbols === 'on') {
		collection = collection.concat(symbols.split(''))
	}

	//remove things user do not need

	if (options.excludeCharacters){
		//箭頭函式
		collection = collection.filter(character =>
			//if the character includes in 'excludeCharacters'
			//return false to remove the character in the collection

			/////原本的
			// if(options.excludeCharacters.includes(character)===true){
			// 	return false
			// }else{
			// 	return true
			// }
			//////精簡的
			!options.excludeCharacters.includes(character)
		)
	}
	
	// return error notice if collection is empty
	if (collection.length === 0) {
		return 'There is no valid character in your selection.'
	  }


	//start generating password
	
	let password = ''
	for (let i = 1;i <= options.length; i++){
		password += sample(collection)
	}

	//return password
	return password
	

}

//export generatePassword function for other files to use
module.exports = generatePassword

