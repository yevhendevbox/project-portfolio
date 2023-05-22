<template>
  <div class="container">
    <div class="about-title">
      <h1>Who am i</h1>
    </div>
    <div class="about-content">
      <div class="about-text">
        <p>
          Hi there! I'm a front-end developer with almost 1 year of experience,
          specializing in HTML, CSS, JavaScript, TypeScript, Vue.js, Vuex,
          Pinia, Nuxt.js, REST API, GIT, and related technologies.
        </p>
        <p>
          As a team player, I enjoy collaborating with others and am always open
          to learning from my colleagues. I'm a good listener and a friendly
          person, which helps me communicate effectively with anyone, regardless
          of their technical background. Whether I'm working on a new project or
          maintaining an existing one, I always strive to deliver high-quality
          code that meets the requirements of the business and the end-users.
          I'm passionate about web development and love to stay up-to-date with
          the latest trends and best practices in the field.
        </p>
        <p>
          I am currently actively seeking new job opportunities, and I am open
          to any exciting projects that may come my way. If you are interested
          in working together, please do not hesitate to reach out to me.
        </p>
        <div class="about-actions">
          <base-button :to="PAGE_HOME" :label="LABEL_HOME">
            <Icon name="material-symbols:arrow-outward" />
          </base-button>
          <base-button :to="PAGE_CONTACT" :label="LABEL_CONTACT">
            <Icon name="material-symbols:arrow-outward" />
          </base-button>
          <base-button
            :to="LINK_DOWNLOAD"
            :label="LABEL_DOWNLOAD_CV"
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
import {
  LABEL_HOME,
  LABEL_CONTACT,
  LABEL_DOWNLOAD_CV,
  PAGE_HOME,
  PAGE_CONTACT,
  LINK_DOWNLOAD,
} from '~/constants';
</script>

<style scoped></style>
