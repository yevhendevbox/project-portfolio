<template>
  <div>
    <main class="hero">
      <div class="container">
        <div class="hero__title">
          <div class="hero__heading">
            <div class="hero__heading--word"><span>Yevhen</span></div>
            <div class="hero__heading--word"><span>Dovhan</span></div>
          </div>
          <div class="hero__subtitle">
            <div class="hero__subtitle--text">
              I'm a front-end developer based in Kyiv, Ukraine. I'm building
              things for the web. I like new technologies, always seeking new
              knowledge.
            </div>
            <div class="hero__subtitle--text">
              Currently, I'm focusing on building accessible, purposefull web
              applications.
            </div>
            <base-button :to="SKILLS_ANCHOR" :label="LABEL_SKILLS">
              <Icon name="material-symbols:arrow-outward" />
            </base-button>
          </div>
        </div>
      </div>
      <section class="skills">
        <div class="container">
          <h2 class="bg-title">Hard Skills</h2>
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
        <h6>Recent work.</h6>
        <div class="ricent-works--block">
          <div class="ricent-works--block__image">
            <SanityImage :asset-id="recentProject.posterUri" auto="format" />
          </div>
          <div class="ricent-works--block__content">
            <div class="ricent-works--title">
              <h2>{{ recentProject.title }}</h2>
            </div>
            <div class="ricent-works--description">
              {{ recentProject.excerpt }}
            </div>
            <div class="ricent-works--controls">
              <base-button :to="PAGE_WORK" :label="LABEL_EXPLORE_WORK">
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
          <h2>For more information feel free send me a message</h2>
          <base-button :to="PAGE_CONTACT" :label="LABEL_CONTACT">
            <Icon name="material-symbols:arrow-outward" />
          </base-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  LABEL_CONTACT,
  LABEL_EXPLORE_WORK,
  LABEL_SKILLS,
  PAGE_CONTACT,
  PAGE_WORK,
  SKILLS_ANCHOR,
} from '~/constants';

useHead({
  title: 'Home | Y.D. portfolio web app',
  meta: [
    {
      name: 'description',
      content: 'Personal portfolio Web application, Yevhen Dovhan',
    },
  ],
});
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
    description:
      'The Progressive JavaScript Framework. An approachable, performant and versatile framework for building web user interfaces.',
  },
  {
    name: 'Nuxt.js',
    icon: 'logos:nuxt-icon',
    description:
      'The Progressive JavaScript Framework. An approachable, performant and versatile framework for building web user interfaces.',
  },
  {
    name: 'JavaScript',
    icon: 'logos:javascript',
    description:
      'The Progressive JavaScript Framework. An approachable, performant and versatile framework for building web user interfaces.',
  },
  {
    name: 'TypeScript',
    icon: 'logos:typescript-icon',
    description:
      'The Progressive JavaScript Framework. An approachable, performant and versatile framework for building web user interfaces.',
  },
  {
    name: 'Vuex',
    icon: 'vscode-icons:file-type-vueconfig',
    description:
      'The Progressive JavaScript Framework. An approachable, performant and versatile framework for building web user interfaces.',
  },
  {
    name: 'Pinia',
    icon: 'vscode-icons:file-type-vueconfig',
    description:
      'The Progressive JavaScript Framework. An approachable, performant and versatile framework for building web user interfaces.',
  },
  {
    name: 'HTML',
    icon: 'devicon:html5',
    description:
      'The Progressive JavaScript Framework. An approachable, performant and versatile framework for building web user interfaces.',
  },
  {
    name: 'CSS',
    icon: 'devicon:css3',
    description:
      'The Progressive JavaScript Framework. An approachable, performant and versatile framework for building web user interfaces.',
  },
];
</script>
<style scoped></style>
