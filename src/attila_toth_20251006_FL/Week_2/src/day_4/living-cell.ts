import { Cell, CellState, CellStates, neighborsCountNeededToLive } from './constants';

export class LivingCell implements Cell {
    constructor(private livingNeighborsCount: number) {}
    calculateNextState(): CellState {
        return neighborsCountNeededToLive.includes(this.livingNeighborsCount) ? CellStates.alive : CellStates.dead;
    }
}
