import {defaultFormatterOptions, TableFormatter, TableFormatterOptions} from "./models";
import {Table} from "./table";

export class FixedLengthFormatter implements TableFormatter {
    #formattedLines: string[] = [];

    constructor(private readonly options: TableFormatterOptions = defaultFormatterOptions) {}

    format(table: Table): string[] {
        this.padColumns(table);
        this.addSeparatorLine(table);
        return this.#formattedLines;
    }

    private padColumns(table: Table): void {
        const maxColumnLengths = table.calculateMaxColumnLengths();
        for (const row of table.rows){
            const columns = row.columns;
            for (let columnIndex = 0; columnIndex < columns.length; columnIndex ++) {
                const maxLength = maxColumnLengths.get(columnIndex) ?? 0;
                columns[columnIndex] = columns[columnIndex].padEnd(maxLength, this.options.paddingChar);
            }
            this.#formattedLines.push(columns.join(this.options.borderChar).concat(this.options.borderChar));
        }
    }

    private addSeparatorLine(table: Table): void {
        const maxColumnLengths = table.calculateMaxColumnLengths();
        const separatorLine = Array.from(maxColumnLengths.values()).map((length) => this.options.lineChar.repeat(length)).join(this.options.separatorChar).concat(this.options.separatorChar);
        this.#formattedLines = [this.#formattedLines[0], separatorLine,...this.#formattedLines.slice(1)]
    }
}