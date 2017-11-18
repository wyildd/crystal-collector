
var random_rersult;
var lost = 0;
var win = 0;
var previous = 0;
// $(".crystal").attr('class');

var resetAndStart = function() {
	
	$(".crystals").empty();

	var image = ['https://i.pinimg.com/originals/52/53/3d/52533d23f8fef2f6939aa2aa15f226ce.png',
	 	'https://i.pinimg.com/originals/b8/7c/da/b87cda8506fd82717d4ba6f5af02d050.png',
	 	'https://i.pinimg.com/736x/a0/44/d2/a044d2bcbb1016dea480250fcf649003--yellow-lanterns-games.jpg',
	 	'https://vignette.wikia.nocookie.net/villains/images/5/5c/RL-Tat.jpg/revision/latest?cb=20170301161559']

	random_rersult = Math.floor(Math.random() * 120) + 19;

	// console.log(random_rersult)

	$("#result").html('Target Number: ' + random_rersult);

	for (var i = 0; i < 4; i++){

		var random = Math.floor(Math.random() * 12) + 1;
		// console.log(random)

		var crystal = $("<div>");
			crystal.attr({
				"class":'crystal',
				"data-random": random 
		})
		crystal.css({
			"background-image": "url('" + image[i] + "')",
			"background-size":"cover"
		})
			
		$(".crystals").append(crystal);
	}
}

resetAndStart();


$(document).on('click', ".crystal", function () {
	

	var num = parseInt($(this).attr('data-random'));

	previous += num

	$("#previous").html("Current Total: " + previous)

	if (previous > random_rersult){
		
		lost++;

		$("#lost").html("Losses: " + lost);
		
		previous = 0;

		resetAndStart();
	};

	if(previous === random_rersult) {
		
		win++;
		
		$("#win").html("Wins: " + win);
		
		previous = 0;

		resetAndStart();
	};
});
