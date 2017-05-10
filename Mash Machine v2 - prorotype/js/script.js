
window.addEventListener('DOMContentLoaded', function() {
[...document.getElementsByTagName('button')].forEach(function(x) {
	x.addEventListener('click', function (e) {
	 var clickTarget = e.target.parentNode.getElementsByTagName('h1')[0];
		if (clickTarget.classList.contains('run-animation') === true) {
			clickTarget.classList.remove("run-animation");
			void clickTarget.offsetWidth;
			clickTarget.classList.add("run-animation");
		}
	});

})
});
