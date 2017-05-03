(function() {
function Slider(el) {

	this.el = document.querySelector(el);
	this.container = this.el.querySelector(".slider__container");
	this.slides = this.el.querySelectorAll(".slider__slide");
	this.prev = this.el.querySelector(".slider__button-prev");
	this.next = this.el.querySelector(".slider__button-next");
	this.numb = this.numbOfPages();
	this.current = 0;
	this.actions();


};

Slider.prototype = {

	constructor: Slider,
	numbOfPages: function() {
		if(this.slides.length % 3 == 0) {
			return this.slides.length / 3;
		} else {
			return Math.floor(this.slides.length / 3) + 1;
		}
	},
	actions: function() {
		var self = this;
		self.next.addEventListener("click", function () {
			self.current++;
			if(self.current < self.numb) {
				self.container.style.marginLeft = parseFloat(self.container.style.marginLeft) - 977.5 + "px";
			} else {
				self.container.style.marginLeft = "0px";
				self.current = 0;
			}
		});
		self.prev.addEventListener("click", function () {
			self.current--;
			if(self.current >= 0) {
				self.container.style.marginLeft = parseFloat(self.container.style.marginLeft) + 977.5 + "px";
			} else {
				self.container.style.marginLeft = -(self.numb - 1)*977.5 + "px";
				self.current = self.numb - 1;
			}
		});
	}

};

document.addEventListener( "DOMContentLoaded", function() {
	var sl = new Slider("#slider");

});

})();

