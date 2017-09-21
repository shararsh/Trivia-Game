$(document).ready(function() {	
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$(".timer").text("Times Remaining: " + this.time);
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);

			if (countdownTimer.time >= 0) {
				$(".timer").text("Times Remaining: " + countdownTimer.time );
			}
			else {
				index++;
				incorrectAnswer();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} 
				else {
					$(".choices").hide();
					showScore();
				}
			}
		}
	};


var correct = 0;
var incorrect = 0;
var question1 = {
	question : "1 - What is the longest river in the United States?",
	choices : 
				["A. Colorado River",
				 "B. Mississippi River",
				 "C. Missouri River",
				 "D. Rio Grande River"],
	answers : [false, false, true, false],
	correctAnswer : "Missouri River"
};
var question2 = {
	question : "2 - Which of the following states does NOT border the Great Lakes?",
	choices : 
				["A. Ohio",
				 "B. Michigan",
				 "C. Iowa",
				 "D. Illinois"],
	answers : [false, false, true, false],
	correctAnswer : "Iowa"
};
var question3 = {
	question : "3 - Death Valley is located in what U.S. state?",
	choices : 
				["A. Nevada",
				 "B. Utah",
				 "C. California",
				 "D. Texas"],
	answers : [false, false, true, false],
	CorrectAnswer : "California"
};

var question4 = {
	question : "4 - What is the tallest mountain in the United States?",
	choices : 
				["A. Mount Hood",
				 "B. Mount McKinley",
				 "C. Mount Rainer",
				 "D. Mount Rushmore"],
	answers : [false, true, false, false],
	correctAnswer : "Mount McKinley"
};

var question5 = {
	question : "5 - What is the smallest U.S. state?",
	choices:  
				["A. Rhode Island",
				 "B. Delaware",
				 "C. Maryland",
				 "D. Maine"],
	answers : [true, false, false, false],
	corretAnswer : "Rhode Island"
};
 
var question6 = {
	question : "6 - Which U.S. state has the most active volcanoes?",
	choices : 
				["A. California",
				 "B. Alaska",
				 "C. Washington",
				 "D. Hawaii"],
	answers : [false, true, false, false],
	correctAnswer : "Alaska"
};

var question7 = {
	question : "7 - Lake Okeechobee is located in what U.S. state?",
	choices : 
				["A. California",
				 "B. Florida",
				 "C. Texas",
				 "D. Oklahoma"],
	answers : [false, true, false, false],
	correctAnswer : "Florida"
};

var question8 = {
	question : "8 - Which of the Great Lakes is located entirely within the U.S. border?",
	choices : 
				["A. Lake Michigan",
				 "B. Lake Huran",
				 "C. Lake Erie",
				 "D. Lake Superior"],
	answers : [true, false, false, false],
	correctAnswer : "Lake Michigan"
};

var questionArray = [question1, question2, question3, question4, question5, question6, question7, question8];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").text(questionArray[questionSelection].question);
  $("#A").text(questionArray[questionSelection].choices[0]).show();
  $("#B").text(questionArray[questionSelection].choices[1]).show();
  $("#C").text(questionArray[questionSelection].choices[2]).show();
  $("#D").text(questionArray[questionSelection].choices[3]).show();

}


function setup() {
	index = 0;
	$(".question").append('<button id="start">Start</button>');
	$("#start").on("click", function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}

function getAnswer() {

	$(".choices").on("click", function() {
	  console.log('alert', index);
		index++;
		console.log("click", index);
		$(".question").text(" ");
		$("#A").text(" ");
		$("#B").text(" ");
		$("#C").text(" ");
		$("#D").text(" ");
		loadQuestion();
	})
}

function correctAnswer() {
	correct++;
	alert("Correct!");
}

function incorrectAnswer() {
	incorrect++;
	alert("Incorrect!");
}

function showScore() {
	countdownTimer.stop();
	$(".timer").empty();
	$(".question").empty();
	$(".question").html("Result:<br>")
	$(".question").append(correct + " Correct & ");
	$(".question").append(incorrect + " Incorrect Answers");
	$(".question").append('<br><button id="restart">Start Over?</button>');
	$("#restart").on("click", function() {
		$(this).hide();
	 	index=0
		countdownTimer.start();
		loadQuestion(index);
	});

}

setup();
$(".choices").on("click", function() {
 console.log($(this));
 if(this.id == "A") {
 	var answerChosen = "A";
 } else if(this.id == "B") {
 	answerChosen = "B";
 } else if (this.id == "C") {
 	answerChosen = "C";
 } else if (this.id == "D") {
 	answerChosen = "D";
 } 
 if ((answerChosen == "A") && (questionArray[index].answers[0] == true)) {
 	correctAnswer();
 } else if (answerChosen == "A") {
 	incorrectAnswer();
 }
 if ((answerChosen == "B") && (questionArray[index].answers[1] == true)) {
 	correctAnswer();
 } else if (answerChosen == "B") {
 	incorrectAnswer();
 }
if ((answerChosen == "C") && (questionArray[index].answers[2] == true)) {
 	correctAnswer();
 } else if (answerChosen == "C") {
 	incorrectAnswer();
 }
if ((answerChosen == "D") && (questionArray[index].answers[3] == true)) {
 	correctAnswer();
 } else if (answerChosen == "D") {
 	incorrectAnswer();
 }

 $(".question").text(" ");
 $("#A").text(" ");
 $("#B").text(" ");
 $("#C").text(" ");
 $("#D").text(" ");
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".choices").hide();
 	showScore();
 }
});

});
