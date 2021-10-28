<template>
  <section class="container">
    <Wrapper class="inner">
      <img class="doky" :src="dokyRound" alt="" />
      <p class="callout">L’artiste du jour</p>
      <h1>Ed sheeran</h1>
      <p class="description">
        ...vient de sortit son nouvel album. Plongez dans son univers et
        découvrez ses 3 coups de coeur !
      </p>
      <img class="artist" :src="artist" alt="" />

      <div class="buttonContainer">
        <DokiButton is-white> Découvrir </DokiButton>
        <div class="views">
          <span class="icon">
            <EyeIcon />
          </span>
          <p>30 000 Vues</p>
        </div>
      </div>
    </Wrapper>
  </section>
</template>

<script>
import Wrapper from "@/components/Wrapper";
import DokiButton from "@/components/DokiButton";
import dokyRound from "@/assets/doky-round.png";
import artist from "@/assets/artist.png";
import EyeIcon from "@/assets/eye.svg?inline";

export default {
  name: "Hero",

  components: {
    Wrapper,
    DokiButton,
    EyeIcon,
  },

  setup() {
    return {
      dokyRound,
      artist,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 196px;
  padding-bottom: 40px;
  color: $white-100;
}

.inner {
  background-color: $purple-100;
  border-radius: 32px;
  padding: 92px;
  position: relative;
}

.doky {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}

.callout {
  text-transform: uppercase;
}

h1 {
  font-size: 144px;
}

p {
  font-size: 16px;
}

.description {
  max-width: 400px;
}

.artist {
  position: absolute;
  bottom: -0;
  right: -32px;
}

.buttonContainer {
  display: flex;
  align-items: center;
  margin-top: 120px;
  gap: 20px;
}

.views {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon {
  background-color: $purple-75;
  border-radius: 8px;
  display: block;
  padding: 8px;

  svg {
    display: block;
  }
}
</style>
