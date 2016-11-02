$(document).ready(function(){	

//questions array
	var questions = [
		{
			question: 'Besides Jim, who is the only transfer from Stamford still working at Scranton?',
			answerChoices: ['Dwight', 'Karen', 'Ryan', 'Andy'],
			correctAnswer: 'Andy',
			correctAnswerId: 3,
			image: "<img src='assets/images/andy.gif' class='gif' alt='Andy Bernard'>"
		},
		{
			question: 'Who does Michael hit with his car?',
			answerChoices: ['Kevin', 'Meredith', 'Creed', 'Roy'],
			correctAnswer: 'Meredith',
			correctAnswerId: 1,
			image: "<img src='assets/images/meredith.gif' class='gif' alt='Meredith Palmer'>"
		},
		{
			question: 'What is Stanley\'s favorite day at the office?',
			answerChoices: ['Company Picnic', 'Payday', 'Pretzel Day', 'He hates every day'],
			correctAnswer: 'Pretzel Day',
			correctAnswerId: 2,
			image: "<img src='assets/images/stanley.gif' class='gif' alt='Pretzels'>"
		}
	]

//global variables
	var timeRemaining = 30;
	var intervalId;
	var timeLeft = true;
	var index = 0;

//timer functionality

	//decrements time remaining, displays countdown to player, stops countdown at 0
	function displayTime(){
		if (timeRemaining > -1){
			timeRemaining--;
			$('.time-remaining').html('Time Remaining: ' + timeRemaining);
		} else {
			stopCountdown();
			timeLeft = false;
			outOfTime();
			displayNextQuestion();
		}
	};

	//interval to run countdown
	function countdown() {
		intervalId = setInterval(displayTime, 1000);
	}

	//stops countdown
	function stopCountdown(){
		clearInterval(intervalId);
		timeRemaining = 30;
	}

	//shows answer and image when player is out of time
	function outOfTime(){
		if (timeLeft === false) {
			$('.question').html("Out of Time!");
			$('.answer-choices').html("The correct answer was: " + questions[index].correctAnswer);
			$('.gifs-div').html(questions[index].image);
		}
	};

//question functionality

	//displays question
	function question() {
		$('.question').html(questions[index].question);
	};

	function answersToQuestion(){
		//displays answer choices
		for (var i = 0; i < 4; i++) {
			$('.answer-choices').append("<div class='answer' id='" + i + "'>" + questions[index].answerChoices[i] + "</div>");
		};
		//tells user if answer is correct
		$('.answer').on('click', function(){
			stopCountdown();
			if (this.id != questions[index].correctAnswerId){
				$('.question').html('Nope!');
				$('.answer-choices').html('The correct answer was: ' + questions[index].correctAnswer);
				$('.gifs-div').html(questions[index].image);
			} else {
				$('.question').html('Correct!');
				$('.answer-choices').html('The answer was: ' + questions[index].correctAnswer);
				$('.gifs-div').html(questions[index].image);
			};
			displayNextQuestion();
		});
	};

	function nextQuestion() {
		if (index < 4){
			index++;
			$('.gifs-div').html(' ');
			$('.answer-choices').html(' ');
			question();
			answersToQuestion();
			countdown();
		}
	}

	function displayNextQuestion() {
		setTimeout(nextQuestion, 5000);
	}

//start button
	$('.start-button').on('click', function(){
		$('.start-button').hide();
		question();
		answersToQuestion();
		countdown();
	});
});

//reset
	//timeLeft = true;

