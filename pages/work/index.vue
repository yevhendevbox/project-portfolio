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
const projects = ref([]);

const query = groq`*[_type=="project"]{'id': _id, 'title': title.en,'slug': slug.current, 'excerpt': excerpt.en, techStack, 'type': typeOfProject.projectBadge->title}`;
const sanity = useSanity();
const { data } = await useAsyncData(() => sanity.fetch(query));
onMounted(() => {
  projects.value = data._rawValue;
});

useHead({
  title: 'Work | Y.D. portfolio web app',
  meta: [
    {
      name: 'description',
      content:
        'Work page - Yevhen Dovhan portfolio web application. Here you can explore my recent projects, position jobs',
    },
  ],
});
</script>

<style scoped></style>
