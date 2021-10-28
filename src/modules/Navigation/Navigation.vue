<template>
  <header id="nav">
    <Wrapper class="inner">
      <Logo />
      <GoogleBar class="bar" />
      <MenuList class="menu" />
    </Wrapper>
  </header>
</template>

<script>
import Logo from "@/components/Logo";
import Wrapper from "@/components/Wrapper";

import { GoogleBar, MenuList } from "./components";

export default {
  name: "Nav",

  components: {
    Logo,
    Wrapper,
    GoogleBar,
    MenuList,
  },
};
</script>

<style lang="scss" scoped>
#nav {
  width: 100%;
}

.inner {
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bar {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
}
</style>
