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