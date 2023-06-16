<template>
  <div class="work-card__info--badge">
    {{ props.badgeType }}
  </div>
</template>

<script setup>
import { isString } from '~/validators';

const props = defineProps({
  badgeType: {
    type: String,
    required: true,
    validate: isString,
  },
});
</script>

<style scoped></style>
