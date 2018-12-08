// function to change login icon color based on status arg (hover, click, or leave)
// necessary because the glyphicon needs to change color when section of navbar is highlighted, which it cannot do on its own with an event
function changeLoginIconColor(status) {
	if (status === 'hover') {
		$('#login-icon').css("color","black");
	}
	else if (status === 'click') {
		$('#login-icon').css("color","black");
	}
	else if (status === 'leave') {
		$('#login-icon').css("color","#A6B556");
	}
}