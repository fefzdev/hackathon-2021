<template>
  <div class="container">
    <SearchIcon class="icon" />
    <input type="text" />
  </div>
</template>

<script>
import SearchIcon from "@/assets/search.svg?inline";

export default {
  components: {
    SearchIcon,
  },
};
</script>

<style lang="scss" scoped>
.container {
  border-radius: 16px;
  background-color: $black-75;
  border: solid 1px $black-25;
  display: flex;
  max-width: 400px;
}

.icon {
  margin: 12px 24px;
  width: 24px;
  height: 24px;

  path {
    fill: $white-100;
  }
}

input {
  padding: 12px 0;
  background-color: transparent;
  color: $white-100;
  border: 0;
  flex-grow: 1;
  outline: none;
  font-size: 18px;
}
</style>
