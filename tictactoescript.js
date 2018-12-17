
var currentplayer = 'X';
var winconditions = [
			[0,1,2],
			[3,4,5],
			[6,7,8],
			[0,3,6],
			[1,4,7],
			[2,5,8],
			[0,4,8],
			[2,4,6]
				]

var board = [];
var places = 9;


function gamestart(){
	var cells = document.querySelectorAll('.gamebutton');
	places = 9;
	for(var i = 0 ; i < cells.length ; i++)
	{
		cells[i].value = '';
	}
}

function putValues(){
	var cells = document.querySelectorAll('.gamebutton');
	for(var i = 0 ; i < cells.length ; i++)
	{
		board[i] = cells[i].value;
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
	console.log("empty squares = ",places);
	putValues();
	checkWin(board,currentplayer);
	places--;
	switchPlayer(currentplayer);
}

function checkWin(board,player){
	if(places != 0)
	{
		for(var i = 0 ; i < winconditions.length ; i++)
		{
			var sum = 0;
			var wins = winconditions[i];
			for(var j = 0 ; j < wins.length ; j++)
			{
				if(board[wins[j]] == player){
					sum++;
				}
			}
			if(sum == 3){
				alert("Player " + player + " has won!!");
				gamestart();
			}
		}
	}
	else{
		alert("It's a tie");
		gamestart();
	}
}