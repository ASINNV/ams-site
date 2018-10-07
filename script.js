if (document.getElementById('resources-page')) {
	var passForm = document.getElementById('pass-form');
	var password = document.getElementById('password');
	var errorMsg = document.createElement('h3');
	errorMsg.className = 'error';
	errorMsg.innerHTML = 'Incorrect Password';
}

var $realmBox = $('.realm-box');
var $partner = $('.partner');
// var $hiddenDesc = $('.hidden-desc');

var copyright = document.getElementById('dynamic-copyright');

var resourcesContainer = document.getElementById('resources-container');
var $enter_button = $('.enter-button');
var $white_overlay = $('.white-overlay');
var $landing_intro = $('.landing-intro');
var $next_button_brand_sub = $('.next-button, .brand-sub, .home-banners');
var $all_animation_elements = $('a, p, h1, div');
var $html_body = $('html, body');
var $menu_button = $('.menu-button');
var $menu = $('.menu');
var $click_catcher = $('.clickCatcher');
var $arrow_and_name = $('.arrow-and-text, .name');
var $body = $('body');
var $member = $('.member');

var $id_one_six = $('#0, #1, #2, #3, #4, #5, #6, #7, .banner-to-first, .bio, .other-content-divider');
var $id_one_five = $('#0, #1, #2, #3, #4, #5, #6, #7, .banner-to-first, .bio,  .other-content-divider');
var $id_one_four = $('#0, #1, #2, #3, #4, .home-section, .intro, .other-content-divider');
var $id_10 = $('#10');
var $id_9 = $('#9');
var $id_8 = $('#8');
var $id_7 = $('#7');
var $id_6 = $('#6');
var $id_5 = $('#5');
var $id_4 = $('#4');
var $id_3 = $('#3');
var $id_2 = $('#2');
var $id_1 = $('#1');
var $nav_bar = $('.nav-bar');

// for height of indicator line
var $welcome_logo_box = $('.welcome-logo-box');
var $brand_head = $('.brand-head');
var $stand_in = $('.stand-in');
var $home_line = $('.home-line');
// var $left_nav = $('.left-nav');
var $studios = $('.studios');
var $line = $('.line');
var $content_indicator_backdrop = $('.content-indicator-backdrop');
var $animation_elements = $('.animation-element');
var $window = $(window);
var $document = $(document);

var partOne, partTwo;

// the point at which indicator line appears on screen
var origin_top = $window.scrollTop() + $nav_bar.outerHeight() + $content_indicator_backdrop.outerHeight() + $welcome_logo_box.outerHeight(true) + $brand_head.outerHeight() + 7.5;

// page indicator JS
// page indicator JS

	var nav_height = $nav_bar.outerHeight();
	var height_before_animation = nav_height + $welcome_logo_box.outerHeight(true) + $brand_head.height() + 7.5;
	var home_line_height_before_animation = $welcome_logo_box.outerHeight(true) + $brand_head.height() + 7.5 - $content_indicator_backdrop.outerHeight();

function page_indicator() {
		var animation_area = ($document.outerHeight() + nav_height + $content_indicator_backdrop.outerHeight() - $window.outerHeight() - height_before_animation);

		var scroll_position = ($window.scrollTop() + nav_height + $content_indicator_backdrop.outerHeight() - height_before_animation);
		var scroll_from_top = $window.scrollTop() + nav_height;
		var home_line_scroll_from_top = $window.scrollTop();
		var numerator = (animation_area - scroll_position);
		var percentage = (numerator / animation_area);
		// var indicator_offset_top;
		// function indicator_width(which) {
		// 	if (which.length) {
		// 		indicator_offset_top = which.offset().top;
		// 	}
		// 	return ( 100 - ( 100 * ( (animation_area - ( indicator_offset_top + $nav_bar.outerHeight() - height_before_animation ) )/animation_area ) ) - 2 + '%' );
		// }
		if (scroll_from_top >= height_before_animation) {

			$content_indicator_backdrop.fadeIn(500);
			// if (($('.all-content').width() !== 1024) && (window.matchMedia('(orientation: landscape)').matches)) {
			// 	$('.quiver').fadeIn(500);
			// }

			$stand_in.css( 'width', (100 - (percentage*100) + '%'));

		} else {

			$stand_in.css('width', '0');

			$content_indicator_backdrop.fadeOut(200);
			// if (($('.all-content').width() !== 1024) && (window.matchMedia('(orientation: landscape)').matches)) {
			// 	$('.quiver').fadeOut(500);
			// }

			var home_line_percentage = ((home_line_height_before_animation - home_line_scroll_from_top)/home_line_height_before_animation);
			$home_line.css('width', (home_line_percentage*100 + '%'));

		}
}

