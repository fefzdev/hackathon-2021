<template>
  <Wrapper>
    <h1><span>Newt</span>ab</h1>
    <button @click="togglePopup">toggle</button>
  </Wrapper>
  <SideBar v-model:is-active="popupDisplayed" />
</template>

<script>
import { ref } from "@vue/reactivity";

import Wrapper from "@/components/Wrapper";
import SideBar from "@/components/SideBar";

export default {
  components: {
    Wrapper,
    SideBar,
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

<style lang="scss" scope>
h1 {
  color: $green-100;
  span {
    color: $red-100;
  }
}
</style>
