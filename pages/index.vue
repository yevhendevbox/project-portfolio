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

const query = groq`*[isRecent==true]{'title': title.en, 'posterUri': poster.asset._ref, 'slug': slug.current, 'excerpt': excerpt.en}`;
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
      'The Intuitive Web Framework. An open source framework under MIT license that makes web development simple and powerful.',
  },
  {
    name: 'JavaScript',
    icon: 'logos:javascript',
    description:
      'JavaScript is a widely-used programming language for web development, enabling interactive and dynamic features on websites.',
  },
  {
    name: 'TypeScript',
    icon: 'logos:typescript-icon',
    description:
      'TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.',
  },
  {
    name: 'Vuex',
    icon: 'vscode-icons:file-type-vueconfig',
    description:
      'Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application.',
  },
  {
    name: 'Pinia',
    icon: 'vscode-icons:file-type-vueconfig',
    description:
      'Pinia The intuitive store for Vue.js Type Safe, Extensible, and Modular by design. Forget you are even using a store.',
  },
  {
    name: 'HTML',
    icon: 'devicon:html5',
    description:
      'HTML (Hypertext Markup Language) is the backbone of the web. It is a markup language used to structure the content of web pages.',
  },
  {
    name: 'CSS',
    icon: 'devicon:css3',
    description:
      'Cascading Style Sheets (CSS) is a crucial component of web development. It is used to control the presentation and styling of web pages.',
  },
];
</script>
<style scoped></style>
