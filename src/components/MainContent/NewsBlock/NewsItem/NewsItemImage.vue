<script setup>
defineProps({
  src: String,
  alt: String,
});
</script>

<template>
  <div v-if="src.length" class="image-wrapper border-top">
    <img
      @load="
        $event.target.classList.remove('loading');
        $event.target.parentElement.classList.remove('border-top');
      "
      :src="src"
      :alt="alt"
      class="image loading"
    />
  </div>
</template>

<style scoped>
.image-wrapper {
  border-radius: 16px 16px 0 0;

  overflow: hidden;
  min-height: 250px;
  width: 100%;
}

.image-wrapper.border-top {
  border: 1px solid var(--c-blue-mute);
  border-bottom: none;
}

.image {
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: opacity 0.5s ease 0s;
  object-position: center center;
  object-fit: cover;
}

.image.loading {
  transition: opacity 0.5s ease 0s;
  opacity: 0;
}
</style>
