// Global variable of Array sequence
var gameSeq = [];
var userSeq = [];
var bCorrect = false;
var timeVar = null;
var bLost = false;

const randomize = () => {
  return Math.floor(Math.random()*4)+1;
}

// set up click functions for the btns on page
$('#btn1').click(function(){
	$('#btn1').removeClass("glow");
	$('#btn2').removeClass("glow");
	$('#btn3').removeClass("glow");
	$('#btn4').removeClass("glow");

	$('#btn1').addClass("glow");
	comparePattern(1);
	setTimeout(function (){
		$('#btn1').removeClass("glow")}, 250);
})

$('#btn2').click(function(){
	$('#btn1').removeClass("glow");
	$('#btn2').removeClass("glow");
	$('#btn3').removeClass("glow");
	$('#btn4').removeClass("glow");

	$('#btn2').addClass("glow");
	comparePattern(2);
	setTimeout(function (){
		$('#btn2').removeClass("glow")}, 250);
})

$('#btn3').click(function(){
	$('#btn1').removeClass("glow");
	$('#btn2').removeClass("glow");
	$('#btn3').removeClass("glow");
	$('#btn4').removeClass("glow");

	$('#btn3').addClass("glow");
	comparePattern(3);
	setTimeout(function (){
		$('#btn3').removeClass("glow")}, 250);
})

$('#btn4').click(function(){
	$('#btn1').removeClass("glow");
	$('#btn2').removeClass("glow");
	$('#btn3').removeClass("glow");
	$('#btn4').removeClass("glow");

	$('#btn4').addClass("glow");
	comparePattern(4);
	setTimeout(function (){
		$('#btn4').removeClass("glow")}, 250);
})

function displayPattern(gameSeq)
{
	var intSeconds = 250;
	for(var i = 0; i <= gameSeq.length - 1; i++)
	{
		var currNum = gameSeq[i];
		switch (currNum){
			case 1:
				setTimeout(function (){
					$('#btn1').addClass("glow")}, intSeconds);
				setTimeout(function (){
					$('#btn1').removeClass("glow")}, (intSeconds * 2) - 100);
				break;
			case 2:
				setTimeout(function (){
					$('#btn2').addClass("glow")}, intSeconds);
				setTimeout(function (){
					$('#btn2').removeClass("glow")}, (intSeconds * 2) - 100);
				break;
			case 3:
				setTimeout(function (){
					$('#btn3').addClass("glow")}, intSeconds);
				setTimeout(function (){
					$('#btn3').removeClass("glow")}, (intSeconds * 2) - 100);
				break;
			case 4:
				setTimeout(function (){
					$('#btn4').addClass("glow")}, intSeconds);
				setTimeout(function (){
					$('#btn4').removeClass("glow")}, (intSeconds * 2) - 100);
				break;
			default:
				console.log("Error");
				break;
		}
		intSeconds += intSeconds;
	}

}

function comparePattern(userInput){
	if (timeVar == null) {
		clearGame();
		return;
	}
	console.log(timeVar);
	userSeq.push(userInput);
	console.log("user added " + userInput);
	for(var i = 0; i <= userSeq.length - 1; i++){
		if (userSeq[i] != gameSeq[i]) {
			bCorrect = false;
			userSeq =[];
			console.log("You lost! Play Again?");
    		$("#displayMessage").html("<strong>You lost the game! Try Again?</strong>");
			clearInterval(timeVar);
			timeVar = null;
			return;
		}
		else if(i == gameSeq.length - 1){
			if (userSeq.length == 5){
				bCorrect = true;
				console.log("You won. Congrats");
				$("#displayMessage").html("You won the game, Congrats!");
				return;
			}
			bCorrect = true;
			userSeq = [];
			$("#displayMessage").html("<strong>Great! Next level </strong>");
			console.log("You won. Next Level");
		}
	}
}

const game = () => {
	let gameInSession = true;
	gameSeq.push(randomize());
	$(this).prop("disabled",true);

    console.log(gameSeq);
    displayPattern(gameSeq);
    timeVar = setInterval(() => {
    	var userPassed = checkMatch();
    	if (userPassed) {
    		bCorrect = false;
    		gameSeq.push(randomize());
    		displayPattern(gameSeq);
    		console.log(gameSeq);
    	}
    	else{
    		console.log("You lost! Play Again?");
    		$("#displayMessage").html("<strong>You lost the game! Try Again?</strong>");
			clearInterval(timeVar);
			timeVar = null;
    		return;
    	}
    }, 4000 * gameSeq.length);

}

function clearGame(){
	gameSeq = [];
	userSeq = [];
	clearInterval(timeVar);
	console.clear();
	$("#displayMessage").html("<strong>Click Start!</strong>");
}

function checkMatch(){
	console.log("checked");
	return bCorrect;
}



