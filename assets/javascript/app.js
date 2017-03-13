//questions array
var questions = [{
    question: 'Who does Kelly date first from the office?',
    answerChoices: ['Ryan', 'Roy', 'Daryl', 'Andy'],
    correctAnswer: 'Ryan',
    correctAnswerId: 0,
    image: "<img src='assets/images/ketchup.gif' class='gif' alt='Ryan'>"
}, {
    question: 'What does Pam use to make the "medals" for the office olympics medal ceremony?',
    answerChoices: ['Printer Paper', 'Yogurt Lids', 'Post-Its', 'Plastic Cups'],
    correctAnswer: 'Yogurt Lids',
    correctAnswerId: 1,
    image: "<img src='assets/images/yogurt.gif' class='gif' alt='Yogurt Lids'>"
}, {
    question: 'Besides Jim, who is the only transfer from Stamford still working at Scranton by the end of the show?',
    answerChoices: ['Dwight', 'Karen', 'Ryan', 'Andy'],
    correctAnswer: 'Andy',
    correctAnswerId: 3,
    image: "<img src='assets/images/andy.gif' class='gif' alt='Andy Bernard'>"
}, {
    question: 'Who does Michael hit with his car?',
    answerChoices: ['Kevin', 'Meredith', 'Creed', 'Roy'],
    correctAnswer: 'Meredith',
    correctAnswerId: 1,
    image: "<img src='assets/images/meredith.gif' class='gif' alt='Meredith Palmer'>"
}, {
    question: 'What is Stanley\'s favorite day at the office?',
    answerChoices: ['Company Picnic', 'Payday', 'Pretzel Day', 'He hates every day'],
    correctAnswer: 'Pretzel Day',
    correctAnswerId: 2,
    image: "<img src='assets/images/stanley.gif' class='gif' alt='Pretzels'>"
}, {
    question: 'What is the first prank viewers see Jim pull on Dwight?',
    answerChoices: ['Relocating his desk to the bathroom', 'Adding 5 blank keys to his key ring', 'Convincing him a Thursday was a Friday', 'Encasing his stapler in Jell-O'],
    correctAnswer: 'Encasing his stapler in Jell-O',
    correctAnswerId: 3,
    image: "<img src='assets/images/jello.gif' class='gif' alt='Jell-O'>"
}, {
    question: 'When Michael leaves Dunder Mifflin to create the Michael Scott Paper Company, which 2 employees from the office go with him?',
    answerChoices: ['Jim & Dwight', 'Pam & Ryan', 'Andy & Phyllis', 'Pam & Andy'],
    correctAnswer: 'Pam & Ryan',
    correctAnswerId: 1,
    image: "<img src='assets/images/mspc.gif' class='gif' alt='Pam & Ryan'>"
}, {
    question: 'Kevin spends all night cooking what food that, the next day, he drops all over the floor of the office?',
    answerChoices: ['Chili', 'Cookies', 'M&Ms', 'Macaroni \'n Cheese'],
    correctAnswer: 'Chili',
    correctAnswerId: 0,
    image: "<img src='assets/images/kevinchili.gif' class='gif' alt='Chili'>"
}, {
    question: 'Who does Michael hate the most in the office?',
    answerChoices: ['Dwight', 'Gabe', 'Angela', 'Toby'],
    correctAnswer: 'Toby',
    correctAnswerId: 3,
    image: "<img src='assets/images/toby.gif' class='gif' alt='Toby'>"
}, {
    question: 'In the season 6 premiere, what sport becomes Michael, Dwight, and Andy\'s new obsession?',
    answerChoices: ['Basketball', 'Curling', 'Parkour', 'Bungee Jumping'],
    correctAnswer: 'Parkour',
    correctAnswerId: 2,
    image: "<img src='assets/images/parkour.gif' class='gif' alt='Parkour'>"
}, {
    question: 'What 2 characters plan Kelly\'s Missed Birthday Party?',
    answerChoices: ['Jim & Dwight', 'Angela & Phyllis', 'Dwight & Michael', 'Angela & Pam'],
    correctAnswer: 'Jim & Dwight',
    correctAnswerId: 0,
    image: "<img src='assets/images/birthday.gif' class='gif' alt='Jim and Dwight'>"
}, {
    question: 'Who does Michael refer to as the "Secret Weapon" in the basketball game between the office and the warehouse?',
    answerChoices: ['Jim', 'Stanley', 'Roy', 'Himself'],
    correctAnswer: 'Stanley',
    correctAnswerId: 1,
    image: "<img src='assets/images/secretweapon.gif' class='gif' alt='Stanley'>"
}, {
    question: 'What is the name of the rap that Michael and Dwight write about Scranton?',
    answerChoices: ['Real Life Yo', 'The Screets', 'The Electric City', 'Lazy Scranton'],
    correctAnswer: 'Lazy Scranton',
    correctAnswerId: 3,
    image: "<img src='assets/images/rap.gif' class='gif' alt='Lazy Scranton'>"
}, {
    question: 'Who pranks Andy by putting his cell phone in the ceiling and calling it repeatedly, causing him to punch a hole in the wall?',
    answerChoices: ['Jim & Michael', 'Erin & Gabe', 'Dwight & Michael', 'Jim & Pam'],
    correctAnswer: 'Jim & Pam',
    correctAnswerId: 3,
    image: "<img src='assets/images/punch.gif' class='gif' alt='Jim and Pam'>"
}, {
    question: 'Who owns wigs of everyone in the office?',
    answerChoices: ['Dwight', 'Michael', 'Erin', 'Phyllis'],
    correctAnswer: 'Dwight',
    correctAnswerId: 0,
    image: "<img src='assets/images/wigs.gif' class='gif' alt='Dwight'>"
}, {
    question: 'Dwight dances around in the stairwell of the office in order to pump himself up for what?',
    answerChoices: ['Asking out Angela', 'Applying for Michael\'s job', 'Asking for a raise', 'Going out on a tough sales call'],
    correctAnswer: 'Asking for a raise',
    correctAnswerId: 2,
    image: "<img src='assets/images/dance.gif' class='gif' alt='Dwight Dancing'>"
}, {
    question: 'What does Michael say SWAG stands for?',
    answerChoices: ['Stolen without a gun', 'Sealed with a gift', 'Some women are great', 'Stuff we all get'],
    correctAnswer: 'Stuff we all get',
    correctAnswerId: 3,
    image: "<img src='assets/images/swag.gif' class='gif' alt='SWAG'>"
}, {
    question: 'What does Dwight do when Michael gets gum in his hair?',
    answerChoices: ['Cuts Michael\'s hair', 'Puts peanut butter in Michael\'s hair', 'Calls the police', 'Puts gum in his own hair'],
    correctAnswer: 'Puts peanut butter in Michael\'s hair',
    correctAnswerId: 1,
    image: "<img src='assets/images/pb.gif' class='gif' alt='Puts peanut butter in his hair'>"
}, {
    question: 'When Stanley refuses to go on a sales call because elevator is broken, Dwight shoots him with bull tranquilizers, and then does what?',
    answerChoices: ['Goes by himself', 'Slides him downstairs in bubble wrap', 'Carries him down the stairs', 'Steals his stuff to teach him a lesson'],
    correctAnswer: 'Slides him downstairs in bubble wrap',
    correctAnswerId: 1,
    image: "<img src='assets/images/stairs.gif' class='gif' alt='Slides down stairs'>"
}, {
    question: 'How soon after he started dating Pam does Jim say he bought an engagement ring?',
    answerChoices: ['1 year', '1 month', '1 week', '1 day'],
    correctAnswer: '1 week',
    correctAnswerId: 2,
    image: "<img src='assets/images/ring.gif' class='gif' alt='Engagement Ring'>"
}];

