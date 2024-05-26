<script setup>
const { ms } = defineProps({
  ms: Number,
});

function addZero(number) {
  return +number < 10 ? "0" + number : number;
}

function getDateElement(options) {
  return new Intl.DateTimeFormat("en", options).format(new Date(ms));
}
</script>

<template>
  <div class="description-date">
    <span class="description-date__day">{{
      addZero(getDateElement({ day: "numeric" }))
    }}</span>

    <div class="description-date__wrapper">
      <span class="description-date__month">{{
        getDateElement({ month: "long" })
      }}</span>

      <span class="description-date__year">{{
        getDateElement({ year: "numeric" })
      }}</span>
    </div>
  </div>
</template>

<style scoped>
.description-date {
  color: var(--c-gray-blue);
  display: flex;
  gap: 4px;
}

.description-date__day {
  font-size: 36px;
  font-weight: 400;
  line-height: 36px;
}

.description-date__wrapper {
  display: flex;
  flex-direction: column;
}

.description-date__month,
.description-date__year {
  font-size: 15px;
  font-weight: 700;
  line-height: 16.5px;
}
</style>
