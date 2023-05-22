<template>
  <div class="container">
    <div class="project-content">
      <div class="project-title">
        <h1>Project.</h1>
      </div>
      <div class="project-description">
        <div class="project-description__pic">
          <img src="@/assets/images/home-ui.jpg" alt="" />
          <div class="project-actions">
            <base-button :to="PAGE_WORK" :label="LABEL_WORK">
              <Icon name="material-symbols:arrow-outward" />
            </base-button>
            <base-button :to="PAGE_CONTACT" :label="LABEL_CONTACT">
              <Icon name="material-symbols:arrow-outward" />
            </base-button>
          </div>
        </div>
        <div class="project-description__text">
          <div>
            <strong>Home</strong> - is an all-in-one social service that will
            cover all aspects of your communication with your home and
            neighbors.
            <ul>
              <li>Internal notification and news system</li>
              <li>
                Private messages, chat with selected residents and general OSBB
                group with all residents or OSBB's modules separately
              </li>
              <li>
                Residents independently form a budget, determine contributions
                for the maintenance of the house, the sequence of solving
                problems. This makes it possible to quickly respond to
                emergencies, to decide what needs to be done in the house or on
                the adjacent territory in the first place, to ensure the
                protection of the personal and common property of residents
              </li>
              <li>
                The ability to choose a service provider such as (water,
                electricity, gas), and pay utility bills
              </li>
              <li>
                The best offers and wishes can be implemented in the OSBB by
                residents through internal voting system
              </li>
              <li>
                Transparency of expense. The residents' funds go exclusively to
                the needs of their home and are spent rationally. The head of
                the OSBB reports directly to the residents, so they are always
                aware of what the funds were spent on
              </li>
            </ul>
            <div class="project-description--tech">
              <h5>Tech stack:</h5>
              <p>
                Vue.js(v3), Vuex, VueRouter, Axios, TypeScript, PrimeVue,
                PrimeIcons, SCSS
              </p>
            </div>
          </div>
          <div>I am from: {{ route.params.id }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  LABEL_WORK,
  LABEL_CONTACT,
  PAGE_WORK,
  PAGE_CONTACT,
} from '~/constants';
const route = useRoute();
</script>
