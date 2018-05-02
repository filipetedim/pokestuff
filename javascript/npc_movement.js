$(function() {

/**********************************************************
* PALLET TOWN
**********************************************************/

// Girl
var npc_1 = new Object();
npc_1.originalClass = $('#npc_1').attr('class');
npc_1.timeout = new Object();
npc_1.interval = setInterval(function palletTownGirl() {
	npc_1.timeout[1] = setTimeout(move, 3000, $('#npc_1'), 'right');
	npc_1.timeout[2] = setTimeout(move, 6000, $('#npc_1'), 'right');
	npc_1.timeout[3] = setTimeout(move, 9000, $('#npc_1'), 'up');
	npc_1.timeout[4] = setTimeout(move, 12000, $('#npc_1'), 'right');
	npc_1.timeout[5] = setTimeout(move, 15000, $('#npc_1'), 'down');
	npc_1.timeout[6] = setTimeout(move, 18000, $('#npc_1'), 'left');
	npc_1.timeout[7] = setTimeout(move, 21000, $('#npc_1'), 'left');
	npc_1.timeout[8] = setTimeout(move, 24000, $('#npc_1'), 'left');
	npc_1.timeout[9] = setTimeout(move, 27000, $('#npc_1'), 'down');
	npc_1.timeout[10] = setTimeout(move, 30000, $('#npc_1'), 'down');
	npc_1.timeout[11] = setTimeout(move, 33000, $('#npc_1'), 'down');
	npc_1.timeout[12] = setTimeout(move, 36000, $('#npc_1'), 'down');
	npc_1.timeout[13] = setTimeout(move, 39000, $('#npc_1'), 'up');
	npc_1.timeout[14] = setTimeout(move, 42000, $('#npc_1'), 'left');
	npc_1.timeout[15] = setTimeout(move, 45000, $('#npc_1'), 'up');
	npc_1.timeout[16] = setTimeout(move, 48000, $('#npc_1'), 'up');
	npc_1.timeout[17] = setTimeout(move, 51000, $('#npc_1'), 'up');
	npc_1.timeout[18] = setTimeout(move, 54000, $('#npc_1'), 'up');
	npc_1.timeout[19] = setTimeout(move, 57000, $('#npc_1'), 'up');
	npc_1.timeout[20] = setTimeout(move, 60000, $('#npc_1'), 'up');
	npc_1.timeout[21] = setTimeout(move, 63000, $('#npc_1'), 'left');
	npc_1.timeout[22] = setTimeout(move, 66000, $('#npc_1'), 'down');
	npc_1.timeout[23] = setTimeout(move, 69000, $('#npc_1'), 'down');
	npc_1.timeout[24] = setTimeout(move, 72000, $('#npc_1'), 'right');
	npc_1.timeout[25] = setTimeout(move, 75000, $('#npc_1'), 'right');
	npc_1.timeout[26] = setTimeout(move, 78000, $('#npc_1'), 'down');
	return palletTownGirl;
}(), 78000);

// Fat Guy
var npc_2 = new Object();
npc_2.originalClass = $('#npc_2').attr('class');
npc_2.timeout = new Object();
npc_2.interval = setInterval(function palletTownFatBuy() {
	npc_2.timeout[1] = setTimeout(move, 2500, $('#npc_2'), 'left');
	npc_2.timeout[2] = setTimeout(move, 5500, $('#npc_2'), 'right');
	npc_2.timeout[3] = setTimeout(move, 8500, $('#npc_2'), 'right');
	npc_2.timeout[4] = setTimeout(move, 11500, $('#npc_2'), 'down');
	npc_2.timeout[5] = setTimeout(move, 14500, $('#npc_2'), 'left');
	npc_2.timeout[6] = setTimeout(move, 17500, $('#npc_2'), 'left');
	npc_2.timeout[7] = setTimeout(move, 20500, $('#npc_2'), 'left');
	npc_2.timeout[8] = setTimeout(move, 23500, $('#npc_2'), 'right');
	npc_2.timeout[9] = setTimeout(move, 26500, $('#npc_2'), 'up');
	npc_2.timeout[10] = setTimeout(move, 29500, $('#npc_2'), 'right');
	return palletTownFatBuy;
}(), 29500);

// Scientist 1 - Oak Lab
// var npc_3 = new Object();
// npc_3.originalClass = $('#npc_3').attr('class');
// npc_3.timeout = new Object();
// npc_3.interval = setInterval(randomTurn, 3000, $('#npc_3'));

// Add all npcs to main object
world.npcs.npc_1 = npc_1;
world.npcs.npc_2 = npc_2;
// world.pallet_town.npcs.npc_3 = npc_3;

// To stop the loop
// clearInterval(mainLoopId);
$('#npc_1').click(function() {
	clearInterval(npc_1.interval);
	clearTimeouts(npc_1);
});



});