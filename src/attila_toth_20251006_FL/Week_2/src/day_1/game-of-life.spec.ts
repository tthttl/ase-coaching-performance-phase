import { GameOfLife } from './game-of-life';

describe('Game of Life', () => {
    let game: GameOfLife;

    beforeEach(() => {
        game = new GameOfLife();
    });

    it('should return the default board size with only dead cells', () => {
        expect(game.playRound()).toEqual([
            ['0', '0', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '0'],
        ]);
    });

    it('should return a custom board size with only dead cells', () => {
        expect(new GameOfLife(5, 5).playRound()).toEqual([
            ['0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0'],
        ]);
    });

    it('should return a custom board size with only dead cells', () => {
        const game = new GameOfLife();
        const startingBoard = ['0,1,0,1,0', '0,0,0,0,0', '0,1,0,1,0', '0,0,0,0,0', '0,1,0,1,0'];
        game.setBoard(startingBoard);
        expect(game.getBoard()).toEqual(startingBoard);
    });

    it('if there is only one cell alive, it should die', () => {});
});
