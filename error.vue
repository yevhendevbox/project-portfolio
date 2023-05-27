<template>
  <div>
    <h1 class="hero__heading">{{ error.error.statusCode }}</h1>
    <p>Oooops.</p>
    <p>{{ error.error.statusMessage }}</p>
    <base-button :label="LABEL_HOME" @click="handleClearError">
      <Icon name="material-symbols:arrow-outward" />
    </base-button>
  </div>
</template>

<script setup>
import { LABEL_HOME } from './constants';

const error = defineProps({
  error: {
    type: Object,
    required: true,
    default() {
      return {
        statusCode: 404,
        statusMessage: 'Page Not Found',
      };
    },
  },
});

const handleClearError = () => clearError({ redirect: '/' });
</script>

<style scoped></style>
