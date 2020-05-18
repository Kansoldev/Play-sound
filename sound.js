window.addEventListener("load", () => {
	const sounds = document.querySelectorAll(".sound");
	const colors = document.querySelectorAll(".colors div");
	const visual = document.querySelector(".colorful-elements");
	const visualColors = ["#5B4DB7", "#42ADC7", "#81D152", "#F5F263", "#FF9D4F", "#FF5347"];

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