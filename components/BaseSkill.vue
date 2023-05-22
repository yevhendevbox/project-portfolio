<template>
  <div class="skill-bg">
    <div class="skill">
      <div class="skill-icon">
        <Icon :name="`${props.skill.icon}`" />
      </div>
      <div class="skill-description">
        {{ props.skill.description }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { isUndefined } from '~/validators';

const props = defineProps({
  skill: {
    type: Object,
    required: true,
    validator: isUndefined,
  },
});
</script>
<style scoped></style>
