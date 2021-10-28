<template>
  <div id="welcome">
    <Hero />
  </div>
</template>

<script>
import { Hero } from "./components";

export default {
  name: "Welcome",

  components: {
    Hero,
  },
};
</script>

<style lang="scss" scoped>
div {
  overflow-x: hidden;
}
</style>
