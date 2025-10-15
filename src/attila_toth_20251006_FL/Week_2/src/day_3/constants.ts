export const separator = ',';
export const neighborsCountNeededToLive = [2, 3];
export const neighborsCountNeededToRevive = 3;

export const CellStates = {
    dead: '0',
    alive: '1',
} as const;

export type CellState = (typeof CellStates)[keyof typeof CellStates];

export const Neighbors = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
] as const;
