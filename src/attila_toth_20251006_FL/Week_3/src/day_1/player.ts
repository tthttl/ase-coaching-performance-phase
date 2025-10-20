export class Player {
    #name: string;
    #squares: number[];
    position = 0;

    constructor(name: string, squares: number[]) {
        this.#name = name;
        this.#squares = squares;
    }

    get name(): string {
        return this.#name;
    }

    calculatePosition(roll: number): number {
        this.position = this.#squares[this.position + roll];
        return this.position;
    }
}
