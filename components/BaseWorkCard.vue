<template>
  <div class="work-card__bg">
    <div class="work-card">
      <NuxtLink :to="`/work/${props.project.id}`">
        <div class="work-card__info">
          <div class="work-card__info--text">
            <div id="work-card--title">
              <div class="line-1">{{ props.project.title }}</div>
              <div class="line-2">{{ props.project.title }}</div>
            </div>
            <p>{{ props.project.description }}</p>
          </div>
          <div class="work-card__info--badge">
            {{ props.project.type }}
          </div>
        </div>
      </NuxtLink>
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
