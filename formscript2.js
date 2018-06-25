function changePara(){
	var pr = document.getElementById('para1');
	pr.style.fontSize = '50px';
}
function revert(){
	var pr = document.getElementById('para1');
	pr.style.fontSize = '22px';
}

/************/

function changeFont(vf){
	document.getElementById('para2').style.fontSize = vf+'px';
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
<<<<<<< HEAD
}

function changeGreen(){
	document.getElementById('para3').style.color = 'green';
}

=======
}

function changeGreen(){
	document.getElementById('para3').style.color = 'green';
}

>>>>>>> 4edc3a6a60dcb48355ad1e9a8bad7e2e55775127
/**************************/

function changeColor(r,g,b){
	document.getElementById('para4').style.color="rgb("+r+","+g+","+b+")";
}