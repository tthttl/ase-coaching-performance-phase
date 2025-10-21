export class Player {
    #name: string;
    #squares: number[];
    #position = 0;

    constructor(name: string, squares: number[]) {
        this.#name = name;
        this.#squares = squares;
    }

    getNewState(roll: number): string {
        this.calculateNewPosition(roll);
        if (this.#position === 100) {
            return `${this.#name} Wins!`;
        }
        return `${this.#name} is on square ${this.#position}`;
    }

    get position() {
        return this.#position;
    }

    private calculateNewPosition(roll: number): void {
        this.#position = this.#squares[this.#position + roll];
    }
}
