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

// If start quiz button clicked
start_btn.onclick = () => {
	info_box.classList.add("activeInfo"); // show the info box
	console.log("clicked");
};

// If exit quiz button clicked
exit_btn.onclick = () => {
	info_box.classList.remove("activeInfo"); // hide the info box
};

// If continue quiz button clicked
continue_btn.onclick = () => {
	info_box.classList.remove("activeInfo"); // hide the info box
	quiz_box.classList.add("activeQuiz"); // show the quiz box
	showQuestions(0);
	questionCounter(1);
	startTimer(15);
    startTimerLine(0)
};

let question_count = 0;
let question_number = 1;
let counter;
let timeValue = 15;
let widthValue = 0;

const next_btn = document.querySelector(".next_btn");

// If Next button is clicked

next_btn.onclick = () => {
	if (question_count < questions.length - 1) {
		question_count++;
		question_number++;
		showQuestions(question_count);
		questionCounter(question_number);
        next_btn.style.display = "none";
        		// ! remove for one full timer across all questions
		clearInterval(counter);
		startTimer(timeValue);
        clearInterval(counter_line);
		startTimerLine(widthValue);
        // !
	} else {
		console.log(`Questions completed`);
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

function optionSelected(answer) {
	// ! pauses time on answer select
	clearInterval(counter);
    clearInterval(counter_line);
    // !
	let userAnswer = answer.textContent;
	let correctAnswer = questions[question_count].answer;
	let allOptions = option_list.children.length;

	if (userAnswer.trim() == correctAnswer.trim()) {
		answer.classList.add("correct");
		console.log(`Answer is correct!`);
		answer.insertAdjacentHTML("beforeend", tickIcon);
	} else {
		answer.classList.add("wrong");
		console.log(`Answer is wrong!`);
		answer.insertAdjacentHTML("beforeend", crossIcon);
		// If answers are incorrect/wrong then automatically select the correct answer.
		for (let i = 0; i < allOptions; i++) {
			if (option_list.children[i].textContent.trim() == correctAnswer.trim()) {
				option_list.children[i].setAttribute("class", "option correct");
				option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
			}
		}
	}

	//  Once user has selected - disable all options
	for (let i = 0; i < allOptions; i++) {
		option_list.children[i].classList.add("disabled");
	}
    next_btn.style.display = "block";
}

// The timer
function startTimer(time) {
	counter = setInterval(timer, 1000);
	function timer() {
		time_count.textContent = time;
		time--;
        if(time < 9){
            let addZero = time_count.textContent;
            time_count.textContent = "0" + addZero;
        }
        if(time < 0) {
            clearInterval(counter);
            time_count.textContent = "00"
        }
	}
}

function startTimerLine(time) {
	counter_line = setInterval(timer, 29);
	function timer() {
        time += 1;
        time_line.style.width = time + "px"
        if(time > 549) {
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
