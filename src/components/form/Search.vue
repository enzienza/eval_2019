<template>
  <div class="search-bar">
    <input type="text" v-model="search" placeholder="rechercher un produit" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Search",
  computed: {
    ...mapState(["products", "search"])
  }
};
</script>

<style scoped></style>
