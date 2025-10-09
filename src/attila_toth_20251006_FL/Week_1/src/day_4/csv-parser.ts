const borderChar = '|';
const separatorChar = '+';
const paddingChar = ' ';
const lineChar = '-';
const delimiterChar = ';';


export class CSVParser {
    private input: string[] = [];
    private maxColumnLengths: Map<number, number> = new Map<number, number>();
    private formattedLines: string[] = [];

    tabelliere(csvLines: string[]): string[] {
        this.initialize(csvLines);
        this.forEachColumnInEachLine((columnIndex, columns) => this.calculateMaxLength(columnIndex, columns));
        this.forEachColumnInEachLine(
            (columnIndex, columns) => this.addPadding(columnIndex, columns),
            (columns) => this.addBorders(columns))
        this.addSeparatorLine();
        return this.formattedLines;
    }

    private initialize(csvLines: string[]): void {
        this.input = csvLines;
        this.maxColumnLengths = new Map<number, number>();
        this.formattedLines = []
    }

    private forEachColumnInEachLine(innerCallback: (columnIndex: number, columns: string[]) => void, outerCallback?: (columns: string[]) => void): void {
        for (let lineIndex = 0; lineIndex < this.input.length; lineIndex++) {
            const columns = this.parseLineIntoColumns(lineIndex);
            for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
                innerCallback(columnIndex, columns);
            }
            outerCallback?.(columns);
        }
    }

    private parseLineIntoColumns(lineIndex: number): string[]{
        return this.input[lineIndex].split(delimiterChar)
    }

    private calculateMaxLength(columnIndex: number, columns: string[]) {
        return this.maxColumnLengths.set(columnIndex, Math.max(this.maxColumnLengths.get(columnIndex) ?? 0, columns[columnIndex].length))
    }

    private addPadding(columnIndex: number, columns: string[]) {
        return columns[columnIndex] = columns[columnIndex].padEnd(this.maxColumnLengths.get(columnIndex) ?? 0, paddingChar);
    }

    private addBorders(columns: string[]) {
        return this.formattedLines.push(columns.join(borderChar).concat(borderChar));
    }

    private addSeparatorLine(): void {
        const separatorLine = Array.from(this.maxColumnLengths.values()).map((length) => lineChar.repeat(length)).join(separatorChar).concat(separatorChar);
        this.formattedLines = [this.formattedLines[0], separatorLine, ...this.formattedLines.slice(1)]
    }
}