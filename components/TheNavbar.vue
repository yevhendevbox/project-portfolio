<template>
  <header class="header">
    <nav class="header-links__wrapper" :class="{ open: isOpen }">
      <ul class="header-links flex">
        <nuxt-link to="/" @click="isOpen = false">
          <span>1</span>
          Home</nuxt-link
        >
        <nuxt-link to="/work" @click="isOpen = false">
          <span>2</span>
          Work</nuxt-link
        >
        <nuxt-link to="/about" @click="isOpen = false">
          <span>3</span>
          About</nuxt-link
        >
        <nuxt-link to="/contact" @click="isOpen = false">
          <span>4</span>
          Contact</nuxt-link
        >
      </ul>
    </nav>
    <div class="container flex">
      <div class="header-brand">Y.D.</div>
      <div
        class="menu-button"
        :class="{ toggled: isOpen }"
        @click="handleToggleMenu"
      >
        <span class="button-line"></span>
        <span class="button-line"></span>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const handleToggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped></style>
