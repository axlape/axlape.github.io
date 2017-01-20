jQuery(document).ready(function () {


// media query event handler
if (matchMedia) {
	var mq = window.matchMedia("(min-width: 736px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
}

// media query change
function WidthChange(mq) {

	var currentAttrValue;

	if (!mq.matches) {
		// window width is less than 736px

        // Hide Tabs
        jQuery('#tab1').hide().siblings().hide();

        jQuery('.tabs .tab-links li').removeClass('currenttab').siblings().removeClass('currenttab');        

        // Click-function
  		jQuery('.tabs .tab-links a').on('click', function (e) {

        currentAttrValue = jQuery(this).attr('href');

        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).toggle().siblings().hide();

        // Change/remove current tab to active tab
        jQuery(this).parent('li').toggleClass('currenttab').siblings().removeClass('currenttab');

        e.preventDefault();
    }); 		



	}

	else{
    jQuery('.tabs .tab-links a').on('click', function (e) {

        currentAttrValue = jQuery(this).attr('href');

        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).toggle().siblings().hide();

        // Change/remove current tab to active tab
        jQuery(this).parent('li').addClass('currenttab').siblings().removeClass('currenttab');

        e.preventDefault();
    });
	}}
});

