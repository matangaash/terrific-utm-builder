function generateUTM() {
	var output_field = document.getElementsByName('output')[0];
	output_field.value = "";
	var input = document.getElementsByName('array[]');
	var is_error = false;
	var first_error = "";
	var output = "";
 
	for (var i = 0; i < input.length; i++) {
		var a = input[i];
		if (a.value === "") {
			error(a.id, output_field);
			var is_error = true;
			if (first_error === "") {
				first_error = a.id;
			}
			document.getElementById(first_error).focus();
		} else {
			if (a.id === "url") {
				if (a.value.includes("http://") || a.value.includes("https://")) {
					if (a.value.slice(-1) === "/") {
						valid(a.id);
						output = output + a.value + "?";
					} else {
						valid(a.id);
						output = output + a.value + "/?";
					}
				} else {
					error(a.id, output_field);
					var is_error = true;
					if (first_error === "") {
						first_error = a.id;
					}
					document.getElementById(first_error).focus();
				}
			} else {
				valid(a.id);
				output = output + a.id + "=" + a.value + "&";
			}
		}
	}

	if (is_error === false) {
		output = output.slice(0, -1).replaceAll(" ", "%20");
		output_field.value = output;
		navigator.clipboard.writeText(output);
		document.querySelector('#generate-button').innerText = 'The UTM was generated and copied!';
	}
}

function valid(field_id) {
	document.getElementById(field_id).classList.remove("red-border");
	document.getElementById(field_id).classList.add("green-border");
}

function error(field_id, output_field) {
	document.getElementById(field_id).classList.add("red-border");
	document.getElementById(field_id).classList.remove("green-border");
	document.getElementById(field_id).focus();
	output_field.placeholder = 'Your UTM cannot be created until you fix all of the above!';
}

function getHelp() {
	document.querySelector('#help-popup').style.display = "block";
}

function closeHelp() {
	document.querySelector('#help-popup').style.display = "none";
}

function copyGoogleScript() {
	var google_script = document.querySelector('#google_script').textContent;
	navigator.clipboard.writeText(google_script);
	document.querySelector('#generate-button').innerText = 'The Google script was successfully copied!';
}