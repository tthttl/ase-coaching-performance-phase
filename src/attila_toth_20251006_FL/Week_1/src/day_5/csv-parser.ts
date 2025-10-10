import {defaultDelimiter, TableParser} from "./models";
import {Row} from "./row";
import {Table} from "./table";

export class CsvParser implements TableParser {
    constructor(private readonly delimiter: string = defaultDelimiter) {}

    parse(csvLines: string[]): Table {
        const rows = csvLines.map(line => new Row(line.split(this.delimiter)));
        return new Table(rows);
    }
}