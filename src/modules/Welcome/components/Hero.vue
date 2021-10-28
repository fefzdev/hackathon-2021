<template>
  <section
    class="container"
    :style="{
      backgroundImage: 'url(' + require('@/assets/background.svg') + ')',
    }"
  >
    <Wrapper>
      <h1>Bienvenue sur <span class="big">Doki</span>,</h1>
      <p>votre dose d’art au quotidien</p>
      <DokiButton class="button">
        Commencer
        <ArrowBottom class="arrow" />
      </DokiButton>
      <OkHand class="okHand left" />
      <OkHand class="okHand right" />
    </Wrapper>
  </section>
</template>

<script>
import Wrapper from "@/components/Wrapper";
import DokiButton from "@/components/DokiButton";
import OkHand from "@/assets/main-seule.svg?inline";
import ArrowBottom from "@/assets/arrow-bottom.svg?inline";

export default {
  name: "Hero",

  components: {
    Wrapper,
    DokiButton,
    OkHand,
    ArrowBottom,
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: $purple-100;
  height: 100vh;
  min-height: 700px;
  position: relative;
}

.inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

h1 {
  @include big-title;
  color: $white-100;
  text-align: center;
  text-shadow: -2px -2px 0 $purple-100, 2px -2px 0 $purple-100,
    -2px 2px 0 $purple-100, 2px 2px 0 $purple-100;

  span {
    font-size: 144px;
    color: $black-100;
  }
}

p {
  @include title;
  color: $white-100;
  text-align: center;
  text-shadow: -2px -2px 0 $purple-100, 2px -2px 0 $purple-100,
    -2px 2px 0 $purple-100, 2px 2px 0 $purple-100;
}

.button {
  margin-top: 56px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.arrow {
  transform: translateY(2px);
}

.okHand {
  position: absolute;
  bottom: -48px;
  width: 448px;
  height: auto;

  &.left {
    left: -96px;
  }
  &.right {
    right: -96px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
}
</style>
