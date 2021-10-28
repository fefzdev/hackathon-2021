<template>
  <div class="selectorContainer">
    <div
      v-for="(item, index) in buttonsList"
      :key="index"
      class="itemContainer"
      :class="{ selected: item.isSelected }"
      :style="item.style"
      @click="item.isSelected = !item.isSelected"
    >
      <img class="item" :src="item.view" />
      <Check class="check" />
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";

import Check from "@/assets/check.svg?inline";

export default {
  name: "Selector",

  components: {
    Check,
  },

  setup() {
    const randomPosition = (top, left) => {
      const rotate = Math.floor(Math.random() * 20 - 10);
      return `transform: translate(${left}%, ${top}%) rotate(${rotate}deg); `;
    };

    const buttonsList = reactive([
      {
        view: require("@/assets/categories/art-numerique.svg"),
        isSelected: false,
        style: randomPosition(-50, 146),
      },
      {
        view: require("@/assets/categories/artistes.svg"),
        isSelected: false,
        style: randomPosition(-50, -52),
      },
      {
        view: require("@/assets/categories/livres.svg"),
        isSelected: false,
        style: randomPosition(-53, 17),
      },
      {
        view: require("@/assets/categories/musique.svg"),
        isSelected: false,
        style: randomPosition(43, 10),
      },
      {
        view: require("@/assets/categories/photographie.svg"),
        isSelected: false,
        style: randomPosition(21, 104),
      },
      {
        view: require("@/assets/categories/street-art.svg"),
        isSelected: false,
        style: randomPosition(23, -66),
      },
      {
        view: require("@/assets/categories/film.svg"),
        isSelected: false,
        style: randomPosition(-31, -37),
      },
    ]);

    return {
      buttonsList,
      randomPosition,
    };
  },
};
</script>

<style lang="scss" scoped>
.selectorContainer {
  padding: 48px;
  position: relative;
  border-radius: 16px;
  background-color: $purple-100;
  max-width: 1060px;
  max-height: 560px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.itemContainer {
  position: absolute;

  .check {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-10deg) scale(0.7);
    opacity: 0;
  }

  &.selected {
    .check {
      transform: translate(-50%, -50%) rotate(0) scale(1);
      opacity: 1;
      transition-duration: 0.2s;
      transition-property: transform, opacity;
    }
    .item {
      animation: onSelect 0.3s;
      filter: brightness(0.5);
    }
  }
}

.item {
  box-sizing: content-box;
  filter: brightness(1);
  animation: filter 0.3s;
}

@keyframes onSelect {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