// page indicator JS
// page indicator JS

function check_if_line_touches() {
	var nav_height = $nav_bar.outerHeight();
	var nav_top_position = $window.scrollTop();
	var nav_bottom_position = (nav_top_position + nav_height);
	var $element = $home_line;
	var element_top_position = $element.scrollTop();

	if (element_top_position <= nav_bottom_position) {
		$stand_in.show();
	} else if (element_top_position <= origin_top) {
		$stand_in.hide();
	}
}

function swapForMobile() {
    if (!window.matchMedia( "(min-width: 1024px)" ).matches) {
        // var images = document.querySelectorAll('.company-image');
		$(".company-image").css("display", "inline-block").css("margin-bottom", "20px");

        for (var i = 0; i < 4; i++) {
			var className = 'image-holder-' + i;
			var image_holder = document.getElementById(className);

			image_holder.removeChild(image_holder.firstElementChild);
            // images[i].style.display = 'inline-block';
            // images[i].style.marginBottom = '20px';
        }

        // for (var i = 0; i < iframe_videos.length; i++) {
        //     var current_image_holder = document.getElementById('image-holder-' + i);
        //     // image_holder.replaceChild(replacement, image_holder.firstElementChild);
        // }

        // iframe_videos.forEach(function(video) {
        //     document.replaceChild(replacement, video);
        // });
    }
}

function onlyOnPortfolio() {
	if ($body.hasClass('portfolio-body')) {
		swapForMobile();
	}
}

function check_if_in_view() {
	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = (window_top_position + window_height);

	$.each($animation_elements, function() {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = (element_top_position + element_height);

		// check to see if this current container is within viewport
		if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
			$element.addClass('in-view');
			// if ($element.hasClass('website-frame') && $element.context.src.indexOf('autoplay=0') !== -1) {
				// console.log('Full: ' + $element.context.src);

				// var partOne = $element.context.src.substr(0, $element.context.src.indexOf('autoplay=0'));
				// console.log('Part One: ' + partOne);
				// var partTwo = $element.context.src.substring($element.context.src.indexOf('autoplay=0') + 'autoplay=0'.length, $element.context.src.length);
				// console.log('Part Two: ' + partTwo);
				// $element.context.src = partOne + 'autoplay=1' + partTwo;
				// console.log('$element.context.src = ' + $element.context.src);
			// }
		}
		// else if ($element.hasClass('website-frame') && $element.context.src.indexOf('autoplay=1') !== -1) {


			// console.log('Full: ' + $element.context.src);

			// var partOne = $element.context.src.substr(0, $element.context.src.indexOf('autoplay=1'));
			// console.log('Part One: ' + partOne);
			// var partTwo = $element.context.src.substring($element.context.src.indexOf('autoplay=1') + 'autoplay=1'.length, $element.context.src.length);
			// console.log('Part Two: ' + partTwo);
			// $element.context.src = partOne + 'autoplay=0' + partTwo;
			// console.log('$element.context.src = ' + $element.context.src);

		// 	$element.removeClass('in-view');
		// }

		if ((element_bottom_position <= window_bottom_position) && (element_top_position >= window_top_position) && $element.hasClass('website-frame') && $element.context.src.indexOf('autoplay=0') !== -1) {
            partOne = $element.context.src.substr(0, $element.context.src.indexOf('autoplay=0'));
            // console.log('Part One: ' + partOne);
            partTwo = $element.context.src.substring($element.context.src.indexOf('autoplay=0') + 'autoplay=0'.length, $element.context.src.length);
            // console.log('Part Two: ' + partTwo);
            $element.context.src = partOne + 'autoplay=1' + partTwo;
        } else if ((element_bottom_position < window_top_position || element_top_position > window_bottom_position || element_top_position < window_top_position || element_bottom_position > window_bottom_position) && $element.hasClass('website-frame') && ($element.context.src.indexOf('autoplay=1') !== -1)) {
            partOne = $element.context.src.substr(0, $element.context.src.indexOf('autoplay=1'));
            // console.log('Part One: ' + partOne);
            partTwo = $element.context.src.substring($element.context.src.indexOf('autoplay=1') + 'autoplay=1'.length, $element.context.src.length);
            // console.log('Part Two: ' + partTwo);
            $element.context.src = partOne + 'autoplay=0' + partTwo;
        }
	});



	if ($body.hasClass('home-page')) {

		check_if_line_touches();
		page_indicator();


	}



	}



