import { SnakesAndLadders } from './snakes-and-ladders';
import { gameOverMessage } from './constants';

describe('Snakes and Ladders Game', () => {
    describe('play', () => {
        it('should return 38 for rolling 2', () => {
            const game = new SnakesAndLadders();
            const result = game.play(1, 1);
            expect(result).toBe('Player 1 is on square 38');
        });

        it('should return 3 for rolling 3', () => {
            const game = new SnakesAndLadders();
            const result = game.play(1, 2);
            expect(result).toBe('Player 1 is on square 3');
        });

        it('should return 14 for rolling 7', () => {
            const game = new SnakesAndLadders();
            const result = game.play(3, 4);
            expect(result).toBe('Player 1 is on square 14');
        });

        it('should return 40 for rolling 2 twice', () => {
            const game = new SnakesAndLadders();
            expect(game.play(1, 1)).toBe('Player 1 is on square 38');
            expect(game.play(1, 1)).toBe('Player 1 is on square 40');
        });

        it('should return 100 for rolling 2x1 if the player starts from 98', () => {
            const game = new SnakesAndLadders();
            game.play(98, 0); // Move Player 1 to square 98
            game.play(1, 2); // Player 2 is on square 3

            expect(game.play(1, 1)).toBe('Player 1 Wins!');
        });

        it('should return Game over for a roll after a player has already won', () => {
            const game = new SnakesAndLadders();
            game.play(100, 0); // Move Player 1 to square 98
            game.play(1, 2); // Player 2 is on square 3

            expect(game.play(1, 1)).toBe(gameOverMessage);
        });
    });
});
