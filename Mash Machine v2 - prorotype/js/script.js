<<<<<<< HEAD

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
=======
/*"use strict";
var element = document.getElementById("box");
var element2 = document.getElementById("box2");
element.addEventListener("click", function(e){
  e.preventDefault;
  element.classList.remove("run-animation");
  void element.offsetWidth;
  element.classList.add("run-animation");
}, false);*/

window.addEventListener('click', function (e) {
	var clickTarget = e.target;
	
	if (clickTarget.classList.contains('run-animation') === true) {
		clickTarget.classList.remove("run-animation");
		void clickTarget.offsetWidth;
		clickTarget.classList.add("run-animation");
	}
});
>>>>>>> master
