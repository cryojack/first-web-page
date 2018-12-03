
var currentplayer = 'X';

function gamestart(){
	var cells = document.querySelectorAll('.gamebutton');
	for(var i = 0 ; i < cells.length ; i++)
	{
		cells[i].value = '';
	}
}

function switchPlayer(){
	if(currentplayer == 'X'){
		currentplayer = 'O';
	}
	else{
		currentplayer = 'X';
	}
}

function addPiece(val){
	if(val.value == ''){
		val.value = currentplayer;
	}
	//checkWin();
	switchPlayer(currentplayer);
}

function checkWin(){
	
}