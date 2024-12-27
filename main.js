import GameLogic from './Javascript/GameLogic.js'

document.addEventListener("DOMContentLoaded", ()=> {
    const gamePad = document.querySelector(".game-pad")
    const resetBtn = document.querySelector("#resetBtn")


    const gameLogic = new GameLogic()



    document.addEventListener("click", (e) => {

        const clickedElement = e.target.closest(".rps")

        if (clickedElement) {
            const pad = clickedElement.id
            gameLogic.playHandler(pad)
        }

    })
    





    resetBtn.addEventListener("click", gameLogic.resetLogic.bind(gameLogic))


})


