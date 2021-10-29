<template>
  <section class="container">
    <Wrapper>
      <h2>Decouvertes du jour</h2>

      <div class="list">
        <Card
          v-for="({ image, title, cardType, isBig }, index) in cards"
          :key="index"
          :image="image"
          :title="title"
          :card-type="cardType"
          :class="{ big: isBig }"
          @click="isPopupDisplayed = true"
        />
      </div>

      <p class="endMessage">Reviens demain pour la suite 😎</p>
    </Wrapper>
    <CardPopup v-model:isActive="isPopupDisplayed" />
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";

import Wrapper from "@/components/Wrapper";

import CardPopup from "./CardPopup.vue";
import Card from "./Card.vue";
import { getCards } from "./CARDS.js";

export default {
  name: "List",

  components: {
    Wrapper,
    Card,
    CardPopup,
  },

  setup() {
    const cards = getCards();
    const isPopupDisplayed = ref(false);

    return {
      cards,
      isPopupDisplayed,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 40px;
  padding-bottom: 120px;
}

h2 {
  @include title;
  @include magilio-font;

  color: $purple-100;
}

.list {
  margin-top: 56px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 16px;
}

.big {
  grid-column: span 3;
}

.endMessage {
  @include small-title;
  @include magilio-font;

  color: $green-100;
  text-align: center;
  margin-top: 80px;
}
</style>
