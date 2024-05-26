<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 0.2rem solid var(--c-white-blue);
  border-top-color: var(--c-blue-priority);

  animation: spin 1.4s ease-in-out infinite;
}

@keyframes spin {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(1turn);
  }
}
</style>
