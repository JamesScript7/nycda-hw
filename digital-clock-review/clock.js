function timer () {
	var date = new Date();

	var hours = document.getElementById("hours");
	var minutes = document.getElementById("minutes");
	var seconds = document.getElementById("seconds");
	var milliseconds = document.getElementById("milliseconds");
	var amPm = document.getElementById("amPm");

	var time = {
		"hours": date.getHours(),
		"minutes": date.getMinutes(),
		"seconds": date.getSeconds(),
		"milliseconds": date.getMilliseconds(),
		"amPm": "AM"
	};

	if (time.hours > 12) {
		time.hours -= 12;
		time.amPm = "PM";
	}

	if (time.hours < 10) {
		hours.innerHTML = "0" + time.hours;
	} else {
		hours.innerHTML = time.hours;
	}

	if()



















}