function randomGenerator () {
	let date = new Date()
	date = date.getMilliseconds()
	return chooseImage = Math.round(Math.random() * (date - 1) + 1);
}
function toggleClass () {
	this.classList.toggle("open")
}
function toggleActive (e) {
	if(e.propertyName.includes("flex")){
		this.classList.toggle("open-active")
	}
}
const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
	let chooseImage = randomGenerator()
	panel.style.backgroundImage = "url('https://unsplash.it/1000?image="+chooseImage+"')"
})
panels.forEach(panel => panel.addEventListener("click", toggleClass))
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive))