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

function incrementBy1(){
	var clicks = document.getElementById('incrementby1');
	var pa = document.getElementById('showClicks');
	for(var i = 1 ; i <= 10 ; i++)
	{
		incrementNow();
	}
}

function incrementNow()