<template>
  <div class="summary">
    <h1>Récapitulatif de la commande</h1>
    <div class="summary-box">
      <div class="summary-item d-flex">
        <div class="quantity">
          <button @click="addQuantity">+</button>
          <span class="number">{{ quantity }}</span>
          <button @click="subQuantity">-</button>
        </div>
        <div
          class="image"
          style="background: url(https://cdn.pixabay.com/photo/2015/05/31/15/01/shoes-792074_1280.jpg); background-size: cover;"
        >
          <img
            class="hide"
            src="https://cdn.pixabay.com/photo/2015/05/31/15/01/shoes-792074_1280.jpg"
            alt="Amazing image"
          />
        </div>
        <div class="title">Super snickers blancs</div>
        <div class="price">12€</div>
        <button class="delete">Supprimer</button>
      </div>
      <div class="total-summary d-flex">
        <h3>Total</h3>
        <strong class="total-price">20€</strong>
      </div>
    </div>
    <p class="error">Vous n'avez pas assez de crédit :(</p>
    <div class="thank-you">
      <h2>Merci de votre commande !</h2>
      <p>Votre référence : <strong>#363434347AEBF</strong></p>
      <p>Date de livraison estimée : <strong>2 janvier 2020</strong></p>
      <button class="cta">Retour à l'accueil</button>
    </div>
    <button class="cta pay">Payer</button>
  </div>
  <!-- /.summaty -->
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Summary",
  computed: {
    ...mapState(["quantity"])
  },
  methods: {
    ...mapActions(["addQuantity", "subQuantity"])
  }
};
</script>
<style scoped=""></style>
