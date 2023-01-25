// Creating an array and passing the number, questions, options and answers
let questions = [
	{
		number: 1,
		question: "How do you write 'Hello, World!' in an alert box?",
		answer: `alert('Hello, World!')`,
		options: [
			`alertBox('Hello, World!')`,
			`alert('Hello, World!')`,
			`msg('Hello, World!')`,
			`msgBox('Hello, World!')`,
		],
	},

	{
		number: 2,
		question: "Inside which element <> do you put JavaScript?",
		answer: `script`,
		options: [`var`, `script`, `section`, `link`],
	},

	{
		number: 3,
		question: "How do you create a JavaScript array?",
		answer: `var fruits = ["banana", "apple", "peach"];`,
		options: [
			`var fruits = "banana", "apple", "peach";`,
			`var fruits = ["banana", "apple", "peach"];`,
			`var fruits = (1:"banana", 2:"apple", 3:"peach");`,
			`var fruits = 1 = ("banana"), 2 = ("apple"), 3 = ("peach");`,
		],
	},

	{
		number: 4,
		question:
			"When a user views a page containing a JavaScript program, which machine actually executes the script?",
		answer: `The User’s machine running a Web browser`,
		options: [
			`The User’s machine running a Web browser`,
			`The Web server`,
			`A central machine deep within Netscape’s corporate offices`,
			`None of the above`,
		],
	},

	{
		number: 5,
		question: "Why so JavaScript and Java have similar name?",
		answer: `JavaScript’s syntax is loosely based on Java’s`,
		options: [
			`JavaScript is a stripped-down version of Java`,
			`They both originated on the island of Java`,
			`JavaScript’s syntax is loosely based on Java’s`,
			`None of the above`,
		],
	},

	{
		number: 6,
		question: "How do you add two numbers in JavaScript?",
		answer: "3 + 5",
		options: ["3 + '5'", "add(3, 5)", "3 & 5", "3 + 5"],
	},

	{
		number: 7,
		question: "What is the syntax for an if statement in JavaScript?",
		answer: "if (condition) { }",
		options: [
			"if condition { }",
			"if: condition { }",
			"if = condition { }",
			"if (condition) { }",
		],
	},

	{
		number: 8,
		question: "What is the syntax for a while loop in JavaScript?",
		answer: "while (condition) { }",
		options: [
			"while: condition { }",
			"while = condition { }",
			"do while (condition) { }",
			"while (condition) { }",
		],
	},

	{
		number: 9,
		question: "How do you add an element to an array in JavaScript?",
		answer: "colors.push('purple');",
		options: [
			"colors.add('purple');",
			"colors[colors.length] = 'purple'",
			"colors += 'purple'",
			"colors.push('purple');",
		],
	},

	{
		number: 10,
		question: "How do you get the current date and time in JavaScript?",
		answer: "new Date()",
		options: ["getDate()", "getTime()", "Date.now()", "new Date()"],
	},

	{
		number: 11,
		question:
			"How do you check if a variable is a finite number in JavaScript?",
		answer: "isFinite(myVariable)",
		options: [
			"myVariable.isFinite()",
			"Number.isFinite(myVariable)",
			"!isNaN(myVariable) && !isInfinite(myVariable)",
			"isFinite(myVariable)",
		],
	},

	{
		number: 12,
		question: "How do you check if a variable is an array in JavaScript?",
		answer: "Array.isArray(myVariable)",
		options: [
			"myVariable.isArray()",
			"typeof myVariable == 'array'",
			"myVariable instanceof Array",
			"Array.isArray(myVariable)",
		],
	},

	{
		number: 13,
		question: "How do you check if a variable is NaN in JavaScript?",
		answer: "isNaN(myVariable)",
		options: [
			"myVariable.isNaN()",
			"Number.isNaN(myVariable)",
			"isNaN(parseFloat(myVariable))",
			"isNaN(myVariable)",
		],
	},

	{
		number: 14,
		question: "How do you check if a number is an integer in JavaScript?",
		answer: "Number.isInteger(myNumber)",
		options: [
			"myNumber.isInteger()",
			"typeof myNumber == 'integer'",
			"Math.ceil(myNumber) === myNumber",
			"Number.isInteger(myNumber)",
		],
	},

	{
		number: 15,
		question: "How do you create a new object in JavaScript?",
		answer: "new Object()",
		options: [
			"var obj = {}",
			"var obj = Object.create()",
			"var obj = Object.assign()",
			"new Object()",
		],
	},

	{
		number: 16,
		question: "How do you check if a variable is undefined in JavaScript?",
		answer: "typeof myVariable === 'undefined'",
		options: [
			"myVariable === undefined",
			"myVariable == undefined",
			"!myVariable",
			"typeof myVariable === 'undefined'",
		],
	},

	{
		number: 17,
		question: "How do you get the length of a string in JavaScript?",
		answer: "str.length",
		options: ["str.size()", "str.count()", "str.len()", "str.length"],
	},

	{
		number: 18,
		question: "How do you check if a variable is null in JavaScript?",
		answer: "myVariable === null",
		options: [
			"typeof myVariable === 'null'",
			"myVariable == null",
			"!myVariable",
			"myVariable === null",
		],
	},

    {
		number: 19,
		question: "How do you get the first element of an array in JavaScript?",
		answer: "array[0]",
		options: ["array.first()", "array.get(0)", "array.pop()", "array[0]"],
	},

	{
		number: 20,
		question: "How do you check if a variable is a string in JavaScript?",
		answer: "typeof myVariable === 'string'",
		options: [
			"myVariable.isString()",
			"myVariable instanceof String",
			"myVariable.constructor === String",
			"typeof myVariable === 'string'",
		],
	},

    {
		number: 21,
		question: "How do you get the last element of an array in JavaScript?",
		answer: "array[array.length - 1]",
		options: [
			"array.last()",
			"array.get(-1)",
			"array.shift()",
			"array[array.length - 1]",
		],
	},

	{
		number: 22,
		question: "How do you check if a variable is a boolean in JavaScript?",
		answer: "typeof myVariable === 'boolean'",
		options: [
			"myVariable.isBoolean()",
			"myVariable instanceof Boolean",
			"myVariable.constructor === Boolean",
			"typeof myVariable === 'boolean'",
		],
	},

    {
		number: 23,
		question:
			"How do you remove an element from an array by its value in JavaScript?",
		answer: "array.splice(array.indexOf(value), 1)",
		options: [
			"array.remove(value)",
			"delete array[array.indexOf(value)]",
			"array.filter(el => el !== value)",
			"array.splice(array.indexOf(value), 1)",
		],
	},

	{
		number: 24,
		question: "How do you check if a variable is a number in JavaScript?",
		answer: "typeof myVariable === 'number'",
		options: [
			"myVariable.isNumber()",
			"myVariable instanceof Number",
			"isNaN(myVariable)",
			"typeof myVariable === 'number'",
		],
	},
    
	{
		number: 25,
		question: "How do you merge two arrays in JavaScript?",
		answer: "array1.concat(array2)",
		options: [
			"array1 + array2",
			"array1.push(...array2)",
			"array1.merge(array2)",
			"array1.concat(array2)",
		],
	},

	{
		number: 26,
		question: "How do you check if a variable is an object in JavaScript?",
		answer: "typeof myVariable === 'object'",
		options: [
			"myVariable.isObject()",
			"myVariable instanceof Object",
			"myVariable.constructor === Object",
			"typeof myVariable === 'object'",
		],
	},

    {
		number: 27,
		question:
			"How do you check if a variable is an instance of a specific class in JavaScript?",
		answer: "variable instanceof Class",
		options: [
			"variable.isInstanceOf(Class)",
			"Class.isPrototypeOf(variable)",
			"variable.constructor === Class",
			"variable instanceof Class",
		],
	},

	{
		number: 28,
		question: "How do you check if a variable is a function in JavaScript?",
		answer: "typeof myVariable === 'function'",
		options: [
			"myVariable.isFunction()",
			"myVariable instanceof Function",
			"myVariable.constructor === Function",
			"typeof myVariable === 'function'",
		],
	},

    {
		number: 29,
		question: "How do you print the value of a variable to the console?",
		answer: "console.log(myVariable)",
		options: [
			"console.print(myVariable)",
			"console.show(myVariable)",
			"console.info(myVariable)",
			"console.log(myVariable)",
		],
	},

	{
		number: 30,
		question: "How do you check if a string is a palindrome?",
		answer: "str === str.split('').reverse().join('')",
		options: [
			"str.isPalindrome()",
			"str.reverse() === str",
			"str.split('').reverse().join('') === str",
			"str === str.split('').reverse().join('')",
		],
	},
];
