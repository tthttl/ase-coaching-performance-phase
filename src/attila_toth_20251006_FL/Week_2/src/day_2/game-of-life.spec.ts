import { GameOfLife } from './game-of-life';
import { CellStates } from './constants';

describe('Game of Life', () => {
    const initialBoard = [
        '0,1,0,1,0', //
        '0,0,0,0,0', //
        '0,1,0,1,0', //
        '0,0,0,0,0', //
        '0,1,0,1,0', //
    ];
    describe('getBoard', () => {
        it('should return the initial board', () => {
            expect(new GameOfLife(initialBoard).getBoard()).toEqual(initialBoard);
        });

        it('should calculate the next generation => all cells are isolated, they should die', () => {
            const game = new GameOfLife(initialBoard);
            game.moveToNextGeneration();

            expect(game.getBoard()).toEqual([
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
            game.moveToNextGeneration();

            expect(game.getBoard()).toEqual([
                '0,1,1,0,0', //
                '1,1,1,0,0', //
                '0,1,0,1,0', //
                '0,0,1,1,0', //
                '0,0,0,1,1', //
            ]);
        });
    });

    describe('getNeighbors', () => {
        it('should return the living neighbors of the cell in the middle => 2', () => {
            expect(new GameOfLife(initialBoard).calculateLivingNeighbors(2, 2)).toEqual(2);
        });
    });

    describe('calculateNextCellState', () => {
        it('should return the next state of a living cell with 2 living neighbors => alive', () => {
            expect(new GameOfLife(initialBoard).calculateNextCellState(CellStates.alive, 2)).toEqual(CellStates.alive);
        });

        it('should return the next state of a living cell with 3 living neighbors => alive', () => {
            expect(new GameOfLife(initialBoard).calculateNextCellState(CellStates.alive, 3)).toEqual(CellStates.alive);
        });

        it('should return the next state of a living cell with 1 living neighbors => dead', () => {
            expect(new GameOfLife(initialBoard).calculateNextCellState(CellStates.alive, 1)).toEqual(CellStates.dead);
        });

        it('should return the next state of a living cell with 4 living neighbors => dead', () => {
            expect(new GameOfLife(initialBoard).calculateNextCellState(CellStates.alive, 4)).toEqual(CellStates.dead);
        });

        it('should return the next state of a dead cell with 3 living neighbors => dead', () => {
            expect(new GameOfLife(initialBoard).calculateNextCellState(CellStates.dead, 3)).toEqual(CellStates.alive);
        });

        it('should return the next state of a dead cell with 2 living neighbors => dead', () => {
            expect(new GameOfLife(initialBoard).calculateNextCellState(CellStates.dead, 2)).toEqual(CellStates.dead);
        });

        it('should return the next state of a dead cell with 4 living neighbors => dead', () => {
            expect(new GameOfLife(initialBoard).calculateNextCellState(CellStates.dead, 4)).toEqual(CellStates.dead);
        });
    });
});
