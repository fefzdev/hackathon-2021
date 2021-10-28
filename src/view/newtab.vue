<template>
  <Navigation />
  <h1><span>Newt</span>ab</h1>
  <button @click="togglePopup">toggle</button>
  <Popup v-model:is-active="popupDisplayed" />
</template>

<script>
import { ref } from "@vue/reactivity";

import Navigation from "@/modules/Navigation/Navigation.vue";
import Popup from "@/components/Popup";

export default {
  name: "Newtab",

  components: {
    Navigation,
    Popup,
  },

  setup() {
    const popupDisplayed = ref(false);
    const togglePopup = () => {
      popupDisplayed.value = !popupDisplayed.value;
    };

    return {
      popupDisplayed,
      togglePopup,
    };
  },
};
</script>

<style lang="scss" scoped></style>
