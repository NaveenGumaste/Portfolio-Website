document.addEventListener("DOMContentLoaded", () => {
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
