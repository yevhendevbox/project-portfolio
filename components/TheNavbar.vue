<template>
  <header class="header">
    <nav class="header-links__wrapper" :class="{ open: isOpen }">
      <ul class="header-links flex">
        <base-menu-item
          v-for="(link, index) in links"
          :key="index"
          :to="link.url"
          :link="link"
          @click="isOpen = false"
        />
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
const links = [
  {
    id: '1',
    url: '/',
    label: 'Home',
  },
  {
    id: '2',
    url: '/work',
    label: 'Work',
  },
  {
    id: '3',
    url: '/about',
    label: 'About',
  },
  {
    id: '4',
    url: '/contact',
    label: 'Contact',
  },
];
const handleToggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped></style>
