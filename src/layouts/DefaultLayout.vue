<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <div>
    <NavBar />
    <h1>Default Layout</h1>
    <slot />
  </div>
</template>
