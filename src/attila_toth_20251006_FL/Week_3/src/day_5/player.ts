import { defaultSquares } from './constants';

export class Player {
    #name: string;
    #board: number[];
    #position = 0;
    #boardSize = 0;

    constructor(name: string, squares: number[] = defaultSquares) {
        this.#name = name;
        this.#board = squares;
        this.#boardSize = squares.length - 1;
    }

    hasWon(): boolean {
        return this.#position === this.#boardSize;
    }

    getNewState(dieRoll: number): string {
        this.calculateNewPosition(dieRoll);
        return this.calculatePlayerState();
    }

    calculateNewPosition(dieRoll: number) {
        if (this.isForwardRoll(dieRoll)) {
            this.moveForwards(dieRoll);
        } else {
            this.moveBackwards(dieRoll);
        }
    }

    private isForwardRoll(dieRoll: number): boolean {
        return this.#position + dieRoll <= this.#boardSize;
    }

    private moveForwards(dieRoll: number) {
        this.#position = this.#board[this.#position + dieRoll];
    }

    private moveBackwards(dieRoll: number) {
        const backSteps = this.#position + dieRoll - this.#boardSize;
        this.#position = this.#board[this.#boardSize - backSteps];
    }

    private calculatePlayerState(): string {
        if (this.hasWon()) {
            return `${this.#name} wins!`;
        }
        return `${this.#name} is on square ${this.#position}`;
    }
}
