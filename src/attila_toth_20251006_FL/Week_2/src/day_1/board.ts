import { deadCell, defaultColumns, defaultRows } from './constants';

export class Board {
    #grid: string[][];

    get grid(): string[][] {
        return this.#grid;
    }

    constructor(
        private rows: number = defaultRows,
        private cols: number = defaultColumns
    ) {
        this.#grid = this.createGrid();
    }

    createGrid(): string[][] {
        const board: string[][] = [];
        for (let row = 0; row < this.rows; row++) {
            const row: string[] = [];
            for (let column = 0; column < this.cols; column++) {
                row.push(deadCell);
            }
            board.push(row);
        }
        return board;
    }

    setupGrid(grid: string[][]) {
        this.#grid = grid;
    }
}
