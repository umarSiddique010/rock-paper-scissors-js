import { beforeEach, describe, expect, it } from 'vitest';
import '../main.js';
import GameLogic from '../Javascript/GameLogic.js';

describe('User interaction', () => {
  beforeEach(() => {
    document.body.innerHTML = `
  <div>
    <button class="rps" id="rock">
      <img src="./assets/rock.png" alt="Rock" />
    </button>
    <button class="rps" id="paper">
          <img src="./assets/paper.png" alt="Paper" />
    </button>
    <button class="rps" id="scissors">
          <img src="./assets/scissors.png" alt="Scissors" />
    </button>
    <p id="liveFeedback">Some feedback text</p>
    <div class="result-container hidden">
        <p id="resultMsg">Old result</p>
    </div>
    <button id="resetBtn">Reset</button>

  </div>
`;

    document.dispatchEvent(new Event('DOMContentLoaded'));
  });

  it('should trigger playHandler() when rock button is clicked', () => {
    const rockBtn = document.querySelector('#rock');
    rockBtn.click();

    const feedback = document.querySelector('#liveFeedback').textContent;

    expect(feedback).toMatch(/rock/i);
  });

  it('should trigger playHandler() when paper button is clicked', () => {
    const paperBtn = document.querySelector('#paper');
    paperBtn.click();

    const feedback = document.querySelector('#liveFeedback').textContent;

    expect(feedback).toMatch(/paper/i);
  });

  if (
    ('should trigger playHandler() when scissors button is click',
    () => {
      const scissorsBtn = document.querySelector('#scissors');
      scissorsBtn.click();

      const feedback = document.querySelector('#liveFeedback').textContent;

      expect(feedback).toMatch(/scissors/i);
    })
  )
    it('should reset the UI when reset button is clicked', () => {
      const resetBtn = document.querySelector('#resetBtn');
      const resultContainer = document.querySelector('.result-container');
      const resultMsg = document.querySelector('#resultMsg');
      const liveFeedback = document.querySelector('#liveFeedback');
      const game = window.__gameLogic__ || new GameLogic();

      resultContainer.classList.remove('hidden');
      resultMsg.textContent = 'Some win message';
      liveFeedback.textContent = 'Some round result';
      game.humanScore = 4;
      game.computerScore = 3;
      resetBtn.click();

      expect(liveFeedback.textContent).toBe('');
      expect(resultMsg.textContent).toBe('');
      expect(resultContainer.classList.contains('hidden')).toBe(true);
      expect(game.humanScore).toBe(0);
      expect(game.computerScore).toBe(0);
    });
});
