var HighScore = document.querySelector("#Highscore")
var Clear = document.querySelector("#Clear")
var GoBack = document.querySelector("#GoBack")

// local storage for highScores
var allHighScores = localStorage.getItem("allHighScores")
allHighScores = JSON.parse(allHighScores)

if (allHighScores !== null) {

    for (var i = 0; i < allHighScores.length; i++) {
        var createLi = document.createElement("li")
        createLi.textContent = allHighScores[i].initials + " " + allHighScores[i].score
        HighScore.appendChild(createLi)
    }
}

// Used to clear scores
Clear.addEventListener("click", function () {
    localStorage.clear()
    location.reload()
})

// Used to move to index page
GoBack.addEventListener("click", function () {
    window.location.replace("./index.html")
})