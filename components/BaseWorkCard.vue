<template>
  <div class="work-card__bg">
    <div class="work-card">
      <NuxtLink :to="localePath(`/work/${props.project.slug}`)">
        <div class="work-card__info">
          <div class="work-card__info--text">
            <div id="work-card--title">
              <div class="line-2">{{ props.project.title[locale] }}</div>
              <div class="line-1">{{ props.project.title[locale] }}</div>
            </div>
            <p>{{ props.project.excerpt[locale] }}</p>
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
import { useLocalePath } from 'vue-i18n-routing';
import { isWorkTypeValid } from '~/validators';

const { locale } = useI18n();
const localePath = useLocalePath();

const props = defineProps({
  project: {
    type: Object,
    required: true,
    validation: isWorkTypeValid,
  },
});
</script>

<style scoped></style>
