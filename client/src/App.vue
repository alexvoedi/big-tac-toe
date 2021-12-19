<template>
  <div>
    <suspense>
      <template #default>
        <router-view></router-view>
      </template>

      <template #fallback>
        <div>Loading</div>
      </template>
    </suspense>
  </div>
</template>

<script lang="ts"></script>
