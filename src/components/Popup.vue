<template>
  <div v-if="isActive" :class="{ active: isActive }">
    <div class="container">
      <button @click="$emit('update:isActive', false)">close</button>
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
  z-index: 2;
  height: 400px;
  border-radius: 4px;
  width: 400px;
  padding: 24px;
  background-color: $white-100;
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.backdrop {
  position: absolute;
  z-index: 1;
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
    opacity: 1;
    pointer-events: all;
  }
}
</style>
