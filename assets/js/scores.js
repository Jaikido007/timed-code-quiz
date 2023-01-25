// Retrieve high scores from local storage
const highscoresList = document.getElementById("highscores");
const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

// Sort high scores by score in descending order
highscores.sort((a, b) => b.score - a.score);

// Create HTML string for each score and join them
highscoresList.innerHTML = highscores
	.map((score) => {
		return `<li>${score.initials} - ${score.score}</li>`;
	})
	.join("");

// function to clear all scores
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearScores);

function clearScores() {
	localStorage.removeItem("highscores");
	highscoresList.innerHTML = "";
}

// function to go back
const backBtn = document.querySelector(".back");
backBtn.addEventListener("click", goBack);

function goBack() {
	window.location.href = "index.html";
}
