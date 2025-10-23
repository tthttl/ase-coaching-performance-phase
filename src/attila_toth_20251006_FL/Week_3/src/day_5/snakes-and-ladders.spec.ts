import { SnakesAndLadders } from './snakes-and-ladders';
import { Player } from './player';
import { defaultSquares } from './constants';

describe('Snakes and Ladders Game', () => {
    describe('play', () => {
        it('should correctly handle 4 players', () => {
            const player1 = new Player('Player 1');
            const player2 = new Player('Player 2');
            const player3 = new Player('Player 3');
            const player4 = new Player('Player 4');
            const players = [player1, player2, player3, player4];
            const game = new SnakesAndLadders(players);
            expect(game.play(1, 1)).toBe('Player 1 is on square 38'); // Player 1 => Double roll
            expect(game.play(2, 3)).toBe('Player 1 is on square 43'); // Player 1

            expect(game.play(4, 4)).toBe('Player 2 is on square 31'); // Player 2 => Double roll
            expect(game.play(5, 1)).toBe('Player 2 is on square 37'); // Player 2

            expect(game.play(6, 6)).toBe('Player 3 is on square 12'); // Player 3 => Double roll
            expect(game.play(2, 2)).toBe('Player 3 is on square 6'); // Player 3 => Double roll => Snake to 6
            expect(game.play(1, 3)).toBe('Player 3 is on square 10'); // Player 3

            expect(game.play(6, 2)).toBe('Player 4 is on square 31'); // Player 4

            expect(game.play(3, 3)).toBe('Player 1 is on square 11'); // Player 1 => Double roll => Snake to 11
            expect(game.play(4, 2)).toBe('Player 1 is on square 17'); // Player 1
        });

        //Validation is not implemented for testing purposes :)
        it('should handle different boards', () => {
            const largerBoard = [...defaultSquares, 101, 102, 103];
            const player1 = new Player('Player 1', largerBoard);
            const player2 = new Player('Player 2', largerBoard);
            const player3 = new Player('Player 3', largerBoard);
            const players = [player1, player2, player3];
            const game = new SnakesAndLadders(players);
            expect(game.play(98, 1)).toBe('Player 1 is on square 80');
            expect(game.play(98, 4)).toBe('Player 2 is on square 102');
            expect(game.play(98, 6)).toBe('Player 3 is on square 102'); //Backstep
            expect(game.play(2, 3)).toBe('Player 1 is on square 85');
            expect(game.play(1, 0)).toBe('Player 2 wins!'); // 102 + 1 + 0 = 103
        });
    });
});
