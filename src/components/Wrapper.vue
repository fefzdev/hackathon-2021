<template>
  <div class="inner">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Wrapper",
};
</script>

<style lang="scss" scoped>
.inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
</style>
