<template>
  <div class="content__action">
    <NuxtLink v-bind="$attrs">
      {{ props.label }}
      <slot></slot>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { isStringValid } from '~/validators';

const props = defineProps({
  label: {
    type: String,
    required: true,
    validation: isStringValid,
  },
});
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
