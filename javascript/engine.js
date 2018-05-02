$(function() {

	/**********************************************************
	* HOUSES
	**********************************************************/

	// Hover
	// # Only works if object is closed.
	$('.house').hover(function() {
		if (!$(this).hasClass('open'))
			$(this).addClass('hover-border-medium');
	}, function() {
		if (!$(this).hasClass('open'))
			$(this).removeClass('hover-border-medium');
	});

	// Click
	// # Shows floor-0 or hides all floors.
	$('.house').click(function() {
		if ($(this).hasClass('open'))
		{
			$(this).removeClass('open');
			$(this).children().each(function() {
				if (!$(this).hasClass('hidden'))
				{
					$(this).addClass('hidden');
				}
			});
			$(this).find('.npc').each(function() {
				clearInterval(world.npcs[$(this).attr('id')].interval);

			});
		}
		else
		{
			$(this).addClass('open');
			$(this).find('.floor-0').removeClass('hidden');
			houseOpenEvent($(this));
		}
	});

	// Stop Children Click
	$('.house div').click(function(e) {
		e.stopPropagation();
	});


	/**********************************************************
	* HOUSE-MENU
	**********************************************************/

	// Hover
	// # Same as above except colered white.
	$('.menu > div').hover(function() {
		$(this).addClass('hover-border-small-white');
	}, function() {
		$(this).removeClass('hover-border-small-white');
	});

	// Click
	// # Clicking up searches for next floor, clicking down
	// # searches for previous floor, hides the current.
	$('.menu-up').click(function() {
		$(this).parent().parent().addClass('hidden');
		$(this).parent().parent().next().removeClass('hidden');
	});
	$('.menu-down').click(function() {
		$(this).parent().parent().addClass('hidden');
		$(this).parent().parent().prev().removeClass('hidden');
	});


	/**********************************************************
	* STAIRS & OBJECTS
	**********************************************************/

	// Hover
	$('.stairs').add($('.object')).hover(function() {
		$(this).addClass('hover-border-small');
	}, function() {
		$(this).removeClass('hover-border-small');
	});

	// Click
	// # Clicking on stairs-up searches for next div, on stairs-down
	// # searches for the previous div, hides the current.
	$('.stairs-up').click(function() {
		$(this).parent().addClass('hidden');
		$(this).parent().next().removeClass('hidden');
	});
	$('.stairs-down').click(function() {	
		$(this).parent().addClass('hidden');
		$(this).parent().prev().removeClass('hidden');	
	}); 

	/**********************************************************
	* NPCS
	**********************************************************/

	// Hover
	$('.npc').hover(function() {
		$(this).addClass('hover-border-small');
	}, function() {
		$(this).removeClass('hover-border-small');
	});


	/**********************************************************
	* MISC
	**********************************************************/

	// Prevent Double Click
	// # Prevents double clicking selection on objects and children.
	$('html').mousedown(function(e){ 
		e.preventDefault(); 
	});

	// Display description
	$('.object').add('.npc').hover(function() {
		$('#description').html($(this).find('.description').html());		
	}, function() {
		$('#description').html('');
	});
});

/**********************************************************
* FUNCTIONS
**********************************************************/
function move(npc, direction) {

	var top = 0;
	var left = 0;

	// Get current direction
	var classList = $(npc).attr('class').split(/\s+/);
	for (var i = 0; i < classList.length; i++) {
		if (classList[i].indexOf('top') > -1) {
			top = parseInt(classList[i].substring(4));
		}
		if (classList[i].indexOf('left') > -1) {
			left = parseInt(classList[i].substring(5));
		}
	}

	// Movement
	if (direction == 'left')
		$(npc).removeClass('left-'+left).addClass('left-'+(left-1));
	else if (direction == 'right')
		$(npc).removeClass('left-'+left).addClass('left-'+(left+1));
	else if (direction == 'up')
		$(npc).removeClass('top-'+top).addClass('top-'+(top-1));
	else if (direction == 'down')
		$(npc).removeClass('top-'+top).addClass('top-'+(top+1));

	// Direction
	$(npc).find('.direction').removeClass('up').removeClass('down').removeClass('left').removeClass('right');
	$(npc).find('.direction').addClass(direction);
}

function turn(npc, direction) {
	// Direction
	$(npc).find('.direction').removeClass('up').removeClass('down').removeClass('left').removeClass('right');
	$(npc).find('.direction').addClass(direction);
}

function randomTurn(npc) {
	do {
		var direction = Math.floor(Math.random() * 4 + 1);

		if (direction == 1)
			direction = 'left';
		else if (direction == 2)
			direction = 'right';
		else if (direction == 3)
			direction = 'up';
		else if (direction == 4)
			direction = 'down';
	} while ($(npc).find('.direction').hasClass(direction));

	turn($(npc), direction);
}

function clearTimeouts(npc) {
	for (timeout in npc.timeout)
		clearTimeout(timeout);
}