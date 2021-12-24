<template>
  <div>
    <h1>Lobby</h1>

    <div>
      <h2>Available games</h2>

      <div v-for="game in availableGames" :key="game.id">
        {{ game.id }}
        <button @click="joinGame(game.id)">Join game</button>
      </div>
    </div>

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
import { ref } from "vue";
import { useRouter } from "vue-router";
import { IGame } from "../../../../common/interfaces/Game";

const baseStore = useBaseStore();
const gameStore = useGameStore();
const router = useRouter();

const availableGames = ref<IGame[]>([]);

const fetchGames = async () => {
  const url = "http://localhost:3000/games";

  try {
    const { data: games } = await axios.get(url);

    availableGames.value = games;
  } catch (e) {
    console.error(e);
  }
};

fetchGames();

const createGame = async () => {
  const url = "http://localhost:3000/games";

  try {
    const { data: game } = await axios.post<any, AxiosResponse<IGame>>(url, {
      admin: baseStore.user?.id,
    });

    gameStore.game = game;

    router.push({ name: "Game", params: { gameId: game.id } });
  } catch (e) {
    console.error(e);
  }
};

const joinGame = async (id: string) => {
  const url = `http://localhost:3000/games/${id}`;

  try {
    const { data: game } = await axios.get(url);

    gameStore.game = game;

    router.push({ name: "Game", params: { gameId: game.id } });
  } catch (e) {
    console.error(e);
  }
};
</script>
