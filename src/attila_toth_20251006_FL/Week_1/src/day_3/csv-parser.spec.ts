import {CSVParser} from "./csv-parser";

describe('CSVParser', () => {
    const csvParser = new CSVParser();

    describe('tabelliere', () => {
        it('should return an empty array when given an empty array', () => {
            expect(csvParser.tabelliere([])).toEqual([]);
        })

        it('should return the table with correct number of spaces in each column', () => {
            expect(csvParser.tabelliere(['1;333;55555;22', '333;1;22;55555'])).toEqual(['1  |333|55555|22   |','333|1  |22   |55555|']);
        })

        it('should return the table with separator line', () => {
            expect(csvParser.tabelliere([
                'Name;Strasse;Ort;Alter',
                'Peter Pan;Am Hang 5;12345 Einsam;42',
                'Maria Schmitz;Kölner Straße 45;50123 Köln;43',
                'Paul Meier;Münchener Weg 1;87654 München;65'
            ])).toEqual([
                "Name         |Strasse         |Ort          |Alter|",
                "-------------+----------------+-------------+-----+",
                "Peter Pan    |Am Hang 5       |12345 Einsam |42   |",
                "Maria Schmitz|Kölner Straße 45|50123 Köln   |43   |",
                "Paul Meier   |Münchener Weg 1 |87654 München|65   |"
            ]);
        })
    })
});
