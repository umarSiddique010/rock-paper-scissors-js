export default class GameUI {
    constructor() {
        this.liveFeedback = document.querySelector("#liveFeedback")
        this.resultMsg = document.querySelector("#resultMsg")
        this.resultContainer = document.querySelector(".result-container")
    }





liveScore(liveMsg, computerScore, humanScore) {
    this.liveFeedback.textContent = `${liveMsg}. \n Your score : ${humanScore} \n Computer score : ${computerScore}`
}   


resultBox(resultMsg, computerScore, humanScore) {
    this.resultContainer.classList.remove("hidden")
    this.resultMsg.textContent = `${resultMsg}.\n Your score : ${humanScore} \n Computer score : ${computerScore}`
}  


resetUI() {
    this.liveFeedback.textContent = ""
    this.resultMsg.textContent = ""
    this.resultContainer.classList.add("hidden")
}

}