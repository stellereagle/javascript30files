function randomGenerator () {
	let date = new Date()
	date = date.getMilliseconds()
	return chooseImage = Math.round(Math.random() * (date - 1) + 1);
}
const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
	let chooseImage = randomGenerator();
	panel.style.backgroundImage = "url('https://unsplash.it/1000?image="+chooseImage+"')"
});