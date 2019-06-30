
jQuery(document).ready(function($){
	var nativeWidth = 0;
	var nativeHeight = 0;

	$(".magnifierWrap").mousemove(function(e) {
		if(!nativeWidth && !nativeHeight) {
			var imgObject = new Image();
			imgObject.src = $(".smallImg").attr("src");
			nativeWidth = imgObject.width;
			nativeHeight = imgObject.height;
		}
		else {
			var magnifyOffset = $(this).offset();
			var mouseX = e.pageX - magnifyOffset.left;
			var mouseY = e.pageY - magnifyOffset.top;
			
			if(mouseX < $(this).width() && mouseY < $(this).height() && mouseX > 0 && mouseY > 0) {
				$(".magnifier").fadeIn(100);
			}
			else{
				$(".magnifier").fadeOut(100);
			}
			if($(".magnifier").is(":visible")){
				var smallImgX = Math.round(mouseX/$(".smallImg").width()*nativeWidth - $(".magnifier").width()/2)*-2;
				var smallImgY = Math.round(mouseY/$(".smallImg").height()*nativeHeight - $(".magnifier").height()/2)*-2;
				var bgp = smallImgX + "px " + smallImgY + "px";
				
				var largeImgX = mouseX - $(".magnifier").width()/2;
				var largeImgY = mouseY - $(".magnifier").height()/2;
				
				$(".magnifier").css({left: largeImgX, top: largeImgY, backgroundPosition: bgp});
			}
		}
	});
	

	var mainHeader = $('.cd-auto-hide-header'),
		secondaryNavigation = $('.cd-secondary-nav'),
		//this applies only if secondary nav is below intro section
		belowNavHeroContent = $('.process'),
		headerHeight = mainHeader.height();

	//set scrolling variables
	var scrolling = false,
		previousTop = 0,
		currentTop = 0,
		scrollDelta = 10,
		scrollOffset = 150;

	mainHeader.on('click', '.nav-trigger', function(event){
		// open primary navigation on mobile
		event.preventDefault();
		mainHeader.toggleClass('nav-open');
	});

	mainHeader.on('click', '.nav-links', function(event){
		// open primary navigation on mobile
		mainHeader.toggleClass('nav-open');
	 });

	$(window).on('scroll', function(){
		if( !scrolling ) {
			scrolling = true;
			(!window.requestAnimationFrame)
				? setTimeout(autoHideHeader, 250)
				: requestAnimationFrame(autoHideHeader);
		}
	});

	$(window).on('resize', function(){
		headerHeight = mainHeader.height();
	});

	function autoHideHeader() {
		var currentTop = $(window).scrollTop();

		( belowNavHeroContent.length > 0 )
			? checkStickyNavigation(currentTop) // secondary navigation below intro
			: checkSimpleNavigation(currentTop);

	   	previousTop = currentTop;
		scrolling = false;
	}

	function checkSimpleNavigation(currentTop) {
		//there's no secondary nav or secondary nav is below primary nav
	    if (previousTop - currentTop > scrollDelta) {
	    	//if scrolling up...
	    	mainHeader.removeClass('is-hidden');
	    } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
	    	//if scrolling down...
	    	mainHeader.addClass('is-hidden');
	    }
	}

	function checkStickyNavigation(currentTop) {
		//secondary nav below intro section - sticky secondary nav
		var secondaryNavOffsetTop = belowNavHeroContent.offset().top - secondaryNavigation.height() - mainHeader.height();

		if (previousTop >= currentTop ) {
	    	//if scrolling up...
	    	if( currentTop < secondaryNavOffsetTop ) {
	    		//secondary nav is not fixed
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.removeClass('fixed slide-up');
	    		belowNavHeroContent.removeClass('secondary-nav-fixed');
	    	} else if( previousTop - currentTop > scrollDelta ) {
	    		//secondary nav is fixed
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.removeClass('slide-up').addClass('fixed');
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	}

	    } else {
	    	//if scrolling down...
	 	  	if( currentTop > secondaryNavOffsetTop + scrollOffset ) {
	 	  		//hide primary nav
	    		mainHeader.addClass('is-hidden');
	    		secondaryNavigation.addClass('fixed slide-up');
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	} else if( currentTop > secondaryNavOffsetTop ) {
	    		//once the secondary nav is fixed, do not hide primary nav if you haven't scrolled more than scrollOffset
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.addClass('fixed').removeClass('slide-up');
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	}

	    }
	}


var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight',
    progress = document.querySelector('.progress'),
    scroll;

document.addEventListener('scroll', function() {
  scroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
  progress.style.setProperty('--scroll', scroll + '%');
});





$(function(){  // $(document).ready shorthand
	$('.monster').fadeIn('slow');
  });
  
  $(document).ready(function() {
	  
	  /* Every time the window is scrolled ... */
	  $(window).scroll( function(){
	  
		  /* Check the location of each desired element */
		  $('.hideme').each( function(i){
			  
			  var bottom_of_object = $(this).position().top + $(this).outerHeight();
			  var bottom_of_window = $(window).scrollTop() + $(window).height();
			  
			  /* If the object is completely visible in the window, fade it it */
			  if( bottom_of_window > bottom_of_object ){
				  
				  $(this).animate({'opacity':'1'},1500);
					  
			  }
			  
		  }); 
	  
	  });
	  
  }

  

  
  )})