<template>
  <div class="select">
    <div
      class="displayed"
      @click="isDisplayed = !isDisplayed"
      style="cursor:pointer;"
    >
      Ordre alphabétique
    </div>
    <div class="options" v-if="isDisplayed">
      <button @click.prevent="setFilter('')" class="selected">
        Ordre alphabétique
      </button>
      <button @click.prevent="setFilter('')">
        Ordre alphabétique inv.
      </button>
      <button @click.prevent="setFilter('asc')">Prix Ascendant</button>
      <button @click.prevent="setFilter('des')">Prix Descendant</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Select",
  data() {
    return {
      isDisplayed: false
    };
  },
  computed: {
    ...mapState(["products", "searchByFilter"])
  }
};
</script>

<style scoped></style>
