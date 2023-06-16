<template>
  <div class="work-card--tag">
    {{ props.tagName }}
  </div>
</template>

<script setup>
import { isString } from '~/validators';

const props = defineProps({
  tagName: {
    type: String,
    required: true,
    validate: isString,
  },
});
</script>

<style scoped></style>
