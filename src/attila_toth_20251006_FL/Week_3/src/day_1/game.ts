import { Player } from './player';

export class Game {
    #players: Player[];
    #currentPlayerIndex = 0;

    constructor(squares: number[]) {
        this.#players = [new Player('Player 1', squares), new Player('Player 2', squares)];
    }

    play(roll1: number, roll2: number): string {
        const player = this.#players[this.#currentPlayerIndex];
        const position = player.calculatePosition(roll1 + roll2);
        if (roll1 !== roll2) {
            this.#currentPlayerIndex = this.#currentPlayerIndex === 0 ? 1 : 0;
        }
        return `${player.name} is on square ${position}`;
    }
}
