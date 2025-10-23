import { Player } from './player';

export class SnakesAndLadders {
    players: Player[] = [];
    currentPlayerIndex: number = 0;

    constructor(players: Player[]) {
        this.players = players;
    }

    play(die1: number, die2: number): string {
        if (this.isGameOver()) {
            return 'Game over!';
        }
        const result = this.players[this.currentPlayerIndex].getNewState(die1 + die2);
        this.rotateToNextPlayer(die1, die2);
        return result;
    }

    isGameOver(): boolean {
        return this.players.some((player) => player.hasWon());
    }

    rotateToNextPlayer(die1: number, die2: number): void {
        if (die1 !== die2) {
            this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
        }
    }
}
