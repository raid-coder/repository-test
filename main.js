hello = document.querySelector("#hello");

hello.addEventListener("click", randomColor);

function randomColor() {
	hello.style.backgroundColor =
		"rgb(" +
		Math.round(Math.random() * 255) +
		", " +
		Math.round(Math.random() * 255) +
		", " +
		Math.round(Math.random() * 255) +
		")";
	console.log("hello");
}
