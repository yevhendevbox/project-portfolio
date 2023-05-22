<template>
  <div class="hero">
    <div class="container">
      <div class="hero__title">
        <div class="hero__heading">YEVHEN DOVHAN</div>
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

<script setup>
useHead({
  title: 'Home | Y.D.',
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
