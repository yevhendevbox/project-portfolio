<template>
  <div class="container">
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
          <span>
            {{ project.title }}
          </span>
          <div style="white-space: break-spaces">
            {{ project.description }}
          </div>
          <div class="project-description--tech">
            <h2>Tech stack:</h2>
            <p>
              {{ project.techStack.join(', ') }}
            </p>
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
  description: '',
  posterUri: '',
  projectGithubUrl: '',
  productionUrl: '',
  techStack: [],
});
const route = useRoute();
const projectId = route.params.id;
const query = groq`*[_type == 'project']{'id': _id, title, description, 'posterUri': poster.asset._ref, projectGithubUrl, productionUrl, techStack}`;
const sanity = useSanity();
const { data } = await useAsyncData(() => sanity.fetch(query));

onMounted(() => {
  const currentProject = data._rawValue.filter(
    (project) => project.id === projectId
  )[0];
  project.value = currentProject;
});
</script>
