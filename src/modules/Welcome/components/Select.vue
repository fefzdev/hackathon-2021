<template>
  <section class="container">
    <Wrapper>
      <h2>
        Cliquez sur le type de contenu que vous souhaitez voir sur
        <span class="purple"> Doki</span>.
      </h2>
      <p class="description">
        Ne vous en faites pas, vous pourrez toujours modifier ça dans vos
        réglages 😉
      </p>
      <Selector class="selector" />
      <DokiButton class="button" is-purple @click="$emit('submit')"
        >Valider mon choix</DokiButton
      >
    </Wrapper>
  </section>
</template>

<script>
import Wrapper from "@/components/Wrapper";
import DokiButton from "@/components/DokiButton";

import Selector from "./Selector.vue";

export default {
  name: "Select",

  components: {
    Wrapper,
    Selector,
    DokiButton,
  },

  emits: ["submit"],
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 700px;
  padding: 124px 0;
}

.inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

h2 {
  @include small-title;
  text-align: center;
  span {
    color: $purple-100;
  }
}

.description {
  text-align: center;
  @include body;
  margin-top: 16px;
}

.selector {
  margin-top: 56px;
}

.button {
  margin-top: 80px;
}
</style>
