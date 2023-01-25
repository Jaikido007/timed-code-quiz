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
		options: [
            `var`, 
            `script`, 
            `section`, 
            `link`
        ],
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
		question: "What is the keyword used to declare a variable in JavaScript?",
		answer: "var",
		options: ["let", "const", "var", "variable"],
	},

	{
		number: 7,
		question: "How do you add two numbers in JavaScript?",
		answer: "3 + 5",
		options: ["3 + '5'", "add(3, 5)", "3 & 5", "3 + 5"],
	},

	{
		number: 8,
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
		number: 9,
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
		number: 10,
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
		number: 11,
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
		number: 12,
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
		number: 13,
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
		number: 14,
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
		number: 15,
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
		number: 16,
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
		number: 17,
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
		number: 18,
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
		number: 19,
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
		number: 20,
		question: "How do you check if a string is a palindrome in JavaScript?",
		answer: "str === str.split('').reverse().join('')",
		options: [
			"str.isPalindrome()",
			"str.reverse() === str",
			"str.split('').reverse().join('') === str",
			"str === str.split('').reverse().join('')",
		],
	},
];
