<template>
  <div>
    <h1>Lobby</h1>

    <form @submit.prevent="createGame">
      <h2>Create game</h2>

      <button type="submit">Create game</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useBaseStore } from "@/store/base";
import { useGameStore } from "@/store/game";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "vue-router";
import { IGame } from "../../../../common/interfaces/Game";

const baseStore = useBaseStore();
const gameStore = useGameStore();
const router = useRouter();

const createGame = async () => {
  const url = "http://localhost:3000/games";

  try {
    const { data: game } = await axios.post<any, AxiosResponse<IGame>>(url, {
      admin: baseStore.user?.id,
    });

    gameStore.game = game;

    router.push({ name: "Game" });
  } catch (e) {
    console.error(e);
  }
};
</script>
