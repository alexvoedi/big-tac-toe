<template>
  <div>
    <h1>Game</h1>

    <div class="table border-collapse">
      <div class="table-row" v-for="y in 10" :key="y">
        <div
          class="table-cell border w-12 h-12 align-middle text-center"
          v-for="x in 10"
          :key="x"
        >
          x
        </div>
      </div>
    </div>
  </div>
</template>
