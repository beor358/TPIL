
var Slider = function() {
	this.slider = $('#slider');
	this.container = $('.slider__container');
	this.slides = this.container.find('.slider__slide').length;
	this.numb = this.numbOfPages();
	this.currentMargin = parseFloat(this.container.css('margin-left'));
	this.currentPage = 1;
}
Slider.prototype = {
	constructor: Slider,
	numbOfPages: function() {
		if(this.slides % 3 == 0) {
			return this.slides / 3;
		} else {
			return Math.floor(this.slides / 3) + 1;
		}
	},
	nextSlide: function() {
		this.currentPage++;
		if(this.currentPage <= 3){
			this.currentMargin -= 977.5;
		} else {
			this.currentPage = 1;
			this.currentMargin = 0;
		}
		this.container.animate({
			'margin-left' : this.currentMargin + 'px'
		});
		
	},
	prevSlide: function() {
		this.currentPage--;
		if(this.currentPage >= 1){
			this.currentMargin += 977.5;
		} else {
			this.currentPage = 3;
			this.currentMargin = -(this.numb-1) * 977.5;
		}
		this.container.animate({
			'margin-left' : this.currentMargin + 'px'
		});
		console.log(this.currentPage);
	}

}
$(document).ready(function() {
	
	sl = new Slider();
	console.log(sl.slides);
	$('.slider__button-next').click(function() {
		sl.nextSlide();
	})
	$('.slider__button-prev').click(function() {
		sl.prevSlide();
	})
	// console.log($('.slider__container').css('margin-left'));
})