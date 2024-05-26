<script setup>
defineProps({
  loading: Boolean,
});
</script>

<template>
  <BaseButton>
    <IconLoader v-if="loading" />
    <slot v-else></slot>
  </BaseButton>
</template>

<style scoped></style>
