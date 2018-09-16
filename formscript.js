var srno = 0;

function addDetails(fname, lname,comment){
	srno = srno + 1;
	var time = new Date();
	var table = document.getElementById('userList');
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	cell1.innerHTML = srno;
	cell2.innerHTML = fname;
	cell3.innerHTML = lname;
	cell4.innerHTML = comment;
	cell5.innerHTML = time;
}