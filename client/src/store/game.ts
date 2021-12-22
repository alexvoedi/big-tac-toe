import { defineStore } from "pinia";
import { IGame } from "../../../common/interfaces/Game";

interface GameStore {
  game: IGame | null;
}

export const useGameStore = defineStore("game-store", {
  state: (): GameStore => ({
    game: null,
  }),

  actions: {},

  getters: {},
});
