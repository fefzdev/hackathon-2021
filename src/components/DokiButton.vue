<template>
  <component
    :is="componentType"
    class="dokiButton"
    :class="{ purple: isPurple, white: isWhite }"
    :href="href"
  >
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
    isPurple: {
      type: Boolean,
      default: false,
    },
    isWhite: {
      type: Boolean,
      default: false,
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

.purple {
  background-color: $purple-100;
  color: $white-100;
}

.white {
  background-color: $white-100;
  color: $purple-100;
}
</style>
