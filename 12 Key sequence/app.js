const win = window;
const pressed =[]
const secret = "wesbos"
win.addEventListener("keyup", (e) => {
	pressed.push(e.key)
	pressed.splice(-secret.length -1, pressed.length - secret.length)
	if( pressed.join('').includes(secret) ){
		console.log("Works")
		cornify_add()
	}
})