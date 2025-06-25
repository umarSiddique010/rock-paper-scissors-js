import GameUI from "./GameUI.js";

export default class GameLogic {
  constructor() {
    this.gameUI = new GameUI();

    this.humanScore = 0;
    this.computerScore = 0;

    this.CHOICE = {
      rock: "rock",
      paper: "paper",
      scissors: "scissors",
    };
  }

  computerChoice() {
    const choices = [this.CHOICE.rock, this.CHOICE.paper, this.CHOICE.scissors];
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
  }

  humanChoice(buttonId) {
    return buttonId;
  }

  checkWin(computerChoice, humanChoice) {
    if (this.humanScore < 5 && this.computerScore < 5) {
      if (computerChoice === humanChoice) {
        this.gameUI.liveScore(
          "Draw!",
          this.computerScore,
          this.humanScore,
          computerChoice,
          humanChoice
        );
      } else if (
        (computerChoice === this.CHOICE.rock &&
          humanChoice === this.CHOICE.paper) ||
        (computerChoice === this.CHOICE.paper &&
          humanChoice === this.CHOICE.scissors) ||
        (computerChoice === this.CHOICE.scissors &&
          humanChoice === this.CHOICE.rock)
      ) {
        this.humanScore++;
        this.gameUI.liveScore(
          "You win",
          this.computerScore,
          this.humanScore,
          computerChoice,
          humanChoice
        );
      } else {
        this.computerScore++;
        this.gameUI.liveScore(
          "Computer win",
          this.computerScore,
          this.humanScore,
          computerChoice,
          humanChoice
        );
      }
    }

    if (this.computerScore >= 5 || this.humanScore >= 5) {
      this.gameOver();
    }
  }

  gameOver() {
    if (this.humanScore >= 5) {
      this.gameUI.resultBox(
        "You won the Match!🎉",
        this.computerScore,
        this.humanScore
      );
      return true;
    } else if (this.computerScore >= 5) {
      this.gameUI.resultBox(
        "Computer won the Match!, Better Luck Next Time!🙂",
        this.computerScore,
        this.humanScore
      );
      return true;
    } else {
      this.gameUI.resultBox(
        "It's Tie! 🤝",
        this.computerScore,
        this.humanScore
      );
      return true;
    }
  }

  resetLogic() {
    this.humanScore = 0;
    this.computerScore = 0;
    this.gameUI.resetUI();
  }

  playHandler(pad) {
    const computerChoice = this.computerChoice();
    const humanChoice = this.humanChoice(pad);
    this.checkWin(computerChoice, humanChoice);
  }
}
