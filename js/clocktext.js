let textElem = document.getElementById("textclock");
let targetWidth = 0.6;  // Proporcje szerokości full screena
let curFontSize = 2
function updateClock() {
	let d = new Date();
	let s = "";
	s += (10 > d.getHours  () ? "0" : "") + d.getHours  () + ":";
	s += (10 > d.getMinutes() ? "0" : "") + d.getMinutes();
	textElem.textContent = s;
	setTimeout(updateClock, 60000 - d.getTime() % 60000 + 100);
}

function updateTextSize() {
	for (let i = 0; 3 > i; i++) {
		curFontSize *= targetWidth / (textElem.offsetWidth / textElem.parentNode.offsetWidth);
		textElem.style.fontSize = curFontSize + "px";
	}
}

updateClock();
updateTextSize();
window.addEventListener("resize", updateTextSize);

