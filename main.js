import GameLogic from './Javascript/GameLogic.js';

document.addEventListener('DOMContentLoaded', () => {
  const resetBtn = document.querySelector('#resetBtn');

  const gameLogic = new GameLogic();

  // Saving the instance globally for testing
  window.__gameLogic__ = gameLogic;

  document.addEventListener('click', (e) => {
    const clickedElement = e.target.closest('.rps');
    if (clickedElement) {
      const pad = clickedElement.id;
      gameLogic.playHandler(pad);
    }
  });

  resetBtn.addEventListener('click', gameLogic.resetLogic.bind(gameLogic));
});
