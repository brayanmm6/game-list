import{gameSinopses} from "../js/data.js"

const gameInfoContainer = document.querySelector(".game-info-container")
const gameListButton = document.querySelectorAll(".game-list-button")
const gameImage = document.getElementById("game-image")
const gameSinopse = document.querySelector(".sinopse-text")
const gameName = document.querySelector(".game-name")

let gameSearch = null
gameInfoContainer.classList.add("empty-container")

gameListButton.forEach((item) => {
    item.addEventListener("click", () => {
        gameInfoContainer.classList.remove("empty-container")
        gameSinopses.filter((gameList) => {
            gameSearch = gameList.game === item.value
            if(gameSearch){
                gameSearch = gameList
                gameImage.src = gameSearch.image
                gameName.innerHTML = gameSearch.game
                gameSinopse.innerHTML = gameSearch.sinopse
            }else{
                return gameSearch = "Valor inválido."
            }
            
        })
        
    })
})

const nighModeButton = document.getElementById("night-mode-button")
const bodyContainer = document.querySelector(".body-container")

nighModeButton.addEventListener("click", () => {
    if(nighModeButton.checked){
        bodyContainer.classList.add("night-mode")
    }else{
        bodyContainer.classList.remove("night-mode")
    }
})