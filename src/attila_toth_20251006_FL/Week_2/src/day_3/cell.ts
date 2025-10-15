import { CellState, CellStates, neighborsCountNeededToLive, neighborsCountNeededToRevive } from './constants';

export class Cell {
    constructor(
        private state: CellState,
        private livingNeighborsCount: number
    ) {}

    calculateNextState(): CellState {
        if (this.state === CellStates.alive) {
            if (neighborsCountNeededToLive.includes(this.livingNeighborsCount)) {
                return CellStates.alive;
            }
            return CellStates.dead;
        } else {
            if (this.livingNeighborsCount === neighborsCountNeededToRevive) {
                return CellStates.alive;
            }
        }
        return CellStates.dead;
    }
}
