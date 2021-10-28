<template>
  <div
    class="card"
    :style="{
      backgroundImage: 'url(' + image + ')',
    }"
  >
    <div class="infos">
      <div class="content">
        <span>{{ cardType }}</span>
        <h3>{{ title }}</h3>
      </div>
      <div class="backdrop" />
    </div>

    <div class="actions">
      <BookmarkIcon class="icon" />
      <HideIcon class="icon" />
      <ShareIcon class="icon" />
    </div>
  </div>
</template>

<script>
import BookmarkIcon from "@/assets/bookmark-white.svg?inline";
import HideIcon from "@/assets/eye-off.svg?inline";
import ShareIcon from "@/assets/share.svg?inline";

export default {
  name: "Card",

  components: {
    BookmarkIcon,
    HideIcon,
    ShareIcon,
  },

  props: {
    image: {
      type: String,
      default: "",
    },
    cardType: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  border-radius: 32px;
  width: 100%;
  background-position: center;
  background-size: cover;
  padding: 32px;
  overflow: hidden;
  height: 446px;
  color: $white-100;
  cursor: pointer;
  will-change: padding-bottom;
  transition: padding-bottom 0.3s;
}

.infos {
  display: flex;

  height: 100%;

  .content {
    z-index: 2;
    position: relative;
    align-self: flex-end;
  }

  h3 {
    @include small-title;
    margin-top: 4px;
  }

  span {
    font-size: 16px;
    text-transform: uppercase;
  }
}

.backdrop {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(12, 12, 12, 0) 0%,
    rgba(12, 12, 12, 0.3) 100%
  );
}

.actions {
  display: flex;
  gap: 12px;
  width: 100%;
  padding: 20px 32px;
  position: absolute;
  left: 0;
  bottom: -60px;
  background: #0c0c0c80;
  backdrop-filter: blur(2px);
  will-change: bottom;
  transition: bottom 0.3s;
}

.icon {
  height: 20px;
  width: 20px;
  display: block;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.6;
  }
}

.card:hover {
  padding-bottom: 92px;
  .actions {
    bottom: 0;
  }
}
</style>
