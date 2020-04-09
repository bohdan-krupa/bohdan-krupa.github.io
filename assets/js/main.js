let yearsOfStuding = new Date().getFullYear() - new Date(2016, 04, 15).getFullYear()
$('#years-of-studing').html(yearsOfStuding)

$('a.page-scroll').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash)
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']')
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top - 40
			}, 900)
			return false
		}
	}
})

$(document).scroll(() => {
	if ($(document).scrollTop() >= $('header').height()) {
		$('#nav').addClass('affix')
		$('#about').css('padding-top', 100 + $('#nav').height() + 'px')
	} else {
		$('#nav').removeClass('affix')
		$('#about').css('padding-top', '100px')
	}
})
	
// CounterUp
$(document).ready(function( $ ) {
	if ($("span.count").length > 0) {	
		$('span.count').counterUp({
			delay: 10, // the delay time in ms
			time: 1500 // the speed time in ms
		})
	}
})