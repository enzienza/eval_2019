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
      <button class="selected">Ordre alphabétique</button>
      <button>Ordre alphabétique inv.</button>
      <button>Prix Ascendant</button>
      <button>Prix Descendant</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {
      isDisplayed: false
    };
  }
};
</script>

<style scoped></style>
