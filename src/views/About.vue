<script setup lang="ts">
import { onBeforeRouteLeave } from "vue-router";

// same as beforeRouteLeave option with no access to `this`
onBeforeRouteLeave((to, from) => {
  console.log(to.fullPath, from.fullPath);

  const answer = window.confirm(
    "Do you really want to leave? you have unsaved changes!"
  );
  // cancel the navigation and stay on the same page
  if (!answer) return false;
});
</script>

<template>
  <div>
    <h1>About Page</h1>
  </div>
</template>
