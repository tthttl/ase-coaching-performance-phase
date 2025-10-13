import { Board } from './board';
import { defaultColumns, defaultRows } from './constants';

export class GameOfLife {
    #board: Board; //unnecessary abstraction
    #grid: string[][] = [];

    //Deprecated :)
    constructor(
        private rows: number = defaultRows,
        private cols: number = defaultColumns
    ) {
        this.#board = new Board(rows, cols);
    }

    //Deprecated :)
    playRound(): string[][] {
        return this.#board.grid;
    }

    setBoard(positions: string[]) {
        for (let row = 0; row < positions.length; row++) {
            this.#grid[row] = positions[row].split(',');
        }
    }

    getBoard() {
        return this.#grid.map((row) => row.join(','));
    }

    moveToNextGeneration() {}
}
