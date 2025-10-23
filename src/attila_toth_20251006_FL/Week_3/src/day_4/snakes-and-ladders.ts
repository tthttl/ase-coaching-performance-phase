import { BoardCreator } from './board-creator';

export class SnakesAndLadders {
    #board: number[];
    #position: number = 0;

    constructor(boardSize = 100, portals: [number, number][] = []) {
        this.#board = new BoardCreator().parse(boardSize, portals);
    }

    play(die1: number, die2: number): string {
        const position = this.calculatePosition(die1 + die2);
        return `Player is on square ${position}`;
    }

    calculatePosition(roll: number): number {
        this.#position = this.#board[this.#position + roll];
        return this.#position;
    }
}
