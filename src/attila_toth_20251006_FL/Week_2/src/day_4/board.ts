import { CellState, CellStates, Neighbors, separator } from './constants';
import { LivingCell } from './living-cell';
import { DeadCell } from './dead-cell';

export class Board {
    #currentGeneration: CellState[][] = [];
    #nextGeneration: CellState[][] = [];

    constructor(positions: string[]) {
        for (let row = 0; row < positions.length; row++) {
            this.#currentGeneration[row] = positions[row].split(separator) as CellState[];
        }
    }

    get currentGeneration(): string[] {
        return this.#currentGeneration.map((row) => row.join(separator));
    }

    advanceGeneration(): void {
        for (let row = 0; row < this.#currentGeneration.length; row++) {
            this.#nextGeneration[row] = [];
            for (let col = 0; col < this.#currentGeneration[row].length; col++) {
                this.#nextGeneration[row][col] = this.calculateNextStateForCell(row, col);
            }
        }
        this.#currentGeneration = [...this.#nextGeneration];
    }

    private calculateNextStateForCell(row: number, col: number): CellState {
        const livingNeighbors = this.calculateLivingNeighbors(row, col);
        if (this.isCellAlive(row, col)) {
            return new LivingCell(livingNeighbors).calculateNextState();
        } else {
            return new DeadCell(livingNeighbors).calculateNextState();
        }
    }

    private calculateLivingNeighbors(row: number, col: number): number {
        return Neighbors.reduce((livingNeighbors, direction) => {
            if (this.isCellAlive(row + direction[0], col + direction[1])) {
                livingNeighbors++;
            }
            return livingNeighbors;
        }, 0);
    }

    private isCellAlive(row: number, col: number): boolean {
        return this.#currentGeneration[row]?.[col] === CellStates.alive;
    }
}
