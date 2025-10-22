import {
    defaultSquares,
    firstPlayer,
    firstPlayerName,
    gameOverMessage,
    secondPlayer,
    secondPlayerName,
} from './constants';
import { Player } from './player';

export class SnakesAndLadders {
    #players: Player[];
    #currentPlayer = firstPlayer;

    constructor(squares = defaultSquares, player1Name = firstPlayerName, player2Name = secondPlayerName) {
        this.#players = [new Player(player1Name, squares), new Player(player2Name, squares)];
    }

    play(die1: number, die2: number): string {
        if (this.isGameOver()) {
            return gameOverMessage;
        }
        const result = this.#players[this.#currentPlayer].getNewState(die1 + die2);
        this.updateCurrentPlayer(die1, die2);
        return result;
    }

    private isGameOver(): boolean {
        return this.#players.some((player) => player.hasWon());
    }

    private updateCurrentPlayer(die1: number, die2: number): void {
        if (die1 !== die2) {
            this.#currentPlayer = this.#currentPlayer === firstPlayer ? secondPlayer : firstPlayer;
        }
    }
}
