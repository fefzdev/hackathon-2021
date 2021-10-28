<template>
  <header id="nav">
    <Wrapper class="inner">
      <div class="infos">
        <Logo class="logo" />
        <div class="menu">
          <span>Notre app</span>
          <ul class="linkList">
            <li>Télécharger</li>
            <li>A propos de nous</li>
            <li>Comment ça marche ?</li>
          </ul>
        </div>
        <div class="menu">
          <span>Légal</span>
          <ul class="linkList">
            <li>Mentions légales</li>
            <li>CVG</li>
          </ul>
        </div>
        <div class="menu">
          <ul class="linkList">
            <li>Notre adresse</li>
            <li>Mobile: +33 5 50 50 50 50</li>
            <li>Email: bonjour@doki.com</li>
          </ul>
          <ul class="socials">
            <li><Facebook /></li>
            <li><Twitter /></li>
            <li><Linkedin /></li>
          </ul>
        </div>
      </div>
      <p class="copyrights">© 2021 Doki</p>
    </Wrapper>
  </header>
</template>

<script>
import Logo from "@/assets/logo.svg?inline";
import Facebook from "@/assets/socials/Facebook.svg?inline";
import Twitter from "@/assets/socials/Twitter.svg?inline";
import Linkedin from "@/assets/socials/Linkedin.svg?inline";
import Wrapper from "@/components/Wrapper";

export default {
  name: "Footer",

  components: {
    Logo,
    Wrapper,
    Facebook,
    Twitter,
    Linkedin,
  },
};
</script>

<style lang="scss" scoped>
#nav {
  width: 100%;
  background-color: $purple-100;
  color: $white-100;
  padding: 91px 0 32px;
}

.infos {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.menu {
  font-size: 20px;
  span {
    font-weight: 600;
  }

  .linkList {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 24px;
  }

  li {
    color: rgba($color: white, $alpha: 0.5);
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}

.socials {
  display: flex;
  gap: 16px;

  margin-top: 32px;
}

.copyrights {
  margin-top: 64px;
  text-align: center;
}
</style>
