<script setup>
import NewsItemDescriptionDate from "./NewsItemDescriptionDate.vue";
import NewsItemDescriptionTag from "./NewsItemDescriptionTag.vue";

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
  <div :class="['description', image.length ? 'border-bottom' : 'border-full']">
    <NewsItemDescriptionDate :ms="date" />

    <BaseLink :href="link">
      <span>{{ name }}</span>
    </BaseLink>

    <p>{{ previewText }}</p>

    <div class="description-tag__wrapper">
      <NewsItemDescriptionTag :text="type.value" />
    </div>
  </div>
</template>

<style scoped>
.description {
  height: 100%;
  padding: 32px;

  word-break: break-word;
  font-size: 22px;
  font-weight: 400;
  line-height: 26.4px;

  display: flex;
  flex-direction: column;
  gap: 16px;
}

.border-bottom {
  border: 1px solid var(--c-blue-mute);
  border-top: none;
  border-radius: 0 0 16px 16px;
}

.border-full {
  border: 1px solid var(--c-blue-mute);
  border-radius: 16px;
}

.description-tag__wrapper {
  margin-top: auto;
}
</style>
