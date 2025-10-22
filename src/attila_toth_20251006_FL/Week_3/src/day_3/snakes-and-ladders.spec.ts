import { SnakesAndLadders } from './snakes-and-ladders';
import { gameOverMessage } from './constants';

describe('Snakes and Ladders Game', () => {
    describe('play', () => {
        it('should return 100', () => {
            const game = new SnakesAndLadders();
            game.play(98, 0);
            game.play(1, 2);

            expect(game.play(1, 1)).toBe('Player 1 Wins!');
        });

        it('should return gameover', () => {
            const game = new SnakesAndLadders();
            game.play(100, 0);
            game.play(1, 2);

            expect(game.play(1, 1)).toBe(gameOverMessage);
        });

        it('should return 80 for an overflowing roll', () => {
            const game = new SnakesAndLadders();
            game.play(98, 0);
            game.play(1, 2);

            expect(game.play(1, 2)).toBe('Player 1 is on square 80');
        });

        it('position should remain the same for an overflowing roll', () => {
            const game = new SnakesAndLadders();
            game.play(98, 0);
            game.play(1, 2);

            expect(game.play(1, 3)).toBe('Player 1 is on square 98');
        });
    });
});
