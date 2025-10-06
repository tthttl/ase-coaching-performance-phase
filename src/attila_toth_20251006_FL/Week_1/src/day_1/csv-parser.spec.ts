import {getMaxColumnLengths, tabelliere} from './csv-parser';

describe('csv-parser', () => {
    describe('tabelliere', () => {
        it('should return an empty array when given an empty array', () => {
            expect(tabelliere([])).toEqual([]);
        });

        it('should replace ; with | in input and add a closing | after the last element', () => {
            expect(tabelliere(['first;second;third'])).toEqual(['first|second|third|']);
        });

        it('should add spaces to every word to match the length of the longest word in the column ', () => {
            expect(tabelliere(['1;22;333;4444', '22;1;4444;333'])).toEqual(
                ['1 |22|333 |4444|',
                 '22|1 |4444|333 |']
            );
        });
    });

    describe('getMaxColumnLengths', () => {
        it('should return an empty array when given an empty object', () => {
            expect(getMaxColumnLengths([])).toEqual({});
        })

        it('should return the correct length for the first line', () => {
            expect(getMaxColumnLengths(['first;second;third'])).toEqual({0: 5, 1: 6, 2: 5});
        })

        it('should return the correct length when there are more lines', () => {
            expect(getMaxColumnLengths(['first;second;third', '7777777;4444;88888888'])).toEqual({0: 7, 1: 6, 2: 8});
        })
    })
});
