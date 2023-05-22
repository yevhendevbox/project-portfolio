<template>
  <div class="content__action">
    <NuxtLink v-bind="$attrs">
      {{ props.label }}
      <slot></slot>
    </NuxtLink>
  </div>
</template>

<script setup>
import { isLabelValid } from '~/validators';

const props = defineProps({
  label: {
    type: String,
    required: true,
    validation: isLabelValid,
  },
});
</script>
<script>
export default {
  inheritAttrs: false,
};
</script>
