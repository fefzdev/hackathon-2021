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
      <Selector class="selector" @add-selection="selectList = $event" />
      <ul v-if="selectList" class="selectionList">
        <li>Votre selection :</li>
        <li v-for="(item, id) in selectList" :key="id">{{ item }}</li>
      </ul>
      <DokiButton class="button" is-purple @click="$emit('submit')"
        >Valider mon choix
      </DokiButton>
    </Wrapper>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";

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

  setup() {
    return {
      selectList: ref(null),
    };
  },
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
  max-width: 800px;
  span {
    color: $purple-100;
  }
}

.description {
  max-width: 800px;
  text-align: center;
  @include body;
  margin-top: 16px;
}

.selector {
  margin-top: 56px;
}

.selectionList {
  display: none;
  padding: 16px;
  display: flex;
  @include body;
  li {
    position: relative;
    padding: 0 4px;

    &:not(:first-child):not(:last-child)::after {
      content: "qzdq";
      position: absolute;
    }
  }
}

.button {
  margin-top: 80px;
}
</style>
