<template>
  <div>
    <suspense>
      <template #default>
        <router-view></router-view>
      </template>
      <template #fallback> test </template>
    </suspense>
  </div>
</template>

<script lang="ts"></script>
