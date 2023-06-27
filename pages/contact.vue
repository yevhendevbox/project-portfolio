<template>
  <div class="container">
    <div class="contact-title">
      <h1>{{ t('contact-title') }}</h1>
    </div>
    <div class="contact-content">
      <p>
        {{ t('contact-text-p1') }}
      </p>
      <p>
        {{ t('contact-text-p2') }}
      </p>
      <ul>
        <li>
          {{ t('contact-email') }}
          <a href="mailto:y.d.devbox@gmail.com">y.d.devbox@gmail.com</a>
        </li>
        <li>
          {{ t('contact-on-internet') }}
          <a href="https://www.linkedin.com/in/yevhen-dovhan/" target="_blank"
            >LinkedIn</a
          >
          / <a href="https://github.com/yevhendevbox">GitHub</a> /
          <a href="https://twitter.com/yevhen_dovhan">Twitter</a>
        </li>
      </ul>
      <base-button :to="localePath(PAGE_HOME)" :label="t('back-home-label')">
        <Icon name="material-symbols:arrow-outward" />
      </base-button>
    </div>
  </div>
</template>

<script setup>
import { useLocalePath } from 'vue-i18n-routing';
import { PAGE_HOME } from '~/constants';

const { t, locale } = useI18n();
const localePath = useLocalePath();

useHead({
  title: `${t('meta-title-contact')} | ${
    locale === 'en' ? 'Y.D. Portfolio web app' : 'Y.D. Портфоліо сайт'
  }`,
  meta: [
    {
      name: 'description',
      content: t('meta-content-contact'),
    },
  ],
});
</script>
