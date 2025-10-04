import { tabelliere } from './csv-parser';

describe('csv-parser', () => {
    describe('tabelliere', () => {
        it('should return an empty array when given an empty array', () => {
            expect(tabelliere([])).toEqual([]);
        });
    });
});
