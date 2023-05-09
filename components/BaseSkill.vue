<template>
  <div class="skill">
    <div class="skill-icon">
      <Icon :name="`${props.skill.icon}`" />
    </div>
    <div class="skill-description">
      {{ props.skill.description }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'nuxt/dist/app/compat/capi';
import { SkillInterface } from '~/types';
import { isSkillUndefined } from '~/validators';

const props = defineProps({
  skill: {
    type: Object as PropType<SkillInterface>,
    required: true,
    validator: isSkillUndefined,
  },
});
</script>
<style scoped></style>
