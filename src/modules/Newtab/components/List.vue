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
        />
      </div>

      <p class="endMessage">Reviens demain pour la suite 😎</p>
    </Wrapper>
  </section>
</template>

<script>
import Wrapper from "@/components/Wrapper";

import Card from "./Card.vue";
import { getCards } from "./CARDS.js";

export default {
  name: "List",

  components: {
    Wrapper,
    Card,
  },

  setup() {
    const cards = getCards();
    return {
      cards,
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
  color: $green-100;
  text-align: center;
  margin-top: 80px;
}
</style>
