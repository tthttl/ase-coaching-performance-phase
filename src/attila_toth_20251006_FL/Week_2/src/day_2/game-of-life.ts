import {
    Cell,
    CellStates,
    Directions,
    neighborsCountNeededToLive,
    neighborsCountNeededToRevive,
    separator,
} from './constants';

export class GameOfLife {
    #grid: Cell[][] = [];

    constructor(positions: string[]) {
        for (let row = 0; row < positions.length; row++) {
            this.#grid[row] = positions[row].split(separator) as Cell[];
        }
    }

    getBoard(): string[] {
        return this.#grid.map((row) => row.join(separator));
    }

    moveToNextGeneration(): void {
        const nextGeneration: Cell[][] = [];
        for (let row = 0; row < this.#grid.length; row++) {
            nextGeneration[row] = [];
            for (let col = 0; col < this.#grid[row].length; col++) {
                const livingNeighborsCount = this.calculateLivingNeighbors(row, col);
                nextGeneration[row][col] = this.calculateNextCellState(this.#grid[row][col], livingNeighborsCount);
            }
        }
        this.#grid = nextGeneration;
    }

    calculateLivingNeighbors(row: number, col: number): number {
        let count = 0;
        for (const direction of Object.values(Directions)) {
            if (this.#grid[row + direction[0]]?.[col + direction[1]] === CellStates.alive) {
                count++;
            }
        }
        return count;
    }

    calculateNextCellState(cell: Cell, livingNeighborsCount: number): Cell {
        if (cell === CellStates.alive) {
            if (neighborsCountNeededToLive.includes(livingNeighborsCount)) {
                return CellStates.alive;
            }
            return CellStates.dead;
        } else {
            if (livingNeighborsCount === neighborsCountNeededToRevive) {
                return CellStates.alive;
            }
        }
        return CellStates.dead;
    }
}
