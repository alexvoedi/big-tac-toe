<template>
  <div>
    <h1 class="text-xl">Game</h1>

    <div class="table border-collapse overflow-scroll">
      <div class="table-row" v-for="y in gameStore.game?.board.size" :key="y">
        <div
          class="table-cell border w-16 h-16 align-middle text-center text-4xl"
          hover="bg-light-400 border-light-800 cursor-pointer"
          v-for="x in gameStore.game?.board.size"
          :key="x"
          @click="input(x - 1, y - 1)"
        >
          {{ gameStore.game?.board.cells[x - 1][y - 1]?.player?.emoji }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBaseStore } from "@/store/base";
import { useGameStore } from "@/store/game";
import axios from "axios";

const props = defineProps({
  gameId: String,
});

const baseStore = useBaseStore();
const gameStore = useGameStore();

const input = async (x: number, y: number) => {
  if (!gameStore.game) return;

  const url = `http://localhost:3000/games/${props.gameId}`;

  try {
    const { data: board } = await axios.post(url, {
      x,
      y,
      id: baseStore.user?.id,
    });

    console.log(board);

    gameStore.game.board = board;
  } catch (e) {
    console.error(e);
  }
};
</script>
