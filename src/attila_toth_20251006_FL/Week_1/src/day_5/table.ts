import {Row} from "./row";

export class Table {
    #rows: Row[];

    constructor(rows: Row[]) {
        this.#rows = rows;
    }

    calculateMaxColumnLengths(): Map<number, number> {
        const maxColumnLengths = new Map<number, number>();
        for (const row of this.#rows){
            const columns = row.columns;
            for (let columnIndex = 0; columnIndex < columns.length; columnIndex ++) {
                maxColumnLengths.set(columnIndex, Math.max(maxColumnLengths.get(columnIndex) ?? 0, columns[columnIndex].length));
            }
        }
        return maxColumnLengths;
    }

    get rows(): Row[] {
        return this.#rows;
    }
}