import { Game } from './game';
import { defaultSquares } from './constants';

export class SnakesAndLadders {
    #game: Game;

    constructor(squares: number[] = defaultSquares) {
        this.#game = new Game(squares);
    }

    play(roll1: number, roll2: number): string {
        return this.#game.play(roll1, roll2);
    }
}
