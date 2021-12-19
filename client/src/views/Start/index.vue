<template>
  <div>
    <h1 class="text-xl">Start</h1>

    <form @submit.prevent="createUser">
      <label>
        <span>Name</span>
        <input type="text" v-model="user.name" />
      </label>

      <button type="submit">Erstellen</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useBaseStore } from "@/store/base";
import axios from "axios";

const router = useRouter();
const baseStore = useBaseStore();

const user = reactive({
  name: "",
});

const createUser = async () => {
  const url = "http://localhost:3000/users";

  try {
    const { data } = await axios.post(url, user);

    baseStore.user = data;

    router.push({ name: "Lobby" });
  } catch (e) {
    console.error(e);
  }
};
</script>
