<template>
  <footer class="footer">
    <div class="container">
      <div class="footer_content">
        <div class="copyright">
          <p>© 2023 Yevhen Dovhan. All rights reserved.</p>
        </div>
        <ul class="social-links">
          <base-social-link
            v-for="link in socialLinks"
            :key="link.icon"
            :href="link.url"
          >
            <Icon :name="link.icon" />
          </base-social-link>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const socialLinks = [
  {
    icon: 'uil:linkedin',
    url: '#',
  },
  {
    icon: 'uil:github',
    url: '#',
  },
  {
    icon: 'uil:twitter',
    url: '#',
  },
];
</script>

<style scoped></style>
