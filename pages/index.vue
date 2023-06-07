<template>
  <div>
    <main class="hero">
      <div class="container">
        <div class="hero__title">
          <div class="hero__heading">YEVHEN DOVHAN</div>
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
            <img src="@/assets/images/home-ui.jpg" alt="" />
          </div>
          <div class="ricent-works--block__content">
            <div class="ricent-works--title">
              <h2>Home-UI Social application</h2>
            </div>
            <div class="ricent-works--description">
              Home - is an all-in-one social service that will cover all aspects
              of your communication with your home and neighbors.
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
  </div>
</template>

<script setup>
import {
  LABEL_EXPLORE_WORK,
  LABEL_SKILLS,
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
