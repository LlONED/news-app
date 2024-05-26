<script setup>
import NewsItem from "./NewsItem/NewsItem.vue";

defineProps({
  news: Array,
});
</script>

<template>
  <div class="news-list__wrapper">
    <NewsItem
      v-for="(newsItem, index) in news"
      :key="index"
      :name="newsItem.name"
      :previewText="newsItem.previewText"
      :type="newsItem.type"
      :date="newsItem.date"
      :link="newsItem.link"
      :image="newsItem.image"
    />
  </div>
</template>

<style scoped>
.news-list__wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 536px));
  justify-content: center;
  gap: 40px;
}
</style>
