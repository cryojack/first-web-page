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
}

function changeGreen(){
	document.getElementById('para3').style.color = 'green';
}

/**************************/

function changeColor(r,g,b){
	document.getElementById('para4').style.color="rgb("+r+","+g+","+b+")";
}

/*****************************
Functions for the calculator
*****************************/

function showOutput(val){
	if(val>=0 && val <=9){
		document.getElementById('calcdisp').value += val;
	}
	else if(val == '/' || val == '*' || val == '+' || val == '-'){
		document.getElementById('calcdisp').value += val;
	}
	else if(val == '.'){
		document.getElementById('calcdisp').value += val;
	}
	else if(val == 'C')
	{
		document.getElementById('calcdisp').value="";
	}
	else if(val == '=')
	{
		var result = eval(document.getElementById('calcdisp').value);
		document.getElementById('calcdisp').value = result;
	}
}

/* Script for examples.html */

function finalValue(userVal,val_init,val_final){
	var result = document.getElementById('result_final');
	var userV = userVal;
	if (userV <= 0) {
		result.value = "INVALID INPUT";
	}
	else{
		if(val_init == 'bytes'){
			bytes(userV,val_final);
		}
		if(val_init == 'kilobytes'){
			kilobytes(userV,val_final);
		}
		if(val_init == 'megabytes'){
			megabytes(userV,val_final);
		}
		if(val_init == 'gigabytes'){
			gigabytes(userV,val_final);
		}
	}
}

function bytes(userVal,val_final){
	var result = document.getElementById('result_final');
	switch(val_final){
		case 'bytes':
		result.value = userVal;
		break;

		case 'kilobytes':
		result.value = userVal / 1024;
		break;

		case 'megabytes':
		result.value = (userVal / 1024) / 1024;
		break;

		case 'gigabytes':
		result.value = ((userVal / 1024) / 1024) / 1024;
		break;

		default:
		result.value = userVal;
		break;
	}
}

function kilobytes(userVal,val_final){
	var result = document.getElementById('result_final');
	switch(val_final){
		case 'bytes':
		result.value = userVal * 1024;
		break;

		case 'kilobytes':
		result.value = userVal;
		break;

		case 'megabytes':
		result.value = userVal / 1024;
		break;

		case 'gigabytes':
		result.value = (userVal / 1024) / 1024;
		break;

		default:
		result.value = userVal;
		break;
	}
}

function megabytes(userVal,val_final){
	var result = document.getElementById('result_final');
	switch(val_final){
		case 'bytes':
		result.value = (userVal * 1024) * 1024;
		break;

		case 'kilobytes':
		result.value = userVal * 1024;
		break;

		case 'megabytes':
		result.value = userVal;
		break;

		case 'gigabytes':
		result.value = userVal * 1024;
		break;

		default:
		result.value = userVal;
		break;
	}
}

function gigabytes(userVal,val_final){
	var result = document.getElementById('result_final');
	switch(val_final){
		case 'bytes':
		result.value = ((userVal * 1024) * 1024) * 1024;
		break;

		case 'kilobytes':
		result.value = (userVal * 1024) * 1024;
		break;

		case 'megabytes':
		result.value = (userVal * 1024);
		break;

		case 'gigabytes':
		result.value = userVal;
		break;

		default:
		result.value = userVal;
		break;
	}
}
/**************/

function randomColor(){
	var colorbox = document.getElementById('para5');
	var r,g,b;
	r = randNumber(0,256);
	g = randNumber(0,256);
	b = randNumber(0,256);
	colorbox.style.backgroundColor = "rgb("+r+","+g+","+b+")";
}

function randNumber(min,max){
	return Math.round(Math.random() * (max - min));
}

/****************/

document.getElementById('randomizer').addEventListener("click",randomNum());
function randomNum(){
}