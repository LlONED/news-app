<script setup>
import { computed, reactive, ref } from "vue";

import NewsList from "./NewsBlock/NewsList.vue";
import { requestNews } from "@/api";
import { errorMessages } from "vue/compiler-sfc";

const loading = ref(true);
const errorMessage = ref(null);

const newsList = reactive([]);
const pagination = reactive({
  current: 0,
  total: null,
});
const showPaginationButton = computed(
  () => pagination.total !== null && pagination.current !== pagination.total
);

function getNews(page = "") {
  loading.value = true;
  errorMessages.value = null;

  requestNews(page)
    .then((newsResponse) => {
      pagination.current = +newsResponse.nav.current;
      pagination.total = +newsResponse.nav.total;

      newsList.push(...newsResponse.items);
    })
    .catch((e) => {
      console.error(e);
      errorMessage.value = e;
    })
    .finally(() => {
      loading.value = false;
    });
}

getNews();
</script>

<template>
  <section class="news-block__container">
    <div class="news-block__wrapper container">
      <IconLoader v-if="loading && newsList.length === 0" />
      <p v-else-if="errorMessage !== null">{{ errorMessage }}</p>
      <NewsList v-else-if="newsList.length" :news="newsList" />
      <p v-else>Новостей нет</p>

      <BaseButtonLoader
        v-if="showPaginationButton"
        @click="getNews(pagination.current + 1)"
        :loading="loading"
      >
        Загрузить ещё
      </BaseButtonLoader>
    </div>
  </section>
</template>

<style scoped>
.news-block__container {
  display: flex;
  justify-content: center;
}

.news-block__wrapper {
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-top: 48px;
  padding-bottom: 48px;
}

.pagination__wrapper {
  align-self: center;
}
</style>
