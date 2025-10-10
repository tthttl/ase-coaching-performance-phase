import {TableCreator} from "./table-creator";

describe('TableCreator', () => {
    const tableCreator = new TableCreator();

    describe('tabelliere', () => {
        it('should return the table with separator line', () => {
            expect(tableCreator.tabelliere([
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
