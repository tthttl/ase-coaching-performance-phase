import { CellState, CellStates, Neighbors, separator } from './constants';
import { Cell } from './cell';

export class Board {
    #currentGeneration: CellState[][] = [];

    constructor(positions: string[]) {
        for (let row = 0; row < positions.length; row++) {
            this.#currentGeneration[row] = positions[row].split(separator) as CellState[];
        }
    }

    get currentGeneration(): string[] {
        return this.#currentGeneration.map((row) => row.join(separator));
    }

    moveToNextGeneration(): void {
        const nextGeneration: CellState[][] = [];
        for (let row = 0; row < this.#currentGeneration.length; row++) {
            nextGeneration[row] = [];
            for (let col = 0; col < this.#currentGeneration[row].length; col++) {
                const cell = new Cell(this.#currentGeneration[row][col], this.calculateLivingNeighbors(row, col));
                nextGeneration[row][col] = cell.calculateNextState();
            }
        }
        this.#currentGeneration = nextGeneration;
    }

    private calculateLivingNeighbors(row: number, col: number): number {
        return Neighbors.reduce((livingNeighbors, direction) => {
            if (this.isAlive(row + direction[0], col + direction[1])) {
                livingNeighbors++;
            }
            return livingNeighbors;
        }, 0);
    }

    private isAlive(row: number, col: number): boolean {
        return this.#currentGeneration[row]?.[col] === CellStates.alive;
    }
}
