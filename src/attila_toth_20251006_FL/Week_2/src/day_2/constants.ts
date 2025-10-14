export const separator = ',';
export const neighborsCountNeededToLive = [2, 3];
export const neighborsCountNeededToRevive = 3;

export const CellStates = {
    dead: '0',
    alive: '1',
} as const;

export type Cell = (typeof CellStates)[keyof typeof CellStates];

export const Directions = {
    topLeft: [-1, -1],
    top: [-1, 0],
    topRight: [-1, 1],
    left: [0, -1],
    right: [0, 1],
    bottomLeft: [1, -1],
    bottom: [1, 0],
    bottomRight: [1, 1],
} as const;

export type Direction = (typeof Directions)[keyof typeof Directions];
