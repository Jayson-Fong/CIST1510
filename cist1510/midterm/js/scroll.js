window.onscroll = function() {staticScroll()};

var header = document.getElementsByTagName("NAV")[0];
var static = header.offsetTop;

function staticScroll() {
	if (screen.width >= 1024) {
		if (window.pageYOffset > static) {
			header.classList.add("staticTop");
		} else {
			header.classList.remove("staticTop");
		}
	}
}