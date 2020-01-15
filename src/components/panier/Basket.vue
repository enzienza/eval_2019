<template>
  <div class="basket">
    <div class="img" @click="isOpen = !isOpen" style="cursor:pointer;">
      <img src="@/assets/img/pictos/basket.svg" alt="Basket" />
      <span class="bubble-quantity">{{ cart.length }}</span>
    </div>
    <div class="basket" v-if="isOpen">
      <div class="account-menu">
        <span class="name">Panier</span>
        <div class="items-list" v-for="itemCart in cart" :key="itemCart.id">
          <div class="d-flex">
            <span class="quantity">{{ itemCart.quantity }} X</span>
            <span>{{ itemCart.name }}</span>
          </div>
        </div>
        <!-- <button @click="logout" class="logout">Payer</button> -->
        <router-link
          :to="{ name: 'summary', params: { id: cart.id } }"
          class="logout"
        >
          Payer
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Basket",
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    ...mapState(["products", "cart"])
  },
  methods: {
    // logout() {
    //   return this.$router.push({ name: "summary" });
    // }
  }
};
</script>

<style scoped>
.bubble-quantity {
  position: absolute;
  top: 0;
  right: -0.5em;
  background-color: #ffffff;
  font-size: x-small;
  border-radius: 100%;
  padding: 0.2em 0.5em;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.75) !important;
  border: 1px solid #f6f6f6;
}
</style>
