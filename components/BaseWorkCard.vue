<template>
  <div class="work-card__bg">
    <div class="work-card">
      <NuxtLink :to="`/work/${props.project.id}`">
        <div class="work-card__info">
          <div class="work-card__info--text">
            <h3>{{ props.project.title }}</h3>
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

<script setup lang="ts">
const props = defineProps({
  project: {
    type: Object,
    required: true,
    // validation:
  },
});
</script>

<style scoped></style>
