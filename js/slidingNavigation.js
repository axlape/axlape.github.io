<!----- JQUERY FOR SLIDING NAVIGATION --->   
$(document).ready(function() {
  $('a[href*=#slide]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
       if ($target) {
         var targetOffset = $target.offset().top;

<!----- JQUERY CLICK FUNCTION REMOVE AND ADD CLASS "ACTIVE" + SCROLL TO THE #DIV   -->
         $(this).click(function() {
            $("#nav li a").removeClass("active");
            $(this).addClass('active');
           $('html, body').animate({scrollTop: targetOffset}, 1000);
           return false;
         });


<!----- JQUERY SCROLL FUNCTION REMOVE AND ADD CLASS "ACTIVE" -->
      }
    }
  });

	$('#slide2').waypoint(function(direction){
		$('#nav li a').removeClass('active');
		$('#headerslide2').addClass('active');
	},{
		offset:'10%'});

	$('#slide3').waypoint(function(direction){
		$('#nav li a').removeClass('active');
		$('#headerslide3').addClass('active');
	},{ offset:'10%'});	

	$('#slide4').waypoint(function(direction){
		$('#nav li a').removeClass('active');
		$('#headerslide4').addClass('active');
	},{offset:'10%'});


});