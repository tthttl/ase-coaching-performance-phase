import { GameOfLife } from '../day_4/game-of-life';

describe('Game of Life', () => {
    const initialBoard = [
        '0,1,0,1,0', //
        '0,0,0,0,0', //
        '0,1,0,1,0', //
        '0,0,0,0,0', //
        '0,1,0,1,0', //
    ];
    describe('render', () => {
        it('should return the initial board', () => {
            expect(new GameOfLife(initialBoard).render()).toEqual(initialBoard);
        });

        it('should calculate the next generation => all cells are isolated, they should die', () => {
            const game = new GameOfLife(initialBoard);
            game.tick();

            expect(game.render()).toEqual([
                '0,0,0,0,0', //
                '0,0,0,0,0', //
                '0,0,0,0,0', //
                '0,0,0,0,0', //
                '0,0,0,0,0', //
            ]);
        });

        it('should calculate the next generation', () => {
            const game = new GameOfLife([
                '0,1,0,0,0', //
                '0,1,1,0,0', //
                '0,1,0,0,1', //
                '0,0,0,1,0', //
                '0,0,0,1,1', //
            ]);
            game.tick();

            expect(game.render()).toEqual([
                '0,1,1,0,0', //
                '1,1,1,0,0', //
                '0,1,0,1,0', //
                '0,0,1,1,0', //
                '0,0,0,1,1', //
            ]);
        });
    });

    describe('Patterns/Different board sizes', () => {
        describe('Still lives should remain the same', () => {
            it('Block', () => {
                const blockPattern = [
                    '0,0,0,0', //
                    '0,1,1,0', //
                    '0,1,1,0', //
                    '0,0,0,0', //
                ];
                const game = new GameOfLife(blockPattern);
                game.tick();

                expect(game.render()).toEqual(blockPattern);
            });

            it('Tub', () => {
                const tubPattern = [
                    '0,0,0,0,0', //
                    '0,0,1,0,0', //
                    '0,1,0,1,0', //
                    '0,0,1,0,0', //
                    '0,0,0,0,0', //
                ];
                const game = new GameOfLife(tubPattern);
                game.tick();

                expect(game.render()).toEqual(tubPattern);
            });

            it('Beehive', () => {
                const beehive = [
                    '0,0,0,0,0,0', //
                    '0,0,1,1,0,0', //
                    '0,1,0,0,1,0', //
                    '0,0,1,1,0,0', //
                    '0,0,0,0,0,0', //
                ];
                const game = new GameOfLife(beehive);
                game.tick();

                expect(game.render()).toEqual(beehive);
            });
        });
        describe('Oscillators should alternate between two states', () => {
            it('Blinker', () => {
                const start = [
                    '0,0,0,0,0', //
                    '0,0,0,0,0', //
                    '0,1,1,1,0', //
                    '0,0,0,0,0', //
                    '0,0,0,0,0', //
                ];
                const end = [
                    '0,0,0,0,0', //
                    '0,0,1,0,0', //
                    '0,0,1,0,0', //
                    '0,0,1,0,0', //
                    '0,0,0,0,0', //
                ];
                alternate(start, end);
            });

            it('Toad', () => {
                const start = [
                    '0,0,0,0,0,0', //
                    '0,0,0,0,0,0', //
                    '0,0,1,1,1,0', //
                    '0,1,1,1,0,0', //
                    '0,0,0,0,0,0', //
                    '0,0,0,0,0,0', //
                ];
                const end = [
                    '0,0,0,0,0,0', //
                    '0,0,0,1,0,0', //
                    '0,1,0,0,1,0', //
                    '0,1,0,0,1,0', //
                    '0,0,1,0,0,0', //
                    '0,0,0,0,0,0', //
                ];
                alternate(start, end);
            });

            it('Beacon', () => {
                const start = [
                    '0,0,0,0,0,0', //
                    '0,1,1,0,0,0', //
                    '0,1,1,0,0,0', //
                    '0,0,0,1,1,0', //
                    '0,0,0,1,1,0', //
                    '0,0,0,0,0,0', //
                ];
                const end = [
                    '0,0,0,0,0,0', //
                    '0,1,1,0,0,0', //
                    '0,1,0,0,0,0', //
                    '0,0,0,0,1,0', //
                    '0,0,0,1,1,0', //
                    '0,0,0,0,0,0', //
                ];
                alternate(start, end);
            });
        });
        describe('Spaceships shall move into a direction through several ticks and eventually return to their original form', () => {
            it('Glider', () => {
                const start = [
                    '0,0,0,0,0,0,0,0,0,0', //
                    '0,1,0,0,0,0,0,0,0,0', //
                    '0,0,1,1,0,0,0,0,0,0', //
                    '0,1,1,0,0,0,0,0,0,0', //
                    '0,0,0,0,0,0,0,0,0,0', //
                    '0,0,0,0,0,0,0,0,0,0', //
                    '0,0,0,0,0,0,0,0,0,0', //
                    '0,0,0,0,0,0,0,0,0,0', //
                ];
                const end = [
                    '0,0,0,0,0,0,0,0,0,0', //
                    '0,0,0,0,0,0,0,0,0,0', //
                    '0,0,1,0,0,0,0,0,0,0', //
                    '0,0,0,1,1,0,0,0,0,0', //
                    '0,0,1,1,0,0,0,0,0,0', //
                    '0,0,0,0,0,0,0,0,0,0', //
                    '0,0,0,0,0,0,0,0,0,0', //
                    '0,0,0,0,0,0,0,0,0,0', //
                ];
                const game = new GameOfLife(start);
                for (let i = 0; i < 4; i++) {
                    game.tick();
                }
                expect(game.render()).toEqual(end);
            });
        });
    });
});

function alternate(start: string[], end: string[], ticks: number = 3) {
    const game = new GameOfLife(start);
    for (let i = 0; i < ticks; i++) {
        game.tick();
        if (i % 2 === 0) {
            expect(game.render()).toEqual(end);
        } else {
            expect(game.render()).toEqual(start);
        }
    }
}
