import { describe, it, expect, beforeEach, vi } from 'vitest';
import GameLogic from '../Javascript/GameLogic.js';

vi.mock('../Javascript/GameUI.js', () => {
  return {
    default: vi.fn().mockImplementation(() => ({
      liveScore: vi.fn(),
      resultBox: vi.fn(),
      resetUI: vi.fn(),
    })),
  };
});

let game = null;

beforeEach(() => {
  game = new GameLogic();
});

describe('GameLogic', () => {
  describe('checkWin()', () => {
    it('should call liveScore with "Draw!" if both choices are the same', () => {
      game.checkWin('rock', 'rock');
      const [message] = game.gameUI.liveScore.mock.calls[0];
      expect(message).toBe('Draw!');
    });

    it('should call liveScore with "You win" if human beats the computer', () => {
      game.checkWin('rock', 'paper');

      const [message] = game.gameUI.liveScore.mock.calls[0];
      expect(message).toBe('You win');
    });

    it('should call liveScore with "Computer win" if computer beats the human', () => {
      game.checkWin('scissors', 'paper');

      const [message] = game.gameUI.liveScore.mock.calls[0];
      expect(message).toBe('Computer win');
    });
  });

  describe('gameOver()', () => {
    it('should call resultBox with a win message if humanScore >= 5', () => {
      game.humanScore = 5;
      game.gameOver();

      const [message] = game.gameUI.resultBox.mock.calls[0];
      expect(message).toBe('You won the Match!🎉');
    });

    it('should call resultBox with a loss message if computerScore >= 5', () => {
      game.computerScore = 5;
      game.gameOver();

      const [message] = game.gameUI.resultBox.mock.calls[0];
      expect(message).toBe('Computer won the Match!, Better Luck Next Time!🙂');
    });

    it('should reset scores to 0 and call resetUI()', () => {
      game.humanScore = 4;
      game.computerScore = 3;

      game.resetLogic();

      expect(game.humanScore).toBe(0);
      expect(game.computerScore).toBe(0);
      expect(game.gameUI.resetUI).toHaveBeenCalled();
    });
  });

  describe('playHandler()', () => {
    it('should check computer choice, human choice and checkWin with correct value', () => {
      const spyComputer = vi
        .spyOn(game, 'computerChoice')
        .mockReturnValue('rock');
      const spyHuman = vi.spyOn(game, 'humanChoice').mockReturnValue('paper');
      const spyCheckWin = vi.spyOn(game, 'checkWin');

      game.playHandler('paper');

      expect(spyComputer).toHaveBeenCalled();
      expect(spyHuman).toHaveBeenCalledWith('paper');
      expect(spyCheckWin).toHaveBeenCalledWith('rock', 'paper');
    });
  });
});
