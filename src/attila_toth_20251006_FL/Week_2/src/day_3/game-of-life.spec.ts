import { GameOfLife } from './game-of-life';

describe('Game of Life', () => {
    const initialBoard = [
        '0,1,0,1,0', //
        '0,0,0,0,0', //
        '0,1,0,1,0', //
        '0,0,0,0,0', //
        '0,1,0,1,0', //
    ];
    describe('render', () => {
        it('should return the initial board', () => {
            expect(new GameOfLife(initialBoard).render()).toEqual(initialBoard);
        });

        it('should calculate the next generation => all cells are isolated, they should die', () => {
            const game = new GameOfLife(initialBoard);
            game.tick();

            expect(game.render()).toEqual([
                '0,0,0,0,0', //
                '0,0,0,0,0', //
                '0,0,0,0,0', //
                '0,0,0,0,0', //
                '0,0,0,0,0', //
            ]);
        });

        it('should calculate the next generation', () => {
            const game = new GameOfLife([
                '0,1,0,0,0', //
                '0,1,1,0,0', //
                '0,1,0,0,1', //
                '0,0,0,1,0', //
                '0,0,0,1,1', //
            ]);
            game.tick();

            expect(game.render()).toEqual([
                '0,1,1,0,0', //
                '1,1,1,0,0', //
                '0,1,0,1,0', //
                '0,0,1,1,0', //
                '0,0,0,1,1', //
            ]);
        });
    });
});
