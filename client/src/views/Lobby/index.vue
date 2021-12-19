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
import axios from "axios";

const baseStore = useBaseStore();

const createGame = async () => {
  const url = "http://localhost:3000/games";

  try {
    const { data } = await axios.post(url, { admin: baseStore.user?.id });

    console.log(data);
  } catch (e) {
    console.error(e);
  }
};
</script>
