<template>
  <div class="container">
    <Head>
      <Title>{{ project.title + ' | Y.D. portfolio web app' }}</Title>
      <Meta name="description" :content="project.excerpt" />
    </Head>
    <div class="project-content">
      <div class="project-title">
        <h1>Project.</h1>
      </div>
      <div class="project-description">
        <div class="project-description__pic">
          <SanityImage :asset-id="project.posterUri" auto="format" />
          <div class="project-actions">
            <base-button :to="PAGE_WORK" :label="LABEL_WORK">
              <Icon name="material-symbols:arrow-outward" />
            </base-button>
            <base-button :to="PAGE_CONTACT" :label="LABEL_CONTACT">
              <Icon name="material-symbols:arrow-outward" />
            </base-button>
            <base-button
              :to="project.projectGithubUrl"
              :label="SOURCE_CODE"
              target="_blank"
            >
              <Icon name="material-symbols:arrow-outward" />
            </base-button>
            <base-button
              v-show="project.productionUrl"
              :to="project.productionUrl"
              :label="FINAL_PRODUCT"
              target="_blank"
            >
              <Icon name="material-symbols:arrow-outward" />
            </base-button>
          </div>
        </div>
        <div class="project-description__text">
          <h1>
            {{ project.title }}
          </h1>
          <div style="white-space: break-spaces">
            {{ project.description }}
          </div>
          <div class="project-description--tech">
            <h2>Tech stack:</h2>
            <div class="flex project-description--tech__tags">
              <base-tag
                v-for="(tag, idx) in project.techStack"
                :key="idx"
                :tag-name="tag"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  LABEL_WORK,
  LABEL_CONTACT,
  PAGE_WORK,
  PAGE_CONTACT,
  SOURCE_CODE,
  FINAL_PRODUCT,
} from '~/constants';
const project = ref({
  title: '',
  slug: '',
  excerpt: '',
  description: '',
  posterUri: '',
  projectGithubUrl: '',
  productionUrl: '',
  techStack: [],
});

const route = useRoute();
const slug = route.params.slug;
const query = groq`*[_type == 'project']{'id': _id, title, 'slug': slug.current, excerpt,  description, 'posterUri': poster.asset._ref, projectGithubUrl, productionUrl, techStack}`;
const sanity = useSanity();
const { data } = await useAsyncData(() => sanity.fetch(query));

onMounted(() => {
  const currentProject = data._rawValue.filter(
    (project) => project.slug === slug
  )[0];

  if (!currentProject) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Project not found!',
      fatal: true,
    });
  }

  project.value = currentProject;
});
</script>
