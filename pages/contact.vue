<template>
  <div class="container">
    <div class="contact-title">
      <h1>Greetings.</h1>
    </div>
    <div class="contact-content">
      <p>
        I can help designe and build you next website. Contact me for more
        detailed information.
      </p>
      <p>
        May be your company have an open web developer position, related to my
        skills.
      </p>
      <ul>
        <li>
          Email: <a href="mailto:y.d.devbox@gmail.com">y.d.devbox@gmail.com</a>
        </li>
        <li>
          On the internet: <a href="">LinkedIn</a> / <a href="">GitHub</a> /
          <a href="">Twitter</a>
        </li>
      </ul>
      <base-button :to="PAGE_HOME" :label="LABEL_HOME">
        <Icon name="material-symbols:arrow-outward" />
      </base-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LABEL_HOME, PAGE_HOME } from '~/constants';
</script>
