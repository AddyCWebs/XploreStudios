var images = []

images[0] = "https://img.youtube.com/vi/wfGu0GlyuPI/maxresdefault.jpg";
images[1] = "images/slider_2.png";
images[2] = "images/slider_3.png";

var slideDelay = 2000;

$(".home-j").css("width", $(window).width());

for(i in images) {
	$(".home-j:eq(" + String(i) + ")").css("background-image", "url('" + images[i] + "')")
}

var noimg = i + 1;

$(".slider-container").css("width", noimg * $(".home-j").width())
	
currentMargin = 0;

pauseSlider = 1;

function doProgress() {
	$(".progress").animate({width: "100%"}, slideDelay, function() {
		if (pauseSlider == 1) {
			currentSlide++;
			toggleImage(currentSlide);
		}
	})
}

currentSlide = 0;

function toggleImage() {
	if(currentSlide >= 3)
		currentSlide = 0;
	else if (currentSlide <= -1)
		currentSlide = 0;
	currentMargin = currentSlide * $(window).width();
	$(".slider-container").animate({marginLeft: -currentMargin}, "fast", function() {
		$(".progress").css("width", "0%")
		doProgress();
	})
}

doProgress();