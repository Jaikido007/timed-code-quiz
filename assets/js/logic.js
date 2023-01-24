// Getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const time_text = document.querySelector(".timer .time_text");
const time_count = document.querySelector(".timer .timer_sec");
const next_btn = document.querySelector(".next_btn");

// If start quiz button clicked
start_btn.onclick = () => {
	info_box.classList.add("activeInfo"); // show the info box
};

// If exit quiz button clicked
exit_btn.onclick = () => {
	info_box.classList.remove("activeInfo"); // hide the info box
};

// If continue quiz button clicked
continue_btn.onclick = () => {
	info_box.classList.remove("activeInfo"); // hide the info box
	quiz_box.classList.add("activeQuiz"); // show the quiz box
	showQuestions(0); // calling showQuestions function
	questionCounter(1); // passing 1 parameter to questionCounter
	startTimer(15); // calling startTimer function
	startTimerLine(0); // calling startTimer function
};

let question_count = 0;
let question_number = 1;
let counter;
let counter_line;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;


const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// If restart button clicked
restart_quiz.onclick = () => {
	quiz_box.classList.add("activeQuiz"); // show quiz box
	result_box.classList.remove("activeResult"); // hide result box
	question_count = 0;
	question_number = 1;
	timeValue = 15;
	widthValue = 0;
	userScore = 0;
	showQuestions(question_count);
	questionCounter(question_number);
	next_btn.style.display = "none";
    time_text.textContent = "Time Remaining";
	// ! remove for one full timer across all questions
	clearInterval(counter);
	startTimer(timeValue);
	clearInterval(counter_line);
	startTimerLine(widthValue);
	// !
};

// If quiz button clicked
quit_quiz.onclick = () => {
	window.location.reload(); // reload the current window
};

// If Next button is clicked
next_btn.onclick = () => {
	if (question_count < questions.length - 1) {
		question_count++;
		question_number++;
		showQuestions(question_count);
		questionCounter(question_number);
		next_btn.style.display = "none";
        time_text.textContent = "Time Remaining";
		// ! remove for one full timer across all questions
		clearInterval(counter);
		startTimer(timeValue);
		clearInterval(counter_line);
		startTimerLine(widthValue);
		// !
	} else {
		showResultBox();
        // !
        clearInterval(counter);
        clearInterval(counter_line);
        // !
	}
};

// getting questions and options from array
function showQuestions(index) {
	const question_text = document.querySelector(".question_text");
	let question_tag = `<span>${questions[index].number}: ${questions[index].question}</span>`;	
    let option_tag =
		`<div class="option"> ${questions[index].options[0]} <span></span></div>` +
		`<div class="option"> ${questions[index].options[1]} <span></span></div>` +
		`<div class="option"> ${questions[index].options[2]} <span></span></div>` +
		`<div class="option"> ${questions[index].options[3]} <span></span></div>`;
	question_text.innerHTML = question_tag;
	option_list.innerHTML = option_tag;

	const option = option_list.querySelectorAll(".option");
	for (let i = 0; i < option.length; i++) {
		option[i].setAttribute("onclick", "optionSelected(this)");
	}
}

let tickIcon = `<div class="icon tick"><i class="fas fa-check"></i></div>`;
let crossIcon = `<div class="icon cross"><i class="fas fa-xmark"></i></div>`;

// If user picks an option/answer
function optionSelected(answer) {
	// ! pauses time on answer select
	clearInterval(counter);
	clearInterval(counter_line);
	// !
	let userAnswer = answer.textContent;
	let correctAnswer = questions[question_count].answer;
	let allOptions = option_list.children.length;

	if (userAnswer.trim() == correctAnswer.trim()) {
		userScore += 1;
		answer.classList.add("correct");
		answer.insertAdjacentHTML("beforeend", tickIcon);
        console.log(`Correct answer!`);
        console.log(`Correct answers = ${userScore}`);
	} else {
		answer.classList.add("wrong");
		answer.insertAdjacentHTML("beforeend", crossIcon);
        console.log(`Wrong answer!`);

		// If answers are incorrect/wrong then automatically select the correct answer.
		for (let i = 0; i < allOptions; i++) {
			if (option_list.children[i].textContent.trim() == correctAnswer.trim()) {
				option_list.children[i].setAttribute("class", "option correct");
				option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
			
            console.log(`Auto selected the correct answer`)
            }
		}
	}

	//  Once user has selected - disable all options
	for (let i = 0; i < allOptions; i++) {
		option_list.children[i].classList.add("disabled");
	}
	next_btn.style.display = "block";
}

// Result box
function showResultBox() {
	info_box.classList.remove("activeInfo"); // hide the info box
	quiz_box.classList.remove("activeQuiz"); // hide the quiz box
	result_box.classList.add("activeResult"); // show the result box
	const score_text = result_box.querySelector(".score_text");
	// ! Change dependant on final questions.length - this is based on 5!
	if (userScore == 5) {
		let scoreTag = `<span>Top marks, you scored a mighty <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
		score_text.innerHTML = scoreTag;
	} else if (userScore > 3) {
		let scoreTag = `<span>Congrats, you scored <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
		score_text.innerHTML = scoreTag;
	} else if (userScore > 0 && userScore <= 2) {
		let scoreTag = `<span>Sorry, you only scored <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
		score_text.innerHTML = scoreTag;
	} else if (userScore == 0) {
		let scoreTag = `<span>Epic fail, you scored <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
		score_text.innerHTML = scoreTag;
	} else {
		let scoreTag = `<span>You managed to score <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
		score_text.innerHTML = scoreTag;
	}
}

// Start the timer
function startTimer(time) {
	counter = setInterval(timer, 1000);
	function timer() {
		time_count.textContent = time;
		time--;

		if (time < 9) {
			let addZero = time_count.textContent;
			time_count.textContent = "0" + addZero;
		}

		if (time < 0) {
			clearInterval(counter);
			// time_count.textContent = "00";
            time_text.textContent = "Timed Out";

            let correctAnswer = questions[question_count].answer;
			let allOptions = option_list.children.length;

			for (let i = 0; i < allOptions; i++) {
				if (
					option_list.children[i].textContent.trim() == correctAnswer.trim()
				) {
					option_list.children[i].setAttribute("class", "option correct");
					option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
				}
			}
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }
            next_btn.style.display = "block";
		}
	}
}

function startTimerLine(time) {
	counter_line = setInterval(timer, 29);
	function timer() {
		time += 1;
		time_line.style.width = time + "px";
		if (time > 549) {
			clearInterval(counter_line);
		}
	}
}

// Question counter
function questionCounter(index) {
	const bottom_question_counter = quiz_box.querySelector(".total_questions");
	let totalQuestionsCountTag = `<span><p>${index}</p> of <p>${questions.length}</p>Questions</span>`;
	bottom_question_counter.innerHTML = totalQuestionsCountTag;
}
