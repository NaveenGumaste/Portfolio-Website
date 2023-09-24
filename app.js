document.addEventListener("DOMContentLoaded", () => {
	animateText(); // Call animateText function when DOM is fully loaded

	const cards = document.querySelectorAll(".card");

	cards.forEach((card) => {
		card.addEventListener("mouseenter", () => {
			card.querySelector(".face.face2").style.height = "60px";
		});

		card.addEventListener("mouseleave", () => {
			card.querySelector(".face.face2").style.height = "100%";
		});
	});
});

function animateText() {
	const paragraph = document.querySelector(".animated-text");
	const text = paragraph.innerText;
	paragraph.innerHTML = "";

	for (let i = 0; i < text.length; i++) {
		const charSpan = document.createElement("span");
		charSpan.textContent = text[i] === " " ? "&nbsp;" : text[i]; // Preserve spaces
		charSpan.style.animationDelay = `${i * 0.05}s`;
		paragraph.appendChild(charSpan);

		// Log each character to the console
		console.log(charSpan.textContent);
	}
}

