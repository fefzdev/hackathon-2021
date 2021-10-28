<template>
  <Popup v-model:isActive="computedIsDisplayed">
    <div class="view">
      <img :src="image" alt="" />
      <MusiqueBadge class="badge" />
    </div>
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
        et "Reason to Hate You" en 2017.
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
        Est-ce que je vais me faire virer ?"
      </p>
    </div>
    <div class="eventList">
      <div class="listHead">
        <p>En tournée</p>
        <p>Trier par : Date</p>
      </div>
      <div class="list">
        <div v-for="i in 4" :key="i" class="item">
          <div class="date">
            <span class="month">Jan</span>
            <span class="day">15</span>
          </div>
          <div class="itemContent">
            <p class="title">Mandilin Orange</p>
            <p class="infos">Sam. 21:30 • The forum, Inglewood</p>
          </div>
        </div>
      </div>

      <DokiButton class="button" is-white> Voir Plus </DokiButton>
    </div>
  </Popup>
</template>

<script>
import { computed } from "@vue/reactivity";

import Popup from "@/components/Popup";
import DokiButton from "@/components/DokiButton";
import image from "@/assets/popup-image.png";
import MusiqueBadge from "@/assets/categories/musique.svg?inline";

export default {
  components: {
    Popup,
    DokiButton,
    MusiqueBadge,
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
  font-family: Magilio, sans-serif;
  color: $white-100;
  margin-top: 54px;
}

.view {
  position: relative;
  margin: 120px 0 0 0;
}

.badge {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%) rotate(15deg);
  width: 200px;
  height: 200px;
}

.content {
  margin-top: 32px;
  color: $white-100;
  @include body;
  h4 {
    font-weight: bold;
    font-size: 16px;
  }
  p {
    font-size: 18px;
    line-height: 24px;
    margin-top: 8px;
  }
}

.eventList {
  width: 100%;
  margin-top: 54px;
}

.list {
  margin-top: 16px;
  display: grid;
  gap: 12px;
}

.listHead {
  display: flex;
  justify-content: space-between;
  color: $white-100;
}

.item {
  background-color: $purple-75;
  border-radius: 16px;
  padding: 12px;
  display: flex;
  align-items: center;
}

.date {
  background-color: $white-100;
  border-radius: 8px;
  width: 64px;
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    text-align: center;
    display: block;
  }

  .month {
    text-transform: uppercase;
  }

  .day {
    font-size: 32px;
  }
}

.itemContent {
  margin-left: 16px;
  @include body;

  .title {
    font-size: 24px;
    color: $white-100;
  }

  .infos {
    font-size: 20px;
    color: $purple-25;
    margin-top: 8px;
  }
}

.button {
  display: block;
  margin: 32px auto 0;
}
</style>
