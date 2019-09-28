$(function() {
	$('.the--link').click(function(){
		$('.ref--inp').addClass('bounceZ');
		setTimeout(function(){
			$('.ref--inp').removeClass('bounceZ');
		},600)
	})

	// datatable
	var heightT = 220;
    $('#bitInvest,#ethInvest,#hisWithdraw,#tokenHis').DataTable({
    	responsive: true,
	  	searching: false, 
	  	paging: false, 
	  	info: false,
	  	scrollY: heightT,
    	scroller: true,
    	order: [[2, 'asc']],
   		columnDefs: [{
	      	targets: "_all",
	      	orderable: false
   		}]
    });

    $('#dirRef,#statistic,#commission').DataTable({
    	responsive: true,
	  	searching: true, 
	  	paging: false, 
	  	info: false,
	  	scrollY: heightT,
    	scroller: true,
    	order: [[2, 'asc']],
   		columnDefs: [{
	      	targets: "_all",
	      	orderable: false
   		}]
    });
    // datatable

    /*Dropdown Menu*/
	$('.dropdown--z').click(function () {
	    $(this).attr('tabindex', 1).focus();
	    $(this).toggleClass('active');
	    $(this).find('.dropdown-menu').slideToggle(300);
	});
	$('.dropdown--z').focusout(function () {
	    $(this).removeClass('active');
	    $(this).find('.dropdown-menu').slideUp(300);
	});
	$('.dropdown--z .dropdown-menu li').click(function () {
	    $(this).parents('.dropdown--z').find('span').text($(this).text());
	    $(this).parents('.dropdown--z').find('input').attr('value', $(this).attr('id'));
	});
	/*End Dropdown Menu*/

	/* datetime picker */
	$('#picker').daterangepicker({
	    autoApply:true,
	    startDate:'+1d',
	    endDate:'+2d',
	    locale:{
	        format: 'DD-MM-YYYY'
	    }
	});
	/* datetime picker */

	// carousel
	$("#carousel").Cloud9Carousel( {
	  buttonLeft: $("#buttons > .left"),
	  buttonRight: $("#buttons > .right"),
	  autoPlay: 0,
	  bringToFront: true
	} );
	// carousel

	// loader
	window.addEventListener("load",function(){
	    const loader = $('.loader--bg');
	    $(loader).css('opacity', '0');
	    setTimeout(function(){
	      $(loader).css('display', 'none');
	    },1000)
	})
	// loader

});
