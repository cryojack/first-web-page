function changePara(){
	var pr = document.getElementById('para1');
	pr.style.fontSize = '50px';
}
function revert(){
	var pr = document.getElementById('para1');
	pr.style.fontSize = '22px';
}

/************/

function changeFont30(){
	var pr = document.getElementById('para2');
	pr.style.fontSize = '30px';
}

function changeFont40(){
	var pr = document.getElementById('para2');
	pr.style.fontSize = '40px';
}

function changeFont50(){
	var pr = document.getElementById('para2');
	pr.style.fontSize = '50px';
}

/******************/

function clickedBtn(){
	document.getElementById('displayinput').innerHTML = document.getElementById('myinput').value;
}

/******************/

var count = 0;
function incrementBy1(){
	count = count + 1;
	var showCount = document.getElementById('showClicks');
	showCount.innerHTML = "Clicked " + count + " times!";
}

/**********************/

function changeRed(){
	document.getElementById('para3').style.color = 'red';
}

function changeBlue(){
	document.getElementById('para3').style.color = 'blue';
}

function changeYellow(){
	document.getElementById('para3').style.color = 'yellow';
}

function changeGreen(){
	document.getElementById('para3').style.color = 'green';
}

/**************************/

function changeColor(r,g,b){
	document.getElementById('para4').style.color="rgb("+r+","+g+","+b+")";
}