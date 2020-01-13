<template>
  <div class="basket">
    <div class="img" @click="isOpen = !isOpen" style="cursor:pointer;">
      <img src="@/assets/img/pictos/basket.svg" alt="Basket" />
    </div>
    <div class="basket" v-if="isOpen">
      <div class="account-menu">
        <span class="name">Panier</span>
        <div class="items-list">
          <div class="d-flex">
            <span class="quantity">1X</span>
            <span>Super snickers</span>
          </div>
        </div>
        <button @click="logout" class="logout">Payer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Basket",
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    logout() {
      console.log("hello");
    }
  }
};
</script>

<style scoped></style>
