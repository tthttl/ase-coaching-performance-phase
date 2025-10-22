import { defaultSquares } from './constants';

export class Player {
    #name: string;
    #squares: number[];
    #position = 0;
    #maxPosition = defaultSquares.length - 1;

    constructor(name: string, squares: number[]) {
        this.#name = name;
        this.#squares = squares;
        this.#maxPosition = squares.length - 1;
    }

    getNewState(roll: number): string {
        this.calculateNewPosition(roll);
        return this.calculatePlayerState();
    }

    hasWon() {
        return this.#position === this.#maxPosition;
    }

    private calculateNewPosition(roll: number): void {
        if (this.isForwardMove(roll)) {
            this.moveForwards(roll);
        } else {
            this.moveBackwards(roll);
        }
    }

    private moveBackwards(roll: number): void {
        const backSteps = this.#position + roll - this.#maxPosition;
        this.#position = this.#squares[this.#maxPosition - backSteps];
    }

    private isForwardMove(roll: number): boolean {
        return this.#position + roll <= this.#maxPosition;
    }

    private moveForwards(roll: number): void {
        this.#position = this.#squares[this.#position + roll];
    }

    private calculatePlayerState(): string {
        if (this.#position === this.#maxPosition) {
            return `${this.#name} Wins!`;
        }
        return `${this.#name} is on square ${this.#position}`;
    }
}
