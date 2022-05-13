function changePlatform(platform) {
	document.getElementById('builder').src = "builders/" + platform + ".html";
	document.querySelectorAll('div.sidebar-item').forEach(function (element) {
		element.classList.remove("active-item")
	});
	document.getElementById(platform).classList.add("active-item");
}