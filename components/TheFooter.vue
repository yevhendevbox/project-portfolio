<template>
  <footer class="footer">
    <div class="container">
      <div class="footer_content">
        <div class="copyright">
          <p>© 2023 {{ t('copyright') }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { t } = useI18n();
</script>

<style scoped></style>
