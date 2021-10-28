<template>
  <div id="welcome">
    <Hero />
    <Select />
  </div>
</template>

<script>
import { Hero, Select } from "./components";

export default {
  name: "Welcome",

  components: {
    Hero,
    Select,
  },
};
</script>

<style lang="scss" scoped>
div {
  overflow-x: hidden;
}
</style>
