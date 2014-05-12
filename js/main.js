var jumbotronHeightPercent = 0.75
var menuToggled = 0;

function size() {
	$(".home-j").css("height",($(window).height() - $("#navbar").height()) * jumbotronHeightPercent);
	$(".slider-container").css("height",($(window).height() - $("#navbar").height()) * jumbotronHeightPercent);
	$(".slider").css("height",($(window).height() - $("#navbar").height()) * jumbotronHeightPercent);
}

size();

function sidebarToggle() {
	if(menuToggled == 0) {
		$("#mainpage").animate({marginLeft: "250px"})
		$("footer").animate({left: "250px"})
		menuToggled = 1;
	} else {
		$("#mainpage").animate({marginLeft: "0px"})
		$("footer").animate({left: "0px"})
		menuToggled = 0;
	}
}

$(window).resize(function() {
	size();
})

$(document).keyup(function (e) {
	if (e.keyCode == 39) {
		sidebarToggle()
	}
});

