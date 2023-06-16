<template>
  <div class="work-card__bg">
    <div class="work-card">
      <NuxtLink :to="`/work/${props.project.slug}`">
        <div class="work-card__info">
          <div class="work-card__info--text">
            <div id="work-card--title">
              <div class="line-1">{{ props.project.title }}</div>
              <div class="line-2">{{ props.project.title }}</div>
            </div>
            <p>{{ props.project.excerpt }}</p>
          </div>
          <base-work-badge :badge-type="props.project.type" />
        </div>
      </NuxtLink>
      <div class="work-card--tags">
        <base-tag
          v-for="(tag, idx) in props.project.techStack"
          :key="idx"
          :tag-name="tag"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { isWorkTypeValid } from '~/validators';
const props = defineProps({
  project: {
    type: Object,
    required: true,
    validation: isWorkTypeValid,
  },
});
</script>

<style scoped></style>
