<template>
  <div>
    <main class="hero">
      <div class="container">
        <div class="hero__title">
          <div class="hero__heading">
            <div class="hero__heading--word">
              <span>{{ t('hero-title-name') }}</span>
            </div>
            <div class="hero__heading--word">
              <span>{{ t('hero-title-lastName') }}</span>
            </div>
          </div>
          <div class="hero__subtitle">
            <div class="hero__subtitle--text">
              {{ t('hero-desc-p1') }}
            </div>
            <div class="hero__subtitle--text">
              {{ t('hero-desc-p2') }}
            </div>
            <base-button :to="SKILLS_ANCHOR" :label="t('skills-label')">
              <Icon name="material-symbols:arrow-outward" />
            </base-button>
          </div>
        </div>
      </div>
      <section class="skills">
        <div class="container">
          <h2 class="bg-title">{{ t('skills-title') }}</h2>
          <div id="skills" class="skills-wrapper">
            <base-skill
              v-for="skill in skills"
              :key="skill.name"
              :skill="skill"
            />
          </div>
        </div>
      </section>
    </main>
    <section class="ricent-works">
      <div class="container">
        <h6 :class="{ 'title-uk': locale === 'uk' }">
          {{ t('recent-work-title') }}
        </h6>
        <div class="ricent-works--block">
          <div class="ricent-works--block__image">
            <SanityImage :asset-id="recentProject.posterUri" auto="format" />
          </div>
          <div class="ricent-works--block__content">
            <div class="ricent-works--title">
              <h2>{{ recentProject.title[locale] }}</h2>
            </div>
            <div class="ricent-works--description">
              {{ recentProject.excerpt[locale] }}
            </div>
            <div class="ricent-works--controls">
              <base-button :to="PAGE_WORK" :label="t('my-works-label')">
                <Icon name="material-symbols:arrow-outward" />
              </base-button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="contact-me">
      <div class="container">
        <div class="contact-me--content">
          <h2>{{ t('contact-me-title') }}</h2>
          <base-button :to="PAGE_CONTACT" :label="t('contact-me-label')">
            <Icon name="material-symbols:arrow-outward" />
          </base-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { PAGE_CONTACT, PAGE_WORK, SKILLS_ANCHOR } from '~/constants';

useHead({
  title: 'Home | Y.D. portfolio web app',
  meta: [
    {
      name: 'description',
      content: 'Personal portfolio Web application, Yevhen Dovhan',
    },
  ],
});
const { t, locale } = useI18n();

const recentProject = ref({
  title: '',
  posterUri: '',
  slug: '',
  excerpt: '',
});

const query = groq`*[isRecent==true]{title, 'posterUri': poster.asset._ref, 'slug': slug.current, excerpt}`;
const sanity = useSanity();
const { data } = await useAsyncData(() => sanity.fetch(query));

onMounted(() => {
  recentProject.value = data._rawValue[0];
});

const skills = [
  {
    name: 'Vue.js',
    icon: 'logos:vue',
    description: `Vue - ${t('vue')}`,
  },
  {
    name: 'Nuxt.js',
    icon: 'logos:nuxt-icon',
    description: `Nuxt - ${t('nuxt')}`,
  },
  {
    name: 'JavaScript',
    icon: 'logos:javascript',
    description: `JavaScript ${t('js')}`,
  },
  {
    name: 'TypeScript',
    icon: 'logos:typescript-icon',
    description: `TypeScript ${t('ts')}`,
  },
  {
    name: 'Vuex',
    icon: 'vscode-icons:file-type-vueconfig',
    description: `Vuex ${t('vuex')}`,
  },
  {
    name: 'Pinia',
    icon: 'vscode-icons:file-type-vueconfig',
    description: `Pinia - ${t('pinia')}`,
  },
  {
    name: 'HTML',
    icon: 'devicon:html5',
    description: `HTML (Hypertext Markup Language) ${t('html')}`,
  },
  {
    name: 'CSS',
    icon: 'devicon:css3',
    description: `Cascading Style Sheets (CSS) ${t('css')}`,
  },
];
</script>
<style scoped></style>
