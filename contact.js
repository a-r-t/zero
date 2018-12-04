function sendMessage() {
	$('#messageToUser').text('');
	var isDataValid = true;
	var name = $("#contactName").val();
	var email = $("#contactEmail").val();
	var message = $("#contactMessage").val();
	if (name === "") {
		$('#messageToUser').text("Name field must be filled out!");
		isDataValid = false;
		$('#messageToUser').css("color","red");
	}
	else if (email === "") {
		$('#messageToUser').text("Email field must be filled out!");
		isDataValid = false;
		$('#messageToUser').css("color","red");
	}
	else if (!email.match("[A-Za-z0-9]{1,}@[A-Za-z0-9]{1,}\.com")) {
		$('#messageToUser').text("Email is not in a valid format!");
		isDataValid = false;
		$('#messageToUser').css("color","red");
	}
	else if (message === "") {
		$('#messageToUser').text("Message field must be filled out!");
		isDataValid = false;
		$('#messageToUser').css("color","red");
	}
	if (isDataValid) {
		$('#contactName').val('');
		$('#contactEmail').val('');
		$('#contactMessage').val('');
		$('#messageToUser').text("Message sent successfully!");
		$('#messageToUser').css("color","green");
	}
}