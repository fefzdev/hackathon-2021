<template>
  <div
    id="Newtab"
    :style="{
      backgroundImage: 'url(' + require('@/assets/background-2.svg') + ')',
    }"
  >
    <Navigation is-connected />
    <Hero />
    <List />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

import Navigation from "@/modules/Navigation/Navigation.vue";

import { Hero, List } from "./components";

export default {
  name: "Welcome",

  components: {
    Hero,
    Navigation,
    List,
  },

  setup() {
    const isPopupDisplayed = ref(false);
    return {
      isPopupDisplayed,
    };
  },
};
</script>

<style lang="scss" scoped></style>
