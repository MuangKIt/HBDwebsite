const audio = new Audio();
audio.src = "./HBD.mp3";

function openPaper() {
	document.getElementById("paper").style.right = '0%';
}

function closePaper() {
	document.getElementById("paper").style.right = '-30%';
}

function open_drawTon_overlay() {
	document.getElementById("drawTon_overlay").style.display = 'block';
	document.getElementById("drawTon_overlay").style.zIndex = '2';
	document.getElementById("bg").style.filter = "blur(2px)";
}

function close_drawTon_overlay() {
	document.getElementById("drawTon_overlay").style.display = 'none';
	document.getElementById("drawTon_overlay").style.zIndex = '0';
	document.getElementById("bg").style.filter = "blur(0px)";
}

function open_drawToey_overlay() {
	document.getElementById("drawToey_overlay").style.display = 'block';
	document.getElementById("drawToey_overlay").style.zIndex = '2';
	document.getElementById("bg").style.filter = "blur(2px)";
}

function close_drawToey_overlay() {
	document.getElementById("drawToey_overlay").style.display = 'none';
	document.getElementById("drawToey_overlay").style.zIndex = '0';
	document.getElementById("bg").style.filter = "blur(0px)";
}

function open_drawYuuna_overlay() {
	document.getElementById("drawYuuna_overlay").style.display = 'block';
	document.getElementById("drawYuuna_overlay").style.zIndex = '2';
	document.getElementById("bg").style.filter = "blur(2px)";
}

function close_drawYuuna_overlay() {
	document.getElementById("drawYuuna_overlay").style.display = 'none';
	document.getElementById("drawYuuna_overlay").style.zIndex = '0';
	document.getElementById("bg").style.filter = "blur(0px)";
}