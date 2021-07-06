
function generatePassword(){
  //define thing user might want
	const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
	const upperCaseLetters = lowerCaseLetters.toUpperCase()
	const numbers = '1234567890'
	const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

	//define dummy data
	const options = {
		length: '8',
		// lowercase: 'on',
		// uppercase: 'on',
		numbers: 'on',
		symbols: 'on',
		excludeCharacters: '012345' 
	}
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
		console.log(`exclude characters: ${options.excludeCharacters}`)
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

	//filter, includes
	console.log('collection',collection)


	// let lowerCaseArray = lowerCaseLetters.split('')
    // collection = collection.concat(lowerCaseArray)  //concat可以把兩個陣列相連在一起
	console.log('collection' , collection)
	// console.log('collection' , collection)
	//split

	//removoe things user do not need

	//start generating password

	//return password
	console.log('This function will generate password')
}
generatePassword()

