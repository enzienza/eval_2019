<template>
  <div class="summary">
    <h1>Récapitulatif de la commande</h1>
    <div class="summary-box">
      <!-- <span>{{ cart.length }}</span> -->
      <div
        class="summary-item d-flex"
        v-for="itemCart in cart"
        :key="itemCart.id"
      >
        <div class="quantity">
          <button @click="addQuantity">+</button>
          <span class="number">{{ itemCart.quantity }}</span>
          <button @click="subQuantity">-</button>
        </div>
        <div class="image" :src="itemCart.image">
          <img :src="itemCart.image" alt="Amazing image" />
        </div>
        <div class="title">{{ itemCart.name }}</div>
        <div class="price">{{ itemCart.price }}€</div>
        <button class="delete">Supprimer</button>
      </div>

      <div class="total-summary d-flex">
        <h3>Total</h3>
        <strong class="total-price">{{ cartTotal }}€</strong>
      </div>
    </div>
    <p class="error">Vous n'avez pas assez de crédit :(</p>
    <div class="thank-you">
      <h2>Merci de votre commande !</h2>
      <p>Votre référence : <strong>#363434347AEBF</strong></p>
      <p>Date de livraison estimée : <strong>2 janvier 2020</strong></p>
      <router-link :to="{ name: 'product-list' }" class="cta">
        Retour à l'accueil
      </router-link>
    </div>
    <button class="cta pay">Payer</button>
  </div>
  <!-- /.summaty -->
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "Summary",
  computed: {
    ...mapState(["products", "cart", "quantity"]),
    ...mapGetters(["cartTotal"])
  },
  methods: {
    ...mapActions(["addQuantity", "subQuantity"])
  }
};
</script>
<style scoped="">
.summary {
  margin-top: 2rem;
}
</style>
