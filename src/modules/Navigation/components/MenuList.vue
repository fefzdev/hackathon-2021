<template>
  <ul class="container">
    <li>
      <a href="#">
        <BookmarkIcon />
      </a>
    </li>
    <li>
      <a href="#">
        <UserkIcon />
      </a>
    </li>
    <li>
      <a href="#">
        <MenuIcon />
      </a>
    </li>
  </ul>
</template>

<script>
import BookmarkIcon from "@/assets/bookmark.svg?inline";
import UserkIcon from "@/assets/user.svg?inline";
import MenuIcon from "@/assets/menu.svg?inline";

export default {
  name: "MenuList",

  components: {
    BookmarkIcon,
    UserkIcon,
    MenuIcon,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 16px;
}

li {
  a {
    display: block;
  }
  svg {
    display: block;
  }
}
</style>
