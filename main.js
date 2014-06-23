
function alertName() {
	var yourName = prompt('Whats your name?');
	if(yourName.length === 0){
		alert('YOU MUST ENTER SOMETHING!')
		console.log('Fail!');
		alertName();
	}else{
		alert('Hello ' + yourName);
		console.log('Successfull!');
	}
}

alertName();