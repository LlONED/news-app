<script setup>
defineProps({
  text: String,
});
</script>

<template>
  <span class="description-tag">{{ text }}</span>
</template>

<style scoped>
.description-tag {
  font-size: 14px;
  color: #000;
  padding: 4px 16px;
  background-color: var(--c-white-blue);
  border-radius: 16px;
}
</style>