// function check_if_line_touches() {
// 	var nav_height = $nav_bar.outerHeight();
// 	// var window_height = $window.height();
// 	var nav_top_position = $window.scrollTop();
// 	var nav_bottom_position = (nav_top_position + nav_height);

// 	$.each($animation_line_elements, function() {
// 		var $element = $(this);
// 		// var element_height = $element.outerHeight();
// 		var element_top_position = $element.offset().top;
// 		// var element_bottom_position = (element_top_position + element_height);

// 		// check to see if this current container is within viewport

// 		if (element_top_position <= nav_bottom_position) {
// 			// $element.addClass('affix-me');
// 			$stand_in.show();
// 		} else if (element_top_position <= origin_top) {
// 			$stand_in.hide();
// 		}
// 	});
// }



var leaveCounter = 0;

function leadIn() {
	setTimeout(function() {
		(function() {
			var altName = $( ".alt-name" );
			var nameIndex = -1;
			function showNextName() {
				++leaveCounter;
				if (leaveCounter === 7) {
					altName.eq((nameIndex % altName.length) + 1).fadeIn(300);
					return 0;
				}
				++nameIndex;
				altName.eq(nameIndex % altName.length)
					.fadeIn(250)
					.delay(250)
					.fadeOut(250, showNextName);
			}

			showNextName();


		})();

		setTimeout(function() {
				// $( ".alt-name" ).css("transform", "translateX(-56%)");
			// $and_more.css("transform", right);
			// $studios.css("transform", left);
			$studios.animate({opacity: "1"}, 1200);
		}, 5000);
		$line.animate({width: "100%"}, 4600, function() {
			// $( ".line" ).css("transition", "all 1.5s linear");
			// $( ".line" ).css("background", "#E4E4E4");
			setTimeout(function() {
				$line.addClass('line-index-motion');
				$('.studios').addClass('down-move');
				// $('.and-more').addClass('spacing');
				setTimeout(function() {
					$('.studios').addClass('stalled-spacing');

					// shows enter button
					if ($enter_button.css('display') !== 'inline-block') {
						$enter_button.fadeIn(300);
					}

				}, 400);
			}, 400);
		});
	}, 400);
}

function checkPass(e) {
	e.preventDefault();

	if (password.value === 'ArenaCove1234') {
		this.form.parentNode.style.display = 'none';
		resourcesContainer.style.display = 'block';
	} else {
		this.form.parentNode.appendChild(errorMsg);
	}
}
if (document.getElementById('resources-page')) {
	passForm.elements['pass-button'].addEventListener('click', checkPass);

}
function getCopyright() {
	var date = new Date();
	copyright.innerText = date.getFullYear() + " " + copyright.innerText;
}



