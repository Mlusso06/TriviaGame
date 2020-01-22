// You'll create a trivia game that shows only one question until the player answers it or their time runs out.
// * If the player selects the correct answer, 
//show a screen congratulating them for choosing the right option. /
//After a few seconds, display the next question -- do this without user input.
// * The scenario is similar for wrong answers and time-outs.
//   * If the player runs out of time, tell the player that time's up and display the correct answer.
// Wait a few seconds, then show the next question.
//   * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer./
// Wait a few seconds, then show the next question.
// * On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).



// list of Global varibles

var correctAns = 0;
var incorrectAns = 0;


//----

// start Trivia game function
// need my start button to be removed from the page after "click" and start the game
$('.startBtn').on('click', function () {
    $('.startBtn').remove();
    // need a for loop to run through each of my questions, and make them appear on the Html page
    for (var i = 0; i < triviaQs.length; i++) {
        $('#questDisplay').append('<h5>' + triviaQs[i].question + '</h5>');
        // my second loop to revew the answers that the user can select
        for (var j = 0; j < triviaQs[i].selections.length; j++) {
            $("#questDisplay").append("<input type='radio' name='question-" + i + "' value='" + triviaQs[i].selections[j] + "'>" + triviaQs[i].selections[j])
        }
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


// need to show only one queston at a time


// verify the correct button was selected correct answer === radio button selected === true
//function myFunction() {
    //     var x = document.getElementById("myRadio").checked;
    //     document.getElementById("demo").innerHTML = x;
    //   }




    // show questions and multiple choice answers on web page with radio slectors 
        // need a timer for the user to select the correct answer
    // what happens when the user selects correct answer
    // what happens when the user slects wrong answer
        // need a timer after wrong answer


/// at the end of the 15 questions, show the results from the answeres 
