import { defineStore } from "pinia";

interface BaseStore {
  user?: {
    id: string;
    name: string;
  };
}

export const useBaseStore = defineStore({
  id: "base",

  state: (): BaseStore => ({
    user: undefined,
  }),

  actions: {},

  getters: {},
});
