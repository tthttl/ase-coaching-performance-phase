export class Row {
    #columns: string[];

    constructor(columns: string[]) {
        this.#columns = columns;
    }

    get columns(): string[] {
        return this.#columns;
    }
}