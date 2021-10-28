<template>
  <div :class="{ active: isActive }">
    <div
      class="container"
      :style="{
        backgroundImage: 'url(' + require('@/assets/background-3.svg') + ')',
      }"
    >
      <button class="closeButton" @click="$emit('update:isActive', false)">
        X
      </button>
      <slot />
    </div>
    <div class="backdrop" @click="$emit('update:isActive', false)" />
  </div>
</template>

<script>
export default {
  name: "Popup",

  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["update:isActive"],
};
</script>

<style lang="scss" scoped>
.container {
  z-index: 10;
  height: 100%;
  border-radius: 25px 0 0 25px;
  max-width: 600px;
  padding: 24px;
  background-color: $purple-100;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  right: 0;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  overflow-y: scroll;
}

.closeButton {
  align-self: flex-end;
}

.backdrop {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: $black-100, $alpha: 0);
  pointer-events: none;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(1px);
  opacity: 0;
}

.active {
  .backdrop {
    background-color: rgba($color: $black-100, $alpha: 0.1);
    opacity: 1;
    pointer-events: all;
  }
  .container {
    transform: translateX(0);
  }
}
</style>
