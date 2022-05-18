<script setup lang="ts">
import { computed } from "vue";
import { ref } from "vue";

const { label, bgColor } = withDefaults(
  defineProps<{ label: string; bgColor?: string }>(),
  {
    bgColor: "#000",
  }
);

const style = computed(() => "background: " + bgColor);

//  style: computed(() => ({
//         backgroundColor: bgColor,
//       })),
</script>

<template>
  <div>
    <button type="button" class="bg-red-500 text-white p-2" :style="style">
      {{ label }}
      {{ style }}
    </button>
  </div>
</template>
