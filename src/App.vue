<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const default_layout = "default";

const layout = computed(
  () => (useRoute().meta.layout || default_layout) + "-layout"
);
</script>

<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
