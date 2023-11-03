// --------------- footer ---------------
let date = new Date().getFullYear();
document.querySelector(".tahun").innerHTML = date;

// --------------- anti cheats ---------------
document.addEventListener("contextmenu", e => {
	e.preventDefault();
}, false);

document.addEventListener("keydown", e => {
	if(e.ctrlKey === 16){
		return false;
		e.preventDefault();
	}
	console.log(e.keyCode);
	if (e.ctrlKey && e.key === 'u') {
		alert('ctrl+u');
		e.preventDefault();
	}
	else if (e.keyCode === 123) {
		alert('f12');
		e.preventDefault();
	}
	else if ( (e.ctrlKey && e.shiftKey && e.keyCode == 73) || (e.ctrlKey && e.shiftKey && e.keyCode == 74) ) {
		e.preventDefault();
	}
});