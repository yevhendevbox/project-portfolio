<template>
  <li>
    <nuxt-link v-bind="$attrs">
      <span>{{ props.link.id }}</span>
      {{ props.link.label }}
    </nuxt-link>
  </li>
</template>

<script setup>
import { isPageValid } from '~/validators';

const props = defineProps({
  link: {
    type: Object,
    required: true,
    validation: isPageValid,
  },
});
</script>
<script>
export default {
  inheritAttrs: false,
};
</script>

<style scoped></style>
