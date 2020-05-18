window.addEventListener("load", () => {
	const sounds = document.querySelectorAll(".sound");
	const colors = document.querySelectorAll(".colors div");
	const visual = document.querySelector(".colorful-elements");
	const visualColors = ["red", "purple", "indigo", "yellow", "black", "#d2691e"];

	// Looping through each color
	colors.forEach((color, i) => {
		color.addEventListener("click", function() {
			sounds[i].currentTime = 0;
			sounds[i].play();
			Bubbles(i);
		})
	})

	// Function for making sound bubbles
	const Bubbles = (index) => {
		const bubble = document.createElement("div");
		visual.appendChild(bubble);
		bubble.style.backgroundColor = visualColors[index];
		bubble.style.animation = "jump 1s ease";
		bubble.addEventListener("animationend", function() {
			visual.removeChild(this);
		})
	} 
})