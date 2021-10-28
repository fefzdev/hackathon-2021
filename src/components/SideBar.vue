<template>
  <div class="container" :class="{ active: isActive }">
    <button @click="$emit('update:isActive', false)">close</button>
  </div>
  <div
    class="backdrop"
    :class="{ active: isActive }"
    @click="$emit('update:isActive', false)"
  />
</template>

<script>
export default {
  name: "SideBar",

  emits: ["update:isActive"],

  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scope>
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

  &.active {
    opacity: 1;
    pointer-events: all;
  }
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

  &.active {
    background-color: rgba($color: $black-100, $alpha: 0.1);
    opacity: 1;
    pointer-events: all;
  }
}
</style>
