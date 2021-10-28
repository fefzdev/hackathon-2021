<template>
  <component :is="componentType" class="dokiButton" :href="href">
    <slot />
  </component>
</template>

<script>
import { computed } from "@vue/reactivity";

export default {
  name: "DokiButton",

  props: {
    href: {
      type: String,
      default: "",
    },
  },

  setup(props) {
    const componentType = computed(() => {
      if (props.href) return "a";
      return "button";
    });

    return {
      componentType,
    };
  },
};
</script>

<style lang="scss" scoped>
.dokiButton {
  padding: 12px 32px;
  background-color: $black-100;
  border: 0;
  border-radius: 4px;
  text-transform: none;
  color: $white-100;
  font-size: 24px;
  cursor: pointer;
}
</style>
