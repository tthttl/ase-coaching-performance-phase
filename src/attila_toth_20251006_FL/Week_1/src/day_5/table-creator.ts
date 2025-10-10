import {TableFormatter, TableParser} from "./models";
import {CsvParser} from "./csv-parser";
import {FixedLengthFormatter} from "./fixed-length-formatter";

export class TableCreator {
    private readonly parser: TableParser;
    private readonly formatter: TableFormatter;

    constructor(
        parser: TableParser = new CsvParser(),
        formatter: TableFormatter = new FixedLengthFormatter()
    ) {
        this.parser = parser;
        this.formatter = formatter;
    }

    tabelliere(csvLines: string[]): string[] {
        const table = this.parser.parse(csvLines);
        return this.formatter.format(table);
    }
}