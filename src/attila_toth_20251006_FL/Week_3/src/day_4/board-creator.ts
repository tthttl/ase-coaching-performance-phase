import { Portal } from './model';

//NOTE to self: supply the input in constructor, so the implementation can be more flexible and different types of BoardCreators can be injected into the SnakesAndLadders class
export class BoardCreator {
    parse(boardSize: number, portals: Portal[]): number[] {
        const board = Array.from({ length: boardSize + 1 }, (_, i) => i);
        portals.forEach((slide) => {
            const [start, end] = slide;
            board[start] = end;
        });
        return board;
    }
}
