// Declare variables
var score = 0
var questionIndex = 0
var currentTime = document.querySelector("#currentTime")
var timer = document.querySelector("#startTime")
var questionsDiv = document.querySelector("#questionsDiv")
var wrapper = document.querySelector("#wrapper")
var secondsLeft = 80
//Interval time 
var holdInterval = 0
// penalty time
var penalty = 10
var ulCreate = document.createElement("ul")

// Array for questions 
var questions = [
    {
        title: "A very useful tool used during development and debugging for printing content to the the debugger is:",
        choices: ["JavaScript", "Terminal / Bash", "For loops", "Console log"],
        answer: "Console log"
    },
    {
        title: "String values must be enclosed withing _____ when being assigned to variables.",
        choices: ["Commas", "Curly brackets", "Quotes", "Parenthesis"],
        answer: "Quotes"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        answer: "All of the above"
    },
    {
        title: "The condition in an if / else statement is enclosed withing ____.",
        choices: ["Quotes", "Curly brackets", "Parenthesis", "Square brackets"],
        answer: "parenthesis"
    },
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
]


