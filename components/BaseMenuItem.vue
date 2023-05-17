<template>
  <li>
    <nuxt-link v-bind="$attrs">
      <span>{{ props.link.id }}</span>
      {{ props.link.label }}
    </nuxt-link>
  </li>
</template>

<script setup lang="ts">
import { isPropNotUndefined } from '~/validators';

const props = defineProps({
  link: {
    type: Object,
    required: true,
    validation: isPropNotUndefined,
  },
});
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<style scoped></style>
