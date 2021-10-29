<template>
  <section
    v-if="isDisplayed"
    class="signInPopup"
    :style="{
      backgroundImage: 'url(' + require('@/assets/background.svg') + ')',
    }"
  >
    <Wrapper class="inner">
      <DokiRound class="sticker" />
      <h2>Creer votre compte Doki</h2>
      <p>pour sauvegarder vos préférences et profitez pleinement</p>
      <div class="buttonList">
        <a
          v-for="({ text, color }, index) in buttonList"
          :key="index"
          href="/newtab"
          :style="{
            backgroundColor: color,
          }"
          class="button"
        >
          {{ text }}
        </a>
      </div>
    </Wrapper>
  </section>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";

import Wrapper from "@/components/Wrapper";
import DokiRound from "@/assets/doki-round-blue.svg?inline";

export default {
  name: "SignInPopup",

  components: {
    Wrapper,
    DokiRound,
  },

  props: {
    isDisplayed: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["update:isDisplayed"],

  setup(props) {
    const buttonList = reactive([
      {
        text: "S’inscrire avec Google",
        color: "#C25545",
      },
      {
        text: "S’inscrire avec Facebook",
        color: "#435A92",
      },
      {
        text: "S’inscrire avec Twitter",
        color: "#6CABE5",
      },
      {
        text: "S’inscrire avec Email",
        color: "#13141B",
      },
      {
        text: "Essayer sans compte",
        color: "#9D78EB",
      },
    ]);

    watch(props.isDisplayed, (before, value) => {
      if (value) document.querySelector("body").style.overflow = "hidden";
      else document.querySelector("body").style.overflow = "";
    });

    return {
      buttonList,
    };
  },
};
</script>

<style lang="scss" scoped>
.signInPopup {
  position: fixed;
  top: 0;
  z-index: 6;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: $purple-100;
  display: flex;
}

.inner {
  margin: auto;
  text-align: center;
  color: $white-100;
}

.sticker {
  position: absolute;
  right: 0;
  top: 0;
}

h2 {
  @include big-title;
}

p {
  margin-top: 32px;
  @include body;
}

.buttonList {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 64px;
}

.button {
  padding: 16px;
  border-radius: 8px;
  border: 0;
  color: $white-100;
  max-width: 350px;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
}
</style>
