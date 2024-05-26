<script setup>
defineProps({
  contentTitle: String,
});
</script>

<template>
  <section class="content-container">
    <div class="content-wrapper container">
      <h1 class="content-title">{{ contentTitle }}</h1>
    </div>
  </section>
</template>

<style scoped>
.content-container {
  height: 320px;

  display: flex;

  justify-content: center;
  align-items: flex-end;

  background-image: url("@/assets/images/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.content-wrapper {
  flex: 1;

  margin-bottom: 48px;
}

.content-title {
  font-size: 40px;
  font-weight: 700;
}
</style>
