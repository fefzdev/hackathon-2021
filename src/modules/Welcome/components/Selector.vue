<template>
  <div class="selectorContainer">
    <div
      v-for="(item, index) in buttonsList"
      :key="index"
      class="itemContainer"
      :class="{ selected: isActive(item.id) }"
      :style="item.style"
      @click="addSelection(item.id)"
    >
      <img class="item" :src="item.view" />
      <Check class="check" />
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";

import Check from "@/assets/check.svg?inline";

export default {
  name: "Selector",

  components: {
    Check,
  },

  emits: ["add-selection"],

  setup(props, { emit }) {
    const randomPosition = (top, left) => {
      const rotate = Math.floor(Math.random() * 20 - 10);
      return `transform: translate(${left}%, ${top}%) rotate(${rotate}deg); `;
    };

    const buttonsList = reactive([
      {
        view: require("@/assets/categories/art-numerique.svg"),
        isSelected: false,
        style: randomPosition(-50, 146),
        id: "Art Numerique",
      },
      {
        view: require("@/assets/categories/artistes.svg"),
        isSelected: false,
        style: randomPosition(-50, -52),
        id: "Artistes",
      },
      {
        view: require("@/assets/categories/livres.svg"),
        isSelected: false,
        style: randomPosition(-53, 17),
        id: "Livres",
      },
      {
        view: require("@/assets/categories/musique.svg"),
        isSelected: false,
        style: randomPosition(43, 10),
        id: "Musique",
      },
      {
        view: require("@/assets/categories/photographie.png"),
        isSelected: false,
        style: randomPosition(21, 104),
        id: "Photographie",
      },
      {
        view: require("@/assets/categories/street-art.svg"),
        isSelected: false,
        style: randomPosition(23, -66),
        id: "Street Art",
      },
      {
        view: require("@/assets/categories/film.svg"),
        isSelected: false,
        style: randomPosition(-31, -37),
        id: "Films",
      },
    ]);

    const selection = ref([]);

    const addSelection = (id) => {
      if (selection.value.includes(id)) {
        const index = selection.value.indexOf(id);
        selection.value.splice(index, 1);
      } else selection.value.push(id);

      emit("add-selection", selection);
    };

    const isActive = (id) => selection.value.includes(id);

    return {
      buttonsList,
      randomPosition,
      addSelection,
      isActive,
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
  height: 100vh;
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
  cursor: pointer;
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
