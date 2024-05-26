<template>
  <button class="button border">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  cursor: pointer;
  outline: none;

  padding: 1rem 2rem;
  border: 1px solid var(--c-blue-secondary);
  border-radius: 0.5rem;

  font-size: 20px;
  line-height: 24px;
  color: var(--c-blue-secondary);

  background: var(--white);
  transition: transform 0.1s;
}

.button:hover {
  transform: scale(0.96);
  transition: transform 0.21s;
}
</style>
