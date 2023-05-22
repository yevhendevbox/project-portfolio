<template>
  <div class="container">
    <div class="work-title">
      <h1>my works</h1>
    </div>
    <div class="work-content">
      <base-work-card
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script setup>
import { WORK_TYPE_POSITION, WORK_TYPE_PROJECT } from '~/constants';
const projects = [
  {
    id: 1,
    title: 'Home',
    description: 'Cooperations social app',
    imageSrc: 'home-ui.jpg',
    type: WORK_TYPE_POSITION,
  },
  {
    id: 2,
    title: 'Form Settings App',
    description: 'Project frontend dev position',
    imageSrc: 'home-ui.jpg',
    type: WORK_TYPE_PROJECT,
  },
  {
    id: 3,
    title: 'Portolio app',
    description: 'Personal web application',
    imageSrc: 'home-ui.jpg',
    type: WORK_TYPE_PROJECT,
  },
  {
    id: 4,
    title: 'Weather tracking app',
    description: 'Project frontend dev position',
    imageSrc: 'home-ui.jpg',
    type: WORK_TYPE_PROJECT,
  },
];
</script>

<style scoped></style>
