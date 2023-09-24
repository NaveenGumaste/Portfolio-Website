const sections = document.querySelectorAll(".section");

// Helper function to check if an element is in the viewport
function isElementInViewport(el) {
	const rect = el.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

// Function to add animations when a section is in the viewport
function animateSections() {
	sections.forEach((section) => {
		if (isElementInViewport(section)) {
			section.style.opacity = "1";
			section.style.transform = "translateY(0)";
		}
	});
}

// Initial call to set visible sections on page load
animateSections();

// Event listener to trigger animations on scroll
window.addEventListener("scroll", animateSections);
