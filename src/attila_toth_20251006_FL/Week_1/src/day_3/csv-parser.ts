export class CSVParser {

    private input: string[] = [];
    private maxColumnLengths: Map<number, number> = new Map<number, number>();
    private formattedLines: string[] = [];

    tabelliere(csvLines: string[]): string[] {
        this.initialize(csvLines);
        this.calculateMaxColumnLengths();
        this.padColumns();
        this.addSeparatorLine();
        return this.formattedLines;
    }

    private initialize(csvLines: string[]): void {
        this.input = csvLines;
        this.maxColumnLengths = new Map<number, number>();
        this.formattedLines = []
    }

    private parseLineIntoColumns(lineIndex: number): string[]{
        return this.input[lineIndex].split(';')
    }

    private calculateMaxColumnLengths(): void {
        for (let lineIndex = 0; lineIndex < this.input.length; lineIndex ++) {
            const columns = this.parseLineIntoColumns(lineIndex);
            for (let columnIndex = 0; columnIndex < columns.length; columnIndex ++) {
                this.maxColumnLengths.set(columnIndex, Math.max(this.maxColumnLengths.get(columnIndex) ?? 0, columns[columnIndex].length));
            }
        }
    }

    private padColumns(): void {
        for(let lineIndex = 0; lineIndex < this.input.length; lineIndex++) {
            const columns = this.parseLineIntoColumns(lineIndex);
            for (let columnIndex = 0; columnIndex < columns.length; columnIndex ++) {
                const maxLength = this.maxColumnLengths.get(columnIndex) ?? 0;
                columns[columnIndex] = columns[columnIndex].padEnd(maxLength, ' ');
            }
            this.formattedLines.push(columns.join('|').concat('|'));
        }
    }

    private addSeparatorLine(): void {
        const separatorLine = Array.from(this.maxColumnLengths.values()).map((length) => '-'.repeat(length)).join('+').concat('+');
        this.formattedLines = [this.formattedLines[0], separatorLine,...this.formattedLines.slice(1)]
    }
}