// document.addEventListener("DOMContentLoaded", () => {
// 	animateText(); // Call animateText function when DOM is fully loaded

// 	const cards = document.querySelectorAll(".card");

// 	cards.forEach((card) => {
// 		card.addEventListener("mouseenter", () => {
// 			card.querySelector(".face.face2").style.height = "60px";
// 		});

// 		card.addEventListener("mouseleave", () => {
// 			card.querySelector(".face.face2").style.height = "100%";
// 		});
// 	});
// });

// function animateText() {
// 	const paragraph = document.querySelector(".animated-text");
// 	const text = paragraph.innerText;
// 	paragraph.innerHTML = "";

// 	for (let i = 0; i < text.length; i++) {
// 		const charSpan = document.createElement("span");
// 		charSpan.textContent = text[i] === " " ? "&nbsp;" : text[i]; // Preserve spaces
// 		charSpan.style.animationDelay = `${i * 0.05}s`;
// 		paragraph.appendChild(charSpan);

// 		// Log each character to the console
// 		console.log(charSpan.textContent);
// 	}
// }

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

	// Add event listener for scrolling
	window.addEventListener("scroll", () => {
		const elements = document.querySelectorAll(".animate-on-scroll");

		elements.forEach((element) => {
			if (isElementInViewport(element)) {
				element.classList.add("animate");
			}
		});
	});
});

document.addEventListener("DOMContentLoaded", () => {
	animateText();

	const sections = document.querySelectorAll("section");

	sections.forEach((section) => {
		window.addEventListener("scroll", () => {
			const scrollPosition = window.scrollY;

			// Adjust the background position for a parallax effect
			section.style.backgroundPositionY = `${-scrollPosition * 0.3}px`;
		});
	});

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

document.addEventListener("DOMContentLoaded", () => {
	animateText();

	const sections = document.querySelectorAll("section");

	sections.forEach((section) => {
		window.addEventListener("scroll", () => {
			const scrollPosition = window.scrollY;

			// Adjust the background position for a parallax effect
			section.style.backgroundPositionY = `${-scrollPosition * 0.3}px`;
		});
	});

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
		charSpan.textContent = text[i] === " " ? "\u00A0" : text[i];
		charSpan.style.animationDelay = `${i * 0.02}s`;
		paragraph.appendChild(charSpan);
	}
}
