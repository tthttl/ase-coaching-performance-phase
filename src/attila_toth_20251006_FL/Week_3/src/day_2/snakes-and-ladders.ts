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
    #currentPlayerIndex = 0;

    constructor(squares = defaultSquares, player1Name = firstPlayerName, player2Name = secondPlayerName) {
        this.#players = [new Player(player1Name, squares), new Player(player2Name, squares)];
    }

    //The die rolls are not validated for testing purposes...
    play(die1: number, die2: number): string {
        if (this.isGameOver()) {
            return gameOverMessage;
        }
        const result = this.#players[this.#currentPlayerIndex].getNewState(die1 + die2);
        this.updateCurrentPlayer(die1, die2);
        return result;
    }

    private isGameOver(): boolean {
        return this.#players.some((player) => player.position === 100);
    }

    private updateCurrentPlayer(die1: number, die2: number): void {
        if (die1 !== die2) {
            this.#currentPlayerIndex = this.#currentPlayerIndex === firstPlayer ? secondPlayer : firstPlayer;
        }
    }
}
