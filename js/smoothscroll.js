// http://codepen.io/chriscoyier/pen/dpBMVP/
// offset scrolltop
// http://stackoverflow.com/questions/3991002/jquery-scroll-to-offset-from-top-of-browser
 $(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 64
				}, 1000);
				return false;
			}
		}
  });
});
