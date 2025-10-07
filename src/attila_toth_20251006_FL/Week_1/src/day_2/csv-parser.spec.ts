import {getMaxColumnLengths, tabelliere} from "./csv-parser";

describe('csv-parser', () => {
    describe('getMaxColumnLengths', () => {
        it('should return an empty array when given an empty object', () => {
            expect(getMaxColumnLengths([])).toEqual(new Map<number, number>);
        })

        it('should return the column lengths for an array with one element', () => {
            expect(getMaxColumnLengths(['first;second;third'])).toEqual(new Map<number, number>([[0, 5], [1, 6], [2, 5]]));
        })

        it('should return the column lengths for an array with two lines', () => {
            expect(getMaxColumnLengths(['1;333;55555;22', '333;1;22;55555'])).toEqual(new Map<number, number>([[0, 3], [1, 3], [2, 5], [3, 5]]));
        })
    })

    describe('tabelliere', () => {
        it('should return an empty array when given an empty array', () => {
            expect(tabelliere([])).toEqual([]);
        })

        it('should return the table with correct number of spaces in each column', () => {
            expect(tabelliere(['1;333;55555;22', '333;1;22;55555'])).toEqual(['1  |333|55555|22   |','333|1  |22   |55555|']);
        })
    })
});
