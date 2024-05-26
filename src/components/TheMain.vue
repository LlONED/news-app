<script setup>
import TheContentTitle from "@/components/MainContent/TheContentTitle.vue";
import TheNewsBlock from "@/components/MainContent/TheNewsBlock.vue";
</script>

<template>
  <main class="main">
    <TheContentTitle contentTitle="Новости" />

    <TheNewsBlock />
  </main>
</template>

<style scoped>
.main {
  flex: 1;
}
</style>
