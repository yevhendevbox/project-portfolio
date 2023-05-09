<template>
  <div>
    <the-navbar />
    <!-- Pages content goes here -->
    <main>
      <div>
        <slot />
      </div>
    </main>
    <the-footer />
  </div>
</template>

<script setup lang="ts"></script>
<style scoped></style>
