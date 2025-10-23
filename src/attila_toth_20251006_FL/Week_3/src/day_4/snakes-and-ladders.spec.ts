import { SnakesAndLadders } from './snakes-and-ladders';
import { defaultPortals } from './constants';

describe('Snakes and Ladders Game', () => {
    describe('play', () => {
        it('should reach 100 through the portals', () => {
            const game = new SnakesAndLadders(100, defaultPortals);
            game.play(1, 1); //38
            game.play(5, 5); //48
            game.play(1, 2); //67
            game.play(1, 3); //91
            game.play(1, 3); //75 snake
            game.play(1, 2); //98

            expect(game.play(1, 1)).toBe('Player is on square 100');
        });
    });
});
