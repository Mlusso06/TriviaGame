// You'll create a trivia game that shows only one question until the player answers it or their time runs out.
// * If the player selects the correct answer, 
//show a screen congratulating them for choosing the right option. /

// * The scenario is similar for wrong answers and time-outs.
//   * If the player runs out of time, tell the player that time's up and display the correct answer.

// * On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).



// list of Global varibles

var correctAns = 0;
var incorrectAns = 0;
var gameClock = 100;


//----

// start Trivia game function
// need my start button to be removed from the page after "click" and start the game
$('.startBtn').on('click', function () {

    triviaGame.gameStart();
    // function run() {
    //     clearInterval(intervalId);
    //     intervalId = setInterval(decrement, 600);
    // }
    // function decrement(){
    //     gameClock--;
    //     $("#timeClock").html("<h3>"+gameClock+"</h3>");
    //     if(gameClock === 0) {
    //         stop();
    //         alert("Time UP!!!!");

    //     }
    // }
    // function stop () {
    //     clearInterval(intervalId);
    // }
    // run();

    // have my clock running to display time is up after 60 seconds
    setTimeout(timeUp, 1000 * 35);
    function timeUp() {
        console.log("done");
        $("#timeClock").append("<h4>Hurry you only have 10 seconds</h4>");
        console.log("Hurry up");
    }


})

/// show the questions and list of answeres function and array
// need an array to list the question, and allow for the function to read through with .operator process
var triviaQs = [{
    question: "What goverment operative with severe memory loss did Matt Damon bring to the silver screen?",
    selections: ["James Bond  ", "Austing Powers  ", "Ethan Hunt  ", "Jason Bourne "],
    corrAns: "Jason Bourne"

},
{
    question: "what toy was Mr.Potato Head hoping Andy would get for his birthday, in Toy Story?",
    selections: ["T-rex ", "Gi-Joe ", "Mrs. Potato Head ", "Buzz Light-Year "],
    corrAns: "Mrs. Potato Head"
},
{
    question: "How many player make up each squad in a regulation game of Ultimate Frisbee?",
    selections: ["Four-teen  ", "Two  ", "Eight  ", "Seven"],
    corrAns: "Seven"
},
{
    question: "What car accessories come in flashy varieties known as Dubs, Spinners and Sprees?",
    selections: ["Speakers  ", "Power Seats  ", "Wheel-Rims ", "Tires"],
    corrAns: "Wheel-Rims"
},
{
    question: "Who held the NBA record as the youngest player to reach 2000 career points, before Lebron James?",
    selections: ["Larry Bird  ", "Kobe Bryant  ", "Kobe Beef  ", "Jason Stark"],
    corrAns: "Kobe Bryant"
},
{
    question: "What actor earned his first Oscar nom in 25 years for Catch Me if you can?",
    selections: ["Chris Walken  ", "Leo Dicaprio  ", "Brad Pitt  ", "Matt Damon  "],
    corrAns: "Chris Walken"
},
{
    question: "What newswoman landed a cameo as a prison guard, in Austin Powers in Goldmember?",
    selections: ["Katie Couric  ", "Diane Sawyer  ", "Barbara Walters  ", "Erin Andrews"],
    corrAns: "Katie Couric"
},
{
    question: "Which young Jedi Knight becomes Darth Vader in Star Wars?",
    selections: ["Padme Amidala  ", "Hans Solo  ", "Sheev Palpatine  ", "Anakin Skywalker"],
    corrAns: "Anakin Skywalker"
},
{
    question: "What bounty hunter captures Han Solo?",
    selections: ["Jabba the Hutt  ", "Boba Fett  ", "Chewbacca  ", "Jar Jar Binks"],
    corrAns: "Boba Fett"
}
];
// want to show the questions
triviaQs.forEach((triviaQs) => console.log(triviaQs.question));
// want to console the correct answers
triviaQs.forEach((triviaQs) => console.log(triviaQs.corrAns));

