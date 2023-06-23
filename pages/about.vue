<template>
  <div class="container">
    <div class="about-title">
      <h1>{{ t('about-title') }}</h1>
    </div>
    <div class="about-content">
      <div class="about-text">
        <p>
          {{ t('about-text-p1') }}
        </p>
        <p>
          {{ t('about-text-p2') }}
        </p>
        <p>
          {{ t('about-text-p3') }}
        </p>
        <div class="about-actions">
          <base-button
            :to="localePath(PAGE_HOME)"
            :label="t('back-home-label')"
          >
            <Icon name="material-symbols:arrow-outward" />
          </base-button>
          <base-button
            :to="localePath(PAGE_CONTACT)"
            :label="t('contact-me-label')"
          >
            <Icon name="material-symbols:arrow-outward" />
          </base-button>
          <base-button
            :to="localePath(LINK_DOWNLOAD)"
            :label="t('download-cv-label')"
            target="_blank"
            download
          >
            <Icon name="material-symbols:download" />
          </base-button>
        </div>
      </div>
      <div class="about-photo">
        <img src="@/assets/images/avatar_pic-min.jpeg" alt="My picture" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLocalePath } from 'vue-i18n-routing';
import { PAGE_HOME, PAGE_CONTACT, LINK_DOWNLOAD } from '~/constants';

const { t, locale } = useI18n();
const localePath = useLocalePath();

useHead({
  title: `${t('meta-title-about')} | ${
    locale === 'en' ? 'Y.D. Portfolio web app' : 'Y.D. Портфоліо сайт'
  }`,
  meta: [
    {
      name: 'description',
      content: t('meta-content-about'),
    },
  ],
});
</script>

<style scoped></style>