//global variables
var timeRemaining = 30;
var intervalId;
var timeLeft = true;
var index = 0;
var correctQs = 0;
var incorrectQs = 0;
var unansweredQs = 0;

//timer functionality

//decrements time remaining, displays countdown to player, stops countdown at 0
function displayTime() {
    if (timeRemaining > 0) {
        timeRemaining--;
        $('.time-remaining').html('Time Remaining: ' + timeRemaining);
    } else {
        stopCountdown();
        timeLeft = false;
        outOfTime();
        displayNextQuestion();
    }
}

//interval to run countdown
function countdown() {
    intervalId = setInterval(displayTime, 1000);
}

//stops countdown
function stopCountdown() {
    clearInterval(intervalId);
    timeRemaining = 30;
}

//shows answer and image when player is out of time
function outOfTime() {
    if (timeLeft === false) {
        $('.question').html("Out of Time!");
        $('.answer-choices').html("The correct answer was: " + questions[index].correctAnswer);
        $('.gifs-div').html(questions[index].image);
        unansweredQs++;
    }
}

//question functionality

//displays question
function question() {
    $('.question').html(questions[index].question);
}

function answersToQuestion() {
    //displays answer choices
    for (var i = 0; i < 4; i++) {
        $('.answer-choices').append("<div class='answer' id='" + i + "'>" + questions[index].answerChoices[i] + "</div>");
    }
    //tells user if answer is correct
    $('.answer').on('click', function() {
        stopCountdown();
        if (this.id != questions[index].correctAnswerId) {
            $('.question').html('Nope!');
            $('.answer-choices').html('The correct answer was: ' + questions[index].correctAnswer);
            $('.gifs-div').html(questions[index].image);
            incorrectQs++;
        } else {
            $('.question').html('Correct!');
            $('.answer-choices').html('The answer was: ' + questions[index].correctAnswer);
            $('.gifs-div').html(questions[index].image);
            correctQs++;
        }
        displayNextQuestion();
    });
}

//determines whether to display next question or end the game
function nextQuestion() {
    index++;
    $('.gifs-div').html(' ');
    $('.answer-choices').html(' ');
    if (index < 20) {
        question();
        answersToQuestion();
        countdown();
    } else {
        endGame();
        setTimeout(restart, 5000);
    }
}

//function used to end the game
function endGame() {
    $('.time-remaining').html(' ');
    $('.question').html('All done, here\'s how you did!');
    $('.answer-choices').html('Correct Answers: ' + correctQs + '<br>' + 'Incorrect Answers: ' + incorrectQs + '<br>' + 'Unanswered Questions: ' + unansweredQs);
    $('.gifs-div').html("<img src='assets/images/highfive.gif' class='gif' alt='High Five'>");
}

//function used to display next question after 5 seconds
function displayNextQuestion() {
    setTimeout(nextQuestion, 5000);
}

//restart function
function restart() {
    $('.gifs-div').html('<button class=\'restart\'>Click to Restart</button>');
    $('.restart').on('click', function() {
        $('.restart').hide();
        timeLeft = true;
        correctQs = 0;
        incorrectQs = 0;
        unansweredQs = 0;
        index = 0;
        timeRemaining = 30;
        $('.answer-choices').html(' ');
        question();
        answersToQuestion();
        countdown();
    });
}

//start button
$('.start-button').on('click', function() {
    $('.start-button').hide();
    question();
    answersToQuestion();
    countdown();
});
