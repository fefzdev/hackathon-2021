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
    </Wrapper>
  </section>
</template>

<script>
import Wrapper from "@/components/Wrapper";

import Selector from "./Selector.vue";

export default {
  name: "Select",

  components: {
    Wrapper,
    Selector,
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  min-height: 700px;
  padding: 124px 0 48px;
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
</style>
