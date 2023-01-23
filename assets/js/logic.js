// Getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".options_list");
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
};

