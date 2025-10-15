import { Board } from './board';

export class GameOfLife {
    #board: Board;

    constructor(positions: string[]) {
        this.#board = new Board(positions);
    }

    render(): string[] {
        return this.#board.currentGeneration;
    }

    tick(): void {
        this.#board.moveToNextGeneration();
    }
}
