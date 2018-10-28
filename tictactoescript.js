
var currentplayer = 'X';
var cells = document.querySelectorAll('.gamebutton');

function gamestart(){
	for (var i = 0 ; i < cells.length ; i++)
	{
		console.log(cells[i].value);
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
	switchPlayer(currentplayer);
}