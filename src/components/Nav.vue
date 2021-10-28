<template>
  <header class="container">
    <Logo />
  </header>
</template>

<script>
import Logo from "@/components/Logo";

export default {
  name: "Nav",

  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 24px 0;
  background-color: red;
}
</style>