// need a timer for the user to select the correct answer
var triviaGame = {
    correctAns: 0,
    incorrectAns: 0,
    // game clock will start 45 seconds
    gameClock: 45,
    countdown: function () {
        // count down 1 second based on the setInerval function below
        triviaGame.gameClock--;
        $("#timeClock2").html(triviaGame.gameClock);
        if (triviaGame.gameClock <= 0) {
            console.log("Time is up, try again!");
            triviaGame.done();
        }
    },
    gameStart: function () {
        timer = setInterval(triviaGame.countdown, 1000);
        // this will throw the timer on the html page, and will contiue to count down
        $('#timeClock').prepend('<h4>Time Remaining: <span id="timeClock2">45</span> Seconds</h4>');
        $('.startBtn').remove();
        // need a for loop to run through each of my questions, and make them appear on the Html page
        for (var i = 0; i < triviaQs.length; i++) {
            $('#questDisplay').append('<h5>' + triviaQs[i].question + '</h5>');
            // my second loop to revew the answers that the user can select
            for (var j = 0; j < triviaQs[i].selections.length; j++) {
                // created the answers with the radio button
                $("#questDisplay").append("<input type='radio' name='question-" + i + "' value='" + triviaQs[i].selections[j] + "'>" + triviaQs[i].selections[j])
            }
        }

    },
    // This now going to verify if the user selected the correct answer, agains the given solutions
    // I beleive there can be a For loop to accomplish this, but as I'm running out time to complete this, I will continue to rely on examples found in google with similar results
    done: function () {
        $.each($('input[name="question-0]":checked'), function () {
            if ($(this).val() == triviaQs[0].corrAns) {
                triviaGame.correctAns++;
            } else {
                triviaGame.incorrectAns++;
            }
        });
        $.each($('input[name="question-1]":checked'), function () {
            if ($(this).val() == triviaQs[1].corrAns) {
                triviaGame.correctAns++;
            } else {
                triviaGame.incorrectAns++;
            }
        });
        $.each($('input[name="question-2]":checked'), function () {
            if ($(this).val() == triviaQs[2].corrAns) {
                triviaGame.correctAns++;
            } else {
                triviaGame.incorrectAns++;
            }
        });
        $.each($('input[name="question-3]":checked'), function () {
            if ($(this).val() == triviaQs[3].corrAns) {
                triviaGame.correctAns++;
            } else {
                triviaGame.incorrectAns++;
            }
        });
        $.each($('input[name="question-4]":checked'), function () {
            if ($(this).val() == triviaQs[4].corrAns) {
                triviaGame.correctAns++;
            } else {
                triviaGame.incorrectAns++;
            }
        });
        $.each($('input[name="question-5]":checked'), function () {
            if ($(this).val() == triviaQs[5].corrAns) {
                triviaGame.correctAns++;
            } else {
                triviaGame.incorrectAns++;
            }
        });
        $.each($('input[name="question-6]":checked'), function () {
            if ($(this).val() == triviaQs[6].corrAns) {
                triviaGame.correctAns++;
            } else {
                triviaGame.incorrectAns++;
            }
        });
        $.each($('input[name="question-7]":checked'), function () {
            if ($(this).val() == triviaQs[7].corrAns) {
                triviaGame.correctAns++;
            } else {
                triviaGame.incorrectAns++;
            }
        });
        $.each($('input[name="question-8]":checked'), function () {
            if ($(this).val() == triviaQs[8].corrAns) {
                triviaGame.correctAns++;
            } else {
                triviaGame.incorrectAns++;
            }
        });
        $.each($('input[name="question-9]":checked'), function () {
            if ($(this).val() == triviaQs[9].corrAns) {
                triviaGame.correctAns++;
            } else {
                triviaGame.incorrectAns++;
            }
        });
        // display results in my results location and clear my timer from continue to count down
        this.result();
    },
    result: function(){
        clearInterval(gameClock);
        // remove you timer
        $('#timeClock h4').remove();
        // let you know you are done
        $('#timeClock').html("<h2>You are done!</h2>")
        // display all your correct and incorrect
        $('.results').append("<h3>Correct Answers:  "+this.correctAns+"</h3>");
        $('.results').append("<h3>Incorrect Answers:  "+this.incorrectAns+"</h3>");

    }

}



    // what happens when the user selects correct answer
    // what happens when the user slects wrong answer



/// at the end of the 9 questions, show the results from the answeres 