$(document).ready(function() {
	getCopyright();
	onlyOnPortfolio();
	$window.on('scroll', check_if_in_view);
	$window.on('resize', check_if_in_view);
	// $window.on('scroll', check_if_line_touches);
	// $window.on('scroll resize', check_if_line_touches);
	// $window.on('scroll resize', page_indicator).trigger('scroll');
	$window.trigger('scroll');
	// if (window.matchMedia("(orientation: landscape)").matches) {
	// 	$window.trigger('resize');
	// }

  // Snow Effect
	// canvas init
	// var canvas = document.getElementById("canvas");
	// var ctx = canvas.getContext("2d");
  //
	// //canvas dimensions
	// var W = window.innerWidth;
	// var H = window.innerHeight;
	// canvas.width = W;
	// canvas.height = H;
  //
	// //snowflake particles
	// var mp = 25; //max particles
	// var particles = [];
	// for(var i = 0; i < mp; i++)
	// {
	// 	particles.push({
	// 		x: Math.random()*W, //x-coordinate
	// 		y: Math.random()*H, //y-coordinate
	// 		r: Math.random()*4+1, //radius
	// 		d: Math.random()*mp //density
	// 	});
	// }
  //
	// //Lets draw the flakes
	// function draw()
	// {
	// 	ctx.clearRect(0, 0, W, H);
  //
	// 	ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
	// 	ctx.beginPath();
	// 	for(var i = 0; i < mp; i++)
	// 	{
	// 		var p = particles[i];
	// 		ctx.moveTo(p.x, p.y);
	// 		ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
	// 	}
	// 	ctx.fill();
	// 	update();
	// }
  //
	// //Function to move the snowflakes
	// //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
	// var angle = 0;
	// function update()
	// {
	// 	angle += 0.01;
	// 	for(var i = 0; i < mp; i++)
	// 	{
	// 		var p = particles[i];
	// 		//Updating X and Y coordinates
	// 		//We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
	// 		//Every particle has its own density which can be used to make the downward movement different for each flake
	// 		//Lets make it more random by adding in the radius
	// 		p.y += Math.cos(angle+p.d) + 1 + p.r/2;
	// 		p.x += Math.sin(angle) * 2;
  //
	// 		//Sending flakes back from the top when it exits
	// 		//Lets make it a bit more organic and let flakes enter from the left and right also.
	// 		if(p.x > W+5 || p.x < -5 || p.y > H)
	// 		{
	// 			if(i%3 > 0) //66.67% of the flakes
	// 			{
	// 				particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
	// 			}
	// 			else
	// 			{
	// 				//If the flake is exiting from the right
	// 				if(Math.sin(angle) > 0)
	// 				{
	// 					//Enter from the left
	// 					particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
	// 				}
	// 				else
	// 				{
	// 					//Enter from the right
	// 					particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
	// 				}
	// 			}
	// 		}
	// 	}
	// }
  //
	// //animation loop
	// setInterval(draw, 33);



	// var videoThing = document.getElementById('ytplayer');
	// console.log(videoThing.src);
	// console.log('Yup: ' + videoThing.src.indexOf('autoplay=0'));
	// var partOne = videoThing.src.substr(0, videoThing.src.indexOf('autoplay=1'));
	// var partTwo = videoThing.src.substring(videoThing.src.indexOf('autoplay=1') + 'autoplay=1'.length, videoThing.src.length);
	// console.log(partOne + ', ' + partTwo);




    $realmBox.hover(function() {
        if ($body.hasClass('team-body') && window.matchMedia( "(min-width: 1024px)" ).matches) {
            if ($(this).hasClass('web')) {
                $(this).parents('.realms-holder').children('.web-desc').slideToggle(300);
            } else if ($(this).hasClass('marketing')) {
                $(this).parents('.realms-holder').children('.marketing-desc').slideToggle(300);
            } else if ($(this).hasClass('graphics')) {
                $(this).parents('.realms-holder').children('.graphics-desc').slideToggle(300);
            } else if ($(this).hasClass('repair')) {
                $(this).parents('.realms-holder').children('.repair-desc').slideToggle(300);
            } else if ($(this).hasClass('systems')) {
                $(this).parents('.realms-holder').children('.systems-desc').slideToggle(300);
            } else if ($(this).hasClass('support')) {
                $(this).parents('.realms-holder').children('.support-desc').slideToggle(300);
            } else if ($(this).hasClass('audio')) {
                $(this).parents('.realms-holder').children('.audio-desc').slideToggle(300);
            } else if ($(this).hasClass('video')) {
                $(this).parents('.realms-holder').children('.video-desc').slideToggle(300);
            } else if ($(this).hasClass('animation')) {
                $(this).parents('.realms-holder').children('.animation-desc').slideToggle(300);
            } else if ($(this).hasClass('products')) {
                $(this).parents('.realms-holder').children('.products-desc').slideToggle(300);
            }
        } else if ($body.hasClass('services-body') && window.matchMedia( "(min-width: 1024px)" ).matches) {
            if ($(this).hasClass('zean')) {
                $(this).parents('.realms-holder').children('.zean-desc').slideToggle(300);
            } else if ($(this).hasClass('nick')) {
                $(this).parents('.realms-holder').children('.nick-desc').slideToggle(300);
            } else if ($(this).hasClass('adrian')) {
                $(this).parents('.realms-holder').children('.adrian-desc').slideToggle(300);
            } else if ($(this).hasClass('johnny')) {
                $(this).parents('.realms-holder').children('.johnny-desc').slideToggle(300);
            } else if ($(this).hasClass('jono')) {
                $(this).parents('.realms-holder').children('.jono-desc').slideToggle(300);
            } else if ($(this).hasClass('ben')) {
				$(this).parents('.realms-holder').children('.ben-desc').slideToggle(300);
			} else if ($(this).hasClass('drew')) {
                $(this).parents('.realms-holder').children('.drew-desc').slideToggle(300);
            } else if ($(this).hasClass('dylan')) {
                $(this).parents('.realms-holder').children('.dylan-desc').slideToggle(300);
            }
        }

    });
	// $partner.hover(function() {
	// 	if ($body.hasClass('contact-body') && window.matchMedia( "(min-width: 1024px)" ).matches) {
	// 		if ($(this).hasClass('stillman')) {
	// 			$(this).parent().parent().children('.stillman-desc').slideToggle(300);
	// 		} else if ($(this).hasClass('hush')) {
	// 			$(this).parent().parent().children('.hush-desc').slideToggle(300);
	// 		} else if ($(this).hasClass('elk')) {
	// 			$(this).parent().parent().children('.elk-desc').slideToggle(300);
	// 		} else if ($(this).hasClass('pa')) {
	// 			$(this).parent().parent().children('.pa-desc').slideToggle(300);
	// 		} else if ($(this).hasClass('atc')) {
	// 			$(this).parent().parent().children('.atc-desc').slideToggle(300);
	// 		}
	// 	}
	// });


	$('.interstate').click(function(e) {
		e.stopPropagation();
	});
	setTimeout(function() {
		$( ".home-line-inner-case" ).animate({width: "100%"}, 600);
	}, 300);

	$('.white-overlay-home').fadeOut(750);
	if ($body.hasClass('landing')) {
		leadIn();
	}
	if ($('.all-content').width() === 1024) {
		$('.service').removeClass('animation-element');
	}

	// if (window.matchMedia( "(min-width: 1024px)" ).matches) {
	// 	leadIn("-webkit-linear-gradient( #fff 93%, transparent");
	//
	//
	// } else if (window.matchMedia( "(max-width: 1023px) and (min-width: 466px)" ).matches) {
	// 	leadIn("-webkit-linear-gradient( left, #fff 93%, transparent");
	//
	// } else if (window.matchMedia( "(max-width: 465px) and (min-width: 414px)" ).matches) {
	// 	leadIn("-webkit-linear-gradient( left, #fff 94%, transparent");
	//
	// } else {
	// 	leadIn("-webkit-linear-gradient( left, #fff 94%, transparent");
	//
	// }

	// $window.on('scroll', function() {
	// 		nav_height = $(".nav-bar").outerHeight();
	// 		height_before_animation = nav_height + $(".welcome-logo-box").outerHeight(true) + $(".brand-head").outerHeight() + 7.5;
	// 		page_indicator();
	//
	// });
	// $window.on('resize', function() {
	// 		nav_height = $(".nav-bar").outerHeight();
	// 		height_before_animation = nav_height + $(".welcome-logo-box").outerHeight(true) + $(".brand-head").outerHeight() + 7.5;
	// 		page_indicator();
	//
	// });

// $tap_disappear.click(function() {
// 	$tap_anywhere_wrapper.hide('slow');
// });

	$enter_button.click(function(e) {
		e.preventDefault();
		// $enter_button.addClass('exit-button');
		// setTimeout(function() {
			$white_overlay.fadeIn(750);
			$landing_intro.addClass('landing-outro');
		// }, 100);

		// setTimeout(function() {
		// 	$(".enter-button").css("transition", "opacity 250ms ease").css("opacity", "0");
		// }, 25);
		setTimeout( function() {
				document.location.assign("/home.html");
		}, 650);
	});



	$next_button_brand_sub.click(function() {
		if ($(this).hasClass('services-next')) {
			$('.services-containing-container').find($all_animation_elements).removeClass('animation-element');
		} else if ($(this).hasClass('team-next')) {
			$('.team-content, .services-containing-container').find($all_animation_elements).removeClass('animation-element');
		} else if ($(this).hasClass('contact-next')) {
			$all_animation_elements.removeClass('animation-element');
		}
		// $all_animation_elements.removeClass('animation-element');
		$html_body.animate({ scrollTop: ($( $(this).attr('href') ).offset().top) }, 'slow');
		return false;
	});
	// $('#back').click(function() {
	// 	$html_body.animate({ scrollTop: ($( $(this).attr('href') ).offset().top) }, 'slow');
	// });

	$menu_button.click(function() {
		if ($menu.css('display') === 'block') {
			$menu.slideUp( 200 );
			$click_catcher.hide();
		} else {
			$menu.slideDown( 200 );
			$click_catcher.show();
		}

	});
	$click_catcher.click(function() {
		$menu.slideUp( 500 );
		$click_catcher.hide();
	});

	$arrow_and_name.click(function() {
		$html_body.animate({ scrollTop: 0 }, "slow");
		return false;
	});




	if ($body.hasClass("services-body")) {

	$id_one_six.click(function() {

		if (($window.scrollTop() >= ($id_10.offset().top - 5))) {
			$html_body.animate({ scrollTop: $document.height() }, 1200);
		}
		else if (($window.scrollTop() >= ($id_9.offset().top - 5)) && ($window.scrollTop() < $id_10.offset().top)) {
			$html_body.animate({ scrollTop: $id_10.offset().top }, 600);

		}
		else if (($window.scrollTop() >= ($id_8.offset().top - 5)) && ($window.scrollTop() < $id_9.offset().top)) {
			$html_body.animate({ scrollTop: $id_9.offset().top }, 600);

		}
		else if (($window.scrollTop() >= ($id_7.offset().top - 5)) && ($window.scrollTop() < $id_8.offset().top)) {
			$html_body.animate({ scrollTop: $id_8.offset().top }, 600);

		}
		else if (($window.scrollTop() >= ($id_6.offset().top - 5)) && ($window.scrollTop() < $id_7.offset().top)) {
			$html_body.animate({ scrollTop: $id_7.offset().top }, 600);

		}
		else if (($window.scrollTop() >= ($id_5.offset().top - 5)) && ($window.scrollTop() < $id_6.offset().top)) {
			$html_body.animate({ scrollTop: $id_6.offset().top }, 600);

		}
		else if (($window.scrollTop() >= ($id_4.offset().top - 5)) && ($window.scrollTop() < $id_5.offset().top)) {
			$html_body.animate({ scrollTop: $id_5.offset().top }, 600);

		}
		else if (($window.scrollTop() >= ($id_3.offset().top - 5)) && ($window.scrollTop() < $id_4.offset().top)) {
			$html_body.animate({ scrollTop: $id_4.offset().top }, 600);

		}
		else if (($window.scrollTop() >= ($id_2.offset().top - 5)) && ($window.scrollTop() < $id_3.offset().top)) {
			$html_body.animate({ scrollTop: $id_3.offset().top }, 600);

		} else if (($window.scrollTop() >= ($id_1.offset().top - 5)) && ($window.scrollTop() < $id_2.offset().top)) {
			$html_body.animate({ scrollTop: $id_2.offset().top }, 600);

		} else if ($window.scrollTop() < ($id_1.offset().top) - 5) {
			$html_body.animate({ scrollTop: $id_1.offset().top }, 600);

		}
	});
	// $left_nav.click(function() {
	//
	// 	if ($window.scrollTop() > ($id_6.offset().top)) {
	// 		$html_body.animate({ scrollTop: $id_6.offset().top }, 600);
	// 	}
	// 	else if (($window.scrollTop() > ($id_5.offset().top)) && ($window.scrollTop() <= $id_6.offset().top)) {
	// 		$html_body.animate({ scrollTop: $id_5.offset().top }, 600);
	//
	// 	}
	// 	else if (($window.scrollTop() > ($id_4.offset().top)) && ($window.scrollTop() <= $id_5.offset().top)) {
	// 		$html_body.animate({ scrollTop: $id_4.offset().top }, 600);
	//
	// 	}
	// 	else if (($window.scrollTop() > ($id_3.offset().top)) && ($window.scrollTop() <= $id_4.offset().top)) {
	// 		$html_body.animate({ scrollTop: $id_3.offset().top }, 600);
	//
	// 	}
	// 	else if (($window.scrollTop() > ($id_2.offset().top)) && ($window.scrollTop() <= $id_3.offset().top)) {
	// 		$html_body.animate({ scrollTop: $id_2.offset().top }, 600);
	//
	// 	} else if (($window.scrollTop() > ($id_1.offset().top)) && ($window.scrollTop() <= $id_2.offset().top)) {
	// 		$html_body.animate({ scrollTop: $id_1.offset().top }, 600);
	//
	// 	} else if (($window.scrollTop() > 0) && ($window.scrollTop() <= ($id_1.offset().top))) {
	// 		$html_body.animate({ scrollTop: 0 }, 600);
	//
	// 	}
	// });
} else if ($body.hasClass('team-body')) {

	$id_one_five.click(function() {
		if ($window.scrollTop() >= $id_6.offset().top - 5) {
			$html_body.animate({ scrollTop: $document.height() }, 1200);

		} else if (($window.scrollTop() >= ($id_5.offset().top - 5)) && ($window.scrollTop() < $id_6.offset().top)) {
			$html_body.animate({ scrollTop: $id_6.offset().top }, 600);

		} else if (($window.scrollTop() >= ($id_4.offset().top - 5)) && ($window.scrollTop() < $id_5.offset().top)) {
			$html_body.animate({ scrollTop: $id_5.offset().top }, 600);

		} else if (($window.scrollTop() >= ($id_3.offset().top - 5)) && ($window.scrollTop() < $id_4.offset().top)) {
			$html_body.animate({ scrollTop: $id_4.offset().top }, 600);

		} else if (($window.scrollTop() >= $id_2.offset().top - 5) && ($window.scrollTop() < $id_3.offset().top)) {
			$html_body.animate({ scrollTop: $id_3.offset().top }, 600);

		} else if (($window.scrollTop() >= $id_1.offset().top - 5) && ($window.scrollTop() < $id_2.offset().top)) {
			$html_body.animate({ scrollTop: $id_2.offset().top }, 600);

		} else if (($window.scrollTop() >= 0) && ($window.scrollTop() < $id_1.offset().top)) {
			$html_body.animate({ scrollTop: $id_1.offset().top }, 600);

		}
	});
	// $left_nav.click(function() {
	// 	if (($window.scrollTop() > ($id_5.offset().top))) {
	// 		$html_body.animate({ scrollTop: $id_5.offset().top }, 600);
	//
	// 	} else if (($window.scrollTop() > ($id_4.offset().top)) && ($window.scrollTop() <= $id_5.offset().top)) {
	// 		$html_body.animate({ scrollTop: $id_4.offset().top }, 600);
	//
	// 	} else if (($window.scrollTop() > ($id_3.offset().top)) && ($window.scrollTop() <= $id_4.offset().top)) {
	// 		$html_body.animate({ scrollTop: $id_3.offset().top }, 600);
	//
	// 	} else if (($window.scrollTop() > ($id_2.offset().top)) && ($window.scrollTop() <= $id_3.offset().top)) {
	// 		$html_body.animate({ scrollTop: $id_2.offset().top }, 600);
	//
	// 	} else if (($window.scrollTop() > ($id_1.offset().top)) && ($window.scrollTop() <= $id_2.offset().top)) {
	// 		$html_body.animate({ scrollTop: $id_1.offset().top }, 600);
	//
	// 	} else if (($window.scrollTop() > 0) && ($window.scrollTop() <= ($id_1.offset().top))) {
	// 		$html_body.animate({ scrollTop: 0 }, 600);
	//
	// 	}
	// });
} else {
	$id_one_four.click(function() {
		if ($window.scrollTop() >= ($id_4.offset().top - 5)) {
			$html_body.animate({ scrollTop: $document.height() }, 1200);

		} else if (($window.scrollTop() >= ($id_3.offset().top - 5)) && ($window.scrollTop() < $id_4.offset().top)) {
			$html_body.animate({ scrollTop: $id_4.offset().top }, 600);

		} else if (($window.scrollTop() >= ($id_2.offset().top - 5)) && ($window.scrollTop() < $id_3.offset().top)) {
			$html_body.animate({ scrollTop: $id_3.offset().top }, 600);

		} else if (($window.scrollTop() >= ($id_1.offset().top - 5)) && ($window.scrollTop() < $id_2.offset().top)) {
			$html_body.animate({ scrollTop: $id_2.offset().top }, 600);

		} else if (($window.scrollTop() >= 0) && $window.scrollTop() < ($id_1.offset().top)) {
			$html_body.animate({ scrollTop: $id_1.offset().top }, 600);

		}
	});
	// $left_nav.click(function() {
	// 	if ($window.scrollTop() > ($id_4.offset().top)) {
	// 		$html_body.animate({ scrollTop: $id_4.offset().top }, 600);
	//
	// 	} else if (($window.scrollTop() > ($id_3.offset().top)) && ($window.scrollTop() <= $id_4.offset().top)) {
	// 		$html_body.animate({ scrollTop: $id_3.offset().top }, 600);
	//
	// 	} else if (($window.scrollTop() > ($id_2.offset().top)) && ($window.scrollTop() <= $id_3.offset().top)) {
	// 		$html_body.animate({ scrollTop: $id_2.offset().top }, 600);
	//
	// 	} else if (($window.scrollTop() > ($id_1.offset().top)) && ($window.scrollTop() <= $id_2.offset().top)) {
	// 		$html_body.animate({ scrollTop: $id_1.offset().top }, 600);
	//
	// 	} else if (($window.scrollTop() > 0) && ($window.scrollTop() <= $id_1.offset().top)) {
	// 		$html_body.animate({ scrollTop: 0 }, 600);
	//
	// 	}
	// });
}









// var keys = {37: 1, 38: 1, 39: 1, 40: 1};

// function preventDefault(e) {
//   e = e || window.event;
//   if (e.preventDefault) {
//       e.preventDefault();
//   }
//   e.returnValue = false;
// }

// function preventDefaultForScrollKeys(e) {
//     if (keys[e.keyCode]) {
//         preventDefault(e);
//         return false;
//     }
// }

// function disableScroll() {
//   if (window.addEventListener) {
//       window.addEventListener('DOMMouseScroll', preventDefault, false);
//   }
//   window.onwheel = preventDefault; // modern standard
//   window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
//   window.ontouchmove  = preventDefault; // mobile
//   document.onkeydown  = preventDefaultForScrollKeys;
// }

// function enableScroll() {
//     if (window.removeEventListener) {
//         window.removeEventListener('DOMMouseScroll', preventDefault, false);
//     }
//     window.onmousewheel = document.onmousewheel = null;
//     window.onwheel = null;
//     window.ontouchmove = null;
//     document.onkeydown = null;
// }





	// $(".show-rest").click(function() {
	// 	disableScroll();
	// 	$('html, body').animate({ scrollTop: ($document.outerHeight() - $window.outerHeight())}, 300, function() {
	// 		enableScroll();
	// 	});
	// 	$('.show-rest').fadeOut(300);
	// 	return false;
	// });
	// $(".top-of-next").click(function() {
	// 	disableScroll();
	// 	$('html, body').animate({ scrollTop: ($(this).offset().top)}, 300, function() {
	// 		enableScroll();
	// 	});
	// 	return false;
	// });

	// $(window).scroll(function(){
	// 	if ($(window).scrollBottom() < 300) {
	// 		$(".smooth").fadeIn(500);
	// 	}
	// 	else {
	// 		$(".smooth").fadeOut(500);
	// 	}
	// });

	$window.scroll(function() {
		if (($window.scrollTop() > 1) && ($menu.css( 'display' ) === 'block')) {
			$menu.slideUp(300);
			$click_catcher.hide();
		}
	});
	// $('.sidebar-member').on('mouseenter', function() {
	// 	$(this).find('.sidebar-indicator').addClass('testicles');
	// 	// $(this).find('.sidebar-indicator').animate({width: "10px"}, 200);
	// }).on('mouseleave', function() {
	// 	$(this).find('.sidebar-indicator').removeClass('testicles');


	// });


	// $( ".desktop-menu-item").hover(function() {
	// 	$( ".desktop-menu-item" ).toggleClass("unselected-menu-item");
	// });
	// $( ".foot-item").hover(function() {
	// 	$( ".foot-item" ).toggleClass("unselected-foot-item");
	// });
	// $( ".contact-foot-item").hover(function() {
	// 	$( ".contact-foot-item" ).toggleClass("contact-unselected-foot-item");
	// });



// page indicator function call
// page indicator function call

// page indicator function call
// page indicator function call



	// PARTNERS BAND JS (GROW & SHRINK)
	// PARTNERS BAND JS (GROW & SHRINK)


	$( ".partner" ).click(function() {

		if ($(this).hasClass("downscaled-partner")) {

			$(".scaled-partner").addClass("downscaled-partner").removeClass("scaled-partner");
			$(this).addClass("scaled-partner").removeClass("downscaled-partner");

		} else if ($(this).hasClass("scaled-partner")) {

			$(".downscaled-partner").addClass("partner").removeClass("downscaled-partner");
			$(this).addClass("partner").removeClass("scaled-partner");

		} else {

			$(this).addClass("scaled-partner").removeClass("partner");
			$(".partner").addClass("downscaled-partner");
			$(this).addClass("partner");

		}

	});


	// PARTNERS JS (CLICK AWAY TO NEGATE EFFECT)

	$(".partner").click(function() {

		if ($(this).hasClass("downscaled-partner")) {
			$(".click-catcher-2").show();
		} else if (!$(this).hasClass("scaled-partner") && (!$(this).hasClass("downscaled-partner"))) {
			$(".click-catcher-2").hide();
		} else {
			$(".click-catcher-2").show();
		}

	});

	$(".click-catcher-2").click(function() {

		$(".partner").removeClass("scaled-partner").removeClass("downscaled-partner");
		$(".click-catcher-2").hide();

	});

	// PARTNERS JS (CLICK AWAY TO NEGATE EFFECT)
  	$member.mouseenter(function() {
		$(this).children('.nameplate').css("transition", "opacity .2s ease-in-out").css("opacity", "0");
	});
	$member.mouseleave(function() {
		$(this).children('.nameplate').css("transition", "opacity .2s ease-in-out").css("opacity", "1");
	});

	// PARTNERS BAND JS (GROW & SHRINK)
	// PARTNERS BAND JS (GROW & SHRINK)


});

