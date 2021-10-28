<template>
  <div class="container" :class="{ focused: isFocused }">
    <SearchIcon class="icon" />
    <input
      type="text"
      placeholder="Effectuer une rechercher Google ou saisissez une URL"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

import SearchIcon from "@/assets/search.svg?inline";

export default {
  components: {
    SearchIcon,
  },

  setup() {
    return {
      isFocused: ref(false),
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  border-radius: 32px;
  background-color: transparent;
  border: 0;
  display: flex;
  max-width: 520px;
  width: 100%;
  border: solid 2px transparent;

  &.focused {
    border: solid 2px $white-100;
  }
}

.icon {
  margin: 12px 0 12px 24px;
  width: 24px;
  height: 24px;

  path {
    fill: $white-100;
  }
}

input {
  padding: 12px 0;
  margin-left: 16px;
  background-color: transparent;
  border: 0;
  flex-grow: 1;
  outline: none;
  font-size: 16px;
}
</style>
