var questions = [
    {
        question: "How long is a professional football field?",
        choiceA: "120 yards",
        choiceB: "130 yards",
        choiceC: "90 yards",
        choiceD: "100 yards",
        correctAnswer: "120 yards",
    },
    {
        question: "How long is a standard NFL football?",
        choiceA: "10 inches",
        choiceB: "11 inches",
        choiceC: "12 inches",
        choiceD: "13 inches",
        correctAnswer: "11 inches",
    },
    {
        question: "How many downs does an offense get before they lose possesion?",
        choiceA: "2",
        choiceB: "3",
        choiceC: "4",
        choiceD: "5",
        correctAnswer: "4",
    },
    {
        question: "Which one of these positions is NOT in football?",
        choiceA: "Tightend",
        choiceB: "Shortstop",
        choiceC: "Quarterback",
        choiceD: "Cornerback",
        correctAnswer: "Shortstop",
    },
    {
        question: "How many points does a touchdown score?",
        choiceA: "5",
        choiceB: "6",
        choiceC: "7",
        choiceD: "8",
        correctAnswer: "6",
    },
    {
        question: "Which NFL team has the most Super Bowl rings?",
        choiceA: "Philadelphia Eagles",
        choiceB: "New England Patriots",
        choiceC: "San Francisco 49ers",
        choiceD: "Pittsburgh Steelers",
        correctAnswer: "Pittsburgh Steelers",
    },
    {
        question: "Who has the most rushing touchdowns in NFL history?",
        choiceA: "Emmitt Smith",
        choiceB: "Jim Brown",
        choiceC: "Barry Sanders",
        choiceD: "Hershel Walker",
        correctAnswer: "Emmitt Smith",
    },
    {
        question: "Who holds the record for most points scored in the NFL?",
        choiceA: "Tom Brady",
        choiceB: "Peyton Manning",
        choiceC: "Morten Anderson",
        choiceD: "Adam Vinatieri",
        correctAnswer: "Adam Vinatieri",
    },
    {
        question: "Who won the first NFL MVP title?",
        choiceA: "Johnny Unitas",
        choiceB: "Jim Brown",
        choiceC: "Norm Van Brocklin",
        choiceD: "Paul Hornung",
        correctAnswer: "Jim Brown",
    },
    {
        question: "Who rushed for the most yards in a single game?",
        choiceA: "Jamal Lewis",
        choiceB: "Corey Dillon",
        choiceC: "Jerome Harrison",
        choiceD: "Adrian Peterson",
        correctAnswer: "Adrian Peterson",
    }
]

var question = $("#question");
var choiceA = $("#choiceA");
var choiceB = $("#choiceB");
var choiceC = $("#choiceC");
var choiceD = $("#choiceD");
var correctDiv = $("#correct");
var incorrectDiv = $("#incorrect");
var incorrect = 0;
var correct = 0;
var i = 0;
var counter = 5;

var myInterval;


function resetCounter() {
    counter = 30;
    $("#timer").text(counter);
}

function timeIt() {
    counter--;
    $("#timer").text(counter);
    if (counter <= 0) {
        alert("Time's Up!");
        incorrect++;
        i++;
        clearInterval(myInterval);
        resetCounter();
        setQuestion();
    }
}


$("#playButton").on("click", function () {
    setQuestion();
})


function setQuestion() {
    if (i < 10) {
        myInterval = setInterval(timeIt, 1000);
        question.text(questions[i].question);
        choiceA.text(questions[i].choiceA);
        choiceA.attr("x", questions[i].choiceA);
        choiceB.text(questions[i].choiceB);
        choiceB.attr("x", questions[i].choiceB);
        choiceC.text(questions[i].choiceC);
        choiceC.attr("x", questions[i].choiceC);
        choiceD.text(questions[i].choiceD);
        choiceD.attr("x", questions[i].choiceD);
        // if (i > 10) {
            // make modal pop up
        // }
    }
}

choiceA.on("click", function () {
    if (choiceA.attr("x") == questions[i].correctAnswer) {
        alert("Great choice! That's right!")
        correct++;
        i++;
        clearInterval(myInterval);
        resetCounter();
        setQuestion();
        correctDiv.text("Correct: " + correct);

    } else {
        alert("Sorry! That's wrong!");
        incorrect++;
        i++;
        clearInterval(myInterval);
        resetCounter();
        setQuestion();
        incorrectDiv.text("Incorrect: " + incorrect);
    }
})

choiceB.on("click", function () {
    if (choiceB.attr("x") == questions[i].correctAnswer) {
        alert("Great choice! That's right!")
        correct++;
        i++;
        clearInterval(myInterval);
        resetCounter();
        setQuestion();
        correctDiv.text("Correct: " + correct);
    } else {
        alert("Sorry! That's wrong!");
        incorrect++;
        i++;
        clearInterval(myInterval);
        resetCounter();
        setQuestion();
        incorrectDiv.text("Incorrect: " + incorrect);
    }
})

choiceC.on("click", function () {
    if (choiceC.attr("x") == questions[i].correctAnswer) {
        alert("Great choice! That's right!")
        correct++;
        i++;
        clearInterval(myInterval);
        resetCounter();
        setQuestion();
        correctDiv.text("Correct: " + correct);
    } else {
        alert("Sorry! That's wrong!");
        incorrect++;
        i++;
        clearInterval(myInterval);
        resetCounter();
        setQuestion();
        incorrectDiv.text("Incorrect: " + incorrect);
    }
})

choiceD.on("click", function () {
    if (choiceD.attr("x") == questions[i].correctAnswer) {
        alert("Great choice! That's right!")
        correct++;
        i++;
        clearInterval(myInterval);
        resetCounter();
        setQuestion();
        correctDiv.text("Correct: " + correct);
    } else {
        alert("Sorry! That's wrong!");
        incorrect++;
        i++;
        clearInterval(myInterval);
        resetCounter();
        setQuestion();
        incorrectDiv.text("Incorrect: " + incorrect);
    }
})

