<template>
  <div class="hero">
    <div class="container">
      <div class="hero__title">
        <div class="hero__heading">
          <span>Y</span>
          <span>E</span>
          <span>V</span>
          <span>H</span>
          <span>E</span>
          <span>N</span>
        </div>
        <div class="hero__heading">
          <span>D</span>
          <span>O</span>
          <span>V</span>
          <span>H</span>
          <span>A</span>
          <span>N</span>
        </div>
      </div>
    </div>
    <section class="skills">
      <div class="container">
        <h2 class="bg-title">Hard Skills</h2>
        <div class="skills-wrapper">
          <base-skill
            v-for="skill in skills"
            :key="skill.name"
            :skill="skill"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { SkillInterface } from '~/types';

// const { findOne } = useStrapi();
useHead({
  title: 'Home | Y.D.',
  meta: [
    {
      name: 'description',
      content: 'Personal portfolio home page, Yevhen Dovhan',
    },
  ],
});
const skills: Array<SkillInterface> = [
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
// const media = useStrapiMedia('/uploads/hero_img_e13890e016.JPG');
// const response = await findOne('hero-sections', 1);
// const { Title, Subtitle } = response.data.attributes;
</script>

<style scoped></style>
