<template>
  <div class="thank-you">
    <h2>Merci de votre commande !</h2>
    <p>Votre référence : <strong>#363434347AEBF</strong></p>
    <!-- <p>Date de livraison estimée : <strong>2 janvier 2020</strong></p> -->
    <p>
      Date de livraison estimée : <strong>{{ today }}</strong>
    </p>
    <router-link :to="{ name: 'product-list' }" class="cta">
      Retour à l'accueil
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ThankYou",
  data() {
    return {
      today: new Date().toString().slice(0, 10)
    };
  },
  methods: {}
};
</script>

<style scoped>
.thank-you {
  margin-top: 10%;
}
</style>
