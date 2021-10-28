<template>
  <Popup v-model:isActive="computedIsDisplayed">
    <img :src="image" alt="" />
    <h3>Rhys Lewis Things I chose to remember</h3>
    <div class="content">
      <h4>À propos de l’artiste</h4>
      <p>
        Originaire d'Oxfordshire, en Angleterre, basé à Londres, Rhys Lewis a
        commencé à jouer de la guitare à 13 ans, mais n'a commencé à chanter
        qu'après avoir rejoint le groupe de ses frères plus tard. Il a
        finalement commencé à écrire des chansons par lui-même, partageant son
        premier matériel en utilisant le moniker Rhys Lewis & the Relics. Cela a
        conduit à un contrat d'enregistrement avec Decca, qui a publié son
        premier single solo officiel, "Waking Up Without You", à la fin de 2016.
        Il a sorti plusieurs autres chansons au cours de l'année suivante,
        attirant des millions de streams pour des morceaux comme "Be Your Man"
        et "Reason to Hate You" en 2017. Cette dernière est apparue sur l'EP Bad
        Timing au début de 2018. Pendant ce temps, Lewis a effectué une tournée
        en soutien à James TW et JP Cooper. Lewis a sorti une série de singles à
        succès tout au long de 2019, dont la plupart sont apparus sur son
        premier album, Things I Chose to Remember, l'année suivante.
      </p>
    </div>
    <div class="content">
      <h4>Démarche</h4>
      <p>
        Il fut un temps où Rhys Lewis n'était pas sûr que son premier album
        verrait le jour. Les chansons étaient en place, mais la vie de
        l'auteur-compositeur-interprète basé à Londres ne l'était pas. "Je
        venais de vivre une rupture et je venais de virer un manager",
        raconte-t-il à Apple Music. "J'étais vraiment anxieux quant à
        l'orientation de ma vie. J'avais signé depuis deux ans, et je me suis
        dit : "Attends. Je n'ai pas sorti d'album. Je n'ai pas de manager.
        Est-ce que je vais me faire virer ?" Il ne s'est pas fait virer, mais
        son label a suggéré que ce ne serait pas une bonne idée de sortir un
        album alors qu'il n'avait pas de manager. Alors, pendant qu'il en
        cherchait un nouveau, Lewis a continué à écrire des chansons.
      </p>
    </div>
  </Popup>
</template>

<script>
import { computed } from "@vue/reactivity";

import Popup from "@/components/Popup";
import image from "@/assets/popup-image.png";

export default {
  components: {
    Popup,
  },

  props: {
    isDisplayed: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["update:isDisplayed"],

  setup(props, { emit }) {
    const computedIsDisplayed = computed({
      get: () => props.isDisplayed,
      set: (newData) => {
        emit("update:isDisplayed", newData);
      },
    });

    return {
      image,
      computedIsDisplayed,
    };
  },
};
</script>

<style lang="scss" scoped>
h3 {
  @include small-title;
  color: $white-100;
  margin-top: 54px;
}

.content {
  margin-top: 32px;
  h4 {
    font-weight: bold;
  }
  p {
    font-size: 18px;
    margin-top: 8px;
  }
}
</style>
