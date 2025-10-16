import { Cell, CellState, CellStates, neighborsCountNeededToRevive } from './constants';

export class DeadCell implements Cell {
    constructor(private livingNeighborsCount: number) {}
    calculateNextState(): CellState {
        return this.livingNeighborsCount === neighborsCountNeededToRevive ? CellStates.alive : CellStates.dead;
    }
}
