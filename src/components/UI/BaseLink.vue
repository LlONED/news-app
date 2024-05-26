<template>
  <a target="_blank" class="link"><slot></slot></a>
</template>

<style scoped>
.link {
  color: var(--c-blue-soft);
  text-decoration: none;
}

.link:hover {
  color: var(--c-blue-secondary);
}
</style>
