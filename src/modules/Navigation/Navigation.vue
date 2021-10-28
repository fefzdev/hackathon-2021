<template>
  <header id="nav">
    <Wrapper class="inner">
      <Logo class="logo" />
      <GoogleBar v-if="isConnected" class="bar" />
      <MenuList v-if="isConnected" class="menu" />
      <p v-if="!isConnected">Déjà un compte ? Connectez-vous</p>
    </Wrapper>
  </header>
</template>

<script>
import Logo from "@/assets/logo.svg?inline";
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

  props: {
    isConnected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
#nav {
  width: 100%;
  background-color: white;
  box-shadow: 0px 0px 15px 0px #00000026;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  height: 76px;
}

.inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.bar {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
}

.logo {
  height: 40px;
}

p {
  font-size: 16px;
}
</style>
