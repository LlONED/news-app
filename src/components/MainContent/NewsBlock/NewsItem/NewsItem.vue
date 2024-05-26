<script setup>
import NewsItemDescription from "./NewsItemDescription/NewsItemDescription.vue";
import NewsItemImage from "./NewsItemImage.vue";

defineProps({
  name: String,
  previewText: String,
  type: Object,
  date: Number,
  link: String,
  image: String,
});
</script>

<template>
  <article class="news-item">
    <NewsItemImage :src="image" :alt="name" />

    <NewsItemDescription :name :previewText :type :date :link :image />
  </article>
</template>

<style scoped>
.news-item {
  display: flex;
  flex-direction: column;
}
</style>
