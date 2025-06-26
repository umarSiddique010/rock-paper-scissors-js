import { beforeEach, describe, expect, it } from 'vitest';
import GameUI from '../Javascript/GameUI';

let ui = null;

beforeEach(() => {
  document.body.innerHTML = `
        <p id="liveFeedback"></p>
        <div class="result-container hidden">
        <p id="resultMsg"></p>
        </div>
         `;

  ui = new GameUI();
});

describe('GameUI', () => {
  describe('liveScore()', () => {
    it('should update liveFeedback with correct message', () => {
      ui.liveScore('You win', 2, 3, 'paper', 'scissors');

      const expected = `You choose SCISSORS and computer choose PAPER  \n You win. \n \n Your score : 3 \n Computer score : 2`;

      expect(document.querySelector('#liveFeedback').textContent).toBe(
        expected
      );
    });
  });

  describe('resultBox()', () => {
    it('should remove hidden class from "result-container" class, and shows computer and human scores in "resultMsg" ID', () => {
      ui.resultBox('You won the Match!🎉', 4, 5);
      const resultContainer = document.querySelector('.result-container');
      const resultMsg = document.querySelector('#resultMsg');

      const expected = `You won the Match!🎉.\n Your score : 5 \n Computer score : 4`;

      expect(resultMsg.textContent).toBe(expected);
      expect(resultContainer.classList.contains('hidden')).toBe(false);
    });
  });

  describe('resetUI()', () => {
    it('should clear text inside "liveFeedback", "resultMsg" IDs and add hidden class to "result-container"', () => {
      const liveFeedback = document.querySelector('#liveFeedback');
      const resultMsg = document.querySelector('#resultMsg');
      const resultContainer = document.querySelector('.result-container');

      liveFeedback.textContent = 'some live feedback text';
      resultMsg.textContent = 'some message';
      resultContainer.classList.remove('hidden');

      ui.resetUI();

      expect(liveFeedback.textContent).toBe('');
      expect(resultMsg.textContent).toBe('');
      expect(resultContainer.classList.contains('hidden')).toBe(true);
    });
  });
});
