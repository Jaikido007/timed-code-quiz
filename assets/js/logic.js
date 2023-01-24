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
    console.log('clicked')
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
};

let question_count = 0;
let question_number = 1

const next_btn = document.querySelector(".next_btn");

// If Next button is clicked

next_btn.onclick = () => {
    if (question_count < questions.length - 1) {
        question_count++;
        question_number++;
        showQuestions(question_count);
        questionCounter(question_number);
    } else {
        console.log(`Questions completed`);
    }
}

// getting questions and options from array
function showQuestions(index) {
    const question_text = document.querySelector(".question_text")
    const option_list = document.querySelector(".option_list")
    let question_tag = `<span>${questions[index].number}: ${questions[index].question}</span>`;

    let option_tag = 
    `<div class="option"> ${questions[index].options[0]} <span></span></div>`
    +     `<div class="option"> ${questions[index].options[1]} <span></span></div>`
    +     `<div class="option"> ${questions[index].options[2]} <span></span></div>`
    +     `<div class="option"> ${questions[index].options[3]} <span></span></div>`
    question_text.innerHTML = question_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option")
    for (let i = 0; i < option_list.length; i++) {
        option_list[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function questionCounter(index) {
    const bottom_question_counter = quiz_box.querySelector(".total_questions");
    let totalQuestionsCountTag = `<span><p>${index}</p> of <p>${questions.length}</p>Questions</span>`;
    bottom_question_counter.innerHTML = totalQuestionsCountTag;
}