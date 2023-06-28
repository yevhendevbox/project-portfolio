<template>
  <div class="container">
    <div class="work-title">
      <h1>{{ t('work-title') }}</h1>
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
const { t, locale } = useI18n();

const query = groq`*[_type=="project"]{'id': _id, 'title': title.en,'slug': slug.current, 'excerpt': excerpt.en, techStack, 'type': typeOfProject.projectBadge->title}`;
const sanity = useSanity();
const { data } = await useAsyncData(() => sanity.fetch(query));
onMounted(() => {
  projects.value = data._rawValue;
});

useHead({
  title: `${t('meta-title-work')} | ${
    locale === 'en' ? 'Y.D. Portfolio web app' : 'Y.D. Портфоліо сайт'
  }`,
  meta: [
    {
      name: 'description',
      content: t('meta-content-work'),
    },
  ],
});
</script>

<style scoped></style>
