
function houseOpenEvent (house) {

	var house_id = house.attr('id');

	// SE dentro desta casa houver NPCS com random-turn, javascript para utomaticamente fazer o turn.
	// Ao clicar numa casa, registar todas classes iniciais e repor ao clicar para sair

	switch (house_id) 
	{
		case 'oak-lab':
		console.log("h")
			// world.npcs.npc_3.interval = setInterval(randomTurn, 3000, $('#npc_3'));
			// world.npcs.npc_4.interval = setInterval(randomTurn, 3000, $('#npc_4'));
			loop($('#npc_3'));
			break;
		default:
			console.log("none selected");
	}
}

function loop(npc) {

	var speed = Math.floor(Math.random() * 7 + 1);
	if (speed == 1 || speed == 2)
		speed = 500;
	else if (speed == 3)
		speed = 1000;
	else if (speed == 4 || speed == 5)
		speed = 2000;
	else if (speed > 5)
		speed = 3000;

	world.npcs.npc_4.interval = setTimeout(function() {
		randomTurn(npc);
		loop(npc);
	}, speed);
}