<template>
  <footer class="footer">
    <div class="content-wrapper container">
      <IconLogo />

      <span class="footer-policy">© alpha, 2023</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--c-white-blue);
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.content-wrapper {
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-policy {
  color: var(--c-gray-soft);
}
</style>
