export class CSVParser {
    private formattedLines: string[] = [];
    constructor(private csvLines: string[], private joinChar: string = '|') {}

    tabelliere(): string[] {
        const maxColumnLengths = ColumnLengthCalculator.getMaxColumnLengths(this.csvLines);
        for(let line = 0; line < this.csvLines.length; line++) {
            const columns = this.csvLines[line].split(';');
            for (let columnIndex = 0; columnIndex < columns.length; columnIndex ++) {
                const maxLength = maxColumnLengths.get(columnIndex) ?? 0;
                columns[columnIndex] = columns[columnIndex].padEnd(maxLength, ' ');
            }
            this.formattedLines.push(columns.join(this.joinChar).concat(this.joinChar));
        }
        return this.formattedLines;
    }
}


export class ColumnLengthCalculator {
    static getMaxColumnLengths(csvLines: string[]): Map<number, number> {
        const maxColumnLengths: Map<number, number> = new Map<number, number>();
        for (let line = 0; line < csvLines.length; line ++) {
            const columns = csvLines[line].split(';');
            for (let columnIndex = 0; columnIndex < columns.length; columnIndex ++) {
                maxColumnLengths.set(columnIndex, Math.max(maxColumnLengths.get(columnIndex) ?? 0, columns[columnIndex].length));
            }
        }
        return maxColumnLengths;
    }
}


export function tabelliere(csvLines: string[]): string[] {
    const maxColumnLengths = getMaxColumnLengths(csvLines);
    const formattedLines: string[] = [];
    for(let line = 0; line < csvLines.length; line++) {
        const columns = csvLines[line].split(';');
        for (let column = 0; column < columns.length; column ++) {
            const maxLength = maxColumnLengths.get(column) ?? 0;
            columns[column] = columns[column].padEnd(maxLength, ' ');
        }
        formattedLines.push(columns.join('|').concat('|'));
    }
    return formattedLines;
}

export function getMaxColumnLengths(csvLines: string[]): Map<number, number> {
    const maxColumnLengths: Map<number, number> = new Map<number, number>();
    for (let line = 0; line < csvLines.length; line ++) {
        const columns = csvLines[line].split(';');
        for (let columnIndex = 0; columnIndex < columns.length; columnIndex ++) {
            maxColumnLengths.set(columnIndex, Math.max(maxColumnLengths.get(columnIndex) ?? 0, columns[columnIndex].length));
        }
    }
    return maxColumnLengths;
}