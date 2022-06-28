var Highscore = document.querySelector("#Highscore")
var clear = document.querySelector("#Clear")
var GoBack = document.querySelector("#GoBack")

// local storage for highscores
var allHighscores = localStorage.getItem("allHighscores")
allHighscores = JSON.parse(allHighscores)

if (allHighscores !== null) {

    for (var i = 0; i < allHighscores.length; i++) {

        var createLi = document.createElement("li")
        createLi.textContent = allHighscores[i].intiials + " " + allHighscores[i].score
        Highscore.appendChild(createLi)
    }
}

// Used to clear scores
clear.addEventListener("click", function () {
    localStorage.clear()
    location.reload()
})

// Used to move to index page
GoBack.addEventListener("click", function () {
    window.location.replace("./index.html")
})