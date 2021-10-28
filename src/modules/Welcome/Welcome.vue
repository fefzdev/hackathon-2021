<template>
  <div id="welcome">
    <Navigation />
    <Hero />
    <Select @submit="isPopupDisplayed = true" />
    <SignInPopup v-model:is-displayed="isPopupDisplayed" />
    <Footer />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

import Navigation from "@/modules/Navigation/Navigation.vue";
import Footer from "@/modules/Footer/Footer.vue";

import { Hero, Select, SignInPopup } from "./components";

export default {
  name: "Welcome",

  components: {
    Hero,
    Select,
    SignInPopup,
    Navigation,
    Footer,
  },

  setup() {
    const isPopupDisplayed = ref(false);
    return {
      isPopupDisplayed,
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  overflow-x: hidden;
}
</style>
