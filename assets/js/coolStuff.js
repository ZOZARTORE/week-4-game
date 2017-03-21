

$(document).ready(function() {
	var randNum = 0;
	var wins = 0;
	var losses = 0;
	var score = 0;
	var gem1 = 0;
	var gem2 = 0;
	var gem3 = 0;
	var gem4 = 0;
	
	function reset() {
		score = 0;
		randNum = Math.floor(Math.random()*101) + 19;
		gem1 = Math.floor(Math.random()*12) + 1;
		gem2 = Math.floor(Math.random()*12) + 1;
		gem3 = Math.floor(Math.random()*12) + 1;
		gem4 = Math.floor(Math.random()*12) + 1;
		$('#rand-num').text('Random number: ' + randNum);
		$('#wins').text('Wins: ' + wins);
		$('#losses').text('Losses: ' + losses);
		$('#score').text('Score: ' + score);
		$('#gem-1').on('click', function(){
			score += gem1;
			$('#score').text('Score: ' + score);
			if (score > randNum) {
				losses++;
				reset();
			}
			if (score === randNum) {
				wins++;
				reset();
			}
		});
		$('#gem-2').on('click', function(){
			score += gem2;
			$('#score').text('Score: ' + score);
			if (score > randNum) {
				losses++;
				reset();
			}
			if (score === randNum) {
				wins++;
				reset();
			}
		});
		$('#gem-3').on('click', function(){
			score += gem3;
			$('#score').text('Score: ' + score);
			if (score > randNum) {
				losses++;
				reset();
			}
			if (score === randNum) {
				wins++;
				reset();
			}
		});
		$('#gem-4').on('click', function(){
			score += gem4;
			$('#score').text('Score: ' + score);
			if (score > randNum) {
				losses++;
				reset();
			}
			if (score === randNum) {
				wins++;
				reset();
			}
		});



	}
	reset();
});