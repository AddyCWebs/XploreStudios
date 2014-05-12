var images = []

images[0] = "images/slider_1.png";
images[1] = "images/slider_2.png";
images[2] = "images/slider_3.png";

$(".home-j").css("width", $(window).width());

for(i in images) {
	$(".home-j:eq(" + String(i) + ")").css("background-image", "url('" + images[i] + "')")
}

var noimg = i + 1;

$(".slider-container").css("width", noimg * $(".home-j").width())
	
currentMargin = 0;

function doProgress() {
	$(".progress").animate({width: "100%"}, 5000, function() {
		toggleImage()
	})
}

function toggleImage() {
	currentMargin = currentMargin + $(window).width();
	if(currentMargin > 3 * $(".home-j").width())
		currentMargin = 0;
	$(".slider-container").animate({marginLeft: -currentMargin}, "fast", function() {
		$(".progress").css("width", "0%")
		doProgress();
	})
}

doProgress();