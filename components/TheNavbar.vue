<template>
  <header class="header">
    <nav class="header-links__wrapper" :class="{ open: isOpen }">
      <div class="container">
        <ul class="header-links flex">
          <base-menu-item
            v-for="(link, index) in links"
            :key="index"
            :to="localePath(link.url)"
            :link="link"
            @click="isOpen = false"
          />
        </ul>
      </div>
    </nav>
    <div class="container flex">
      <div class="header-brand">Y.D.</div>
      <div class="header-actions">
        <div class="header-locale">
          <nuxt-link
            v-for="{ code } in locales"
            :key="code"
            :to="swithcLocalePath(code)"
          >
            {{ code }}
          </nuxt-link>
        </div>
        <div
          class="menu-button"
          :class="{ toggled: isOpen }"
          @click="handleToggleMenu"
        >
          <span class="button-line"></span>
          <span class="button-line"></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useLocalePath, useSwitchLocalePath } from 'vue-i18n-routing';
import { PAGE_HOME, PAGE_ABOUT, PAGE_WORK, PAGE_CONTACT } from '~/constants';

const isOpen = ref(false);
const links = [
  {
    id: '1',
    url: PAGE_HOME,
    label: 'home',
  },
  {
    id: '2',
    url: PAGE_WORK,
    label: 'work',
  },
  {
    id: '3',
    url: PAGE_ABOUT,
    label: 'about',
  },
  {
    id: '4',
    url: PAGE_CONTACT,
    label: 'contact',
  },
];
const swithcLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
const { locales } = useI18n();

const handleToggleMenu = () => {
  isOpen.value = !isOpen.value;
};

onMounted(() => {
  const header = document.querySelector('.header');
  const scrollWatcher = document.createElement('div');

  scrollWatcher.setAttribute('data-scroll-watcher', '');
  header.before(scrollWatcher);

  const observer = new IntersectionObserver(
    (entries) => {
      header.classList.toggle('sticky-header', !entries[0].isIntersecting);
    },
    { rootMargin: '50px 0px 0px 0px' }
  );
  observer.observe(scrollWatcher);
});
</script>

<style scoped></style>
