import {Table} from "./table";

export interface TableParser {
    parse(lines: string[]): Table;
}

export interface TableFormatter {
    format(table: Table): string[];
}

export type TableFormatterOptions = {
    borderChar: string;
    separatorChar: string;
    paddingChar: string;
    lineChar: string;
};

export const defaultFormatterOptions: TableFormatterOptions = {
    borderChar: "|",
    separatorChar: "+",
    paddingChar: " ",
    lineChar: "-",
};

export const defaultDelimiter = ";"