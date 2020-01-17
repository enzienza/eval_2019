<template>
  <div class="">
    <div class="summary" v-if="!isPayed">
      <h1>Récapitulatif de la commande</h1>
      <div class="summary-box">
        <!-- <span>{{ cart.length }}</span> -->
        <div
          class="summary-item d-flex"
          v-for="itemCart in cart"
          :key="itemCart.id"
        >
          <div class="quantity">
            <button @click="itemCart.quantity++">+</button>
            <span class="number">{{ itemCart.quantity }}</span>
            <button @click="itemCart.quantity > 1 ? itemCart.quantity-- : null">
              -
            </button>
          </div>
          <div class="image" :src="itemCart.image">
            <img :src="itemCart.image" alt="Amazing image" />
          </div>
          <div class="title">{{ itemCart.name }}</div>
          <div class="price">{{ itemCart.price }}€</div>
          <!-- <button class="delete">Supprimer</button> -->
          <button class="delete" @click="removeProduct(itemCart)">
            <i class="far fa-trash-alt"></i>
          </button>
        </div>

        <div class="total-summary d-flex">
          <h3>Total</h3>
          <strong class="total-price">{{ cartTotal }}€</strong>
        </div>
      </div>

      <button class="cta pay" @click="pay(soldCart)">Payer</button>

      <p class="error" v-if="isError">
        Vous n'avez pas assez de crédit :(
      </p>
    </div>
    <p>
      <!-- {{ credits }} - {{ cartTotal }} = {{ (credits - cartTotal).toFixed(2) }} -->
      {{ credits }} - {{ cartTotal }} = {{ soldCart }}
    </p>
    <div v-if="isPayed">
      <ThankYou></ThankYou>
    </div>
  </div>
  <!-- /.summaty -->
</template>
<script>
import ThankYou from "./ThankYou";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "Summary",
  data() {
    return {
      isPayed: false,
      isError: false
    };
  },
  components: {
    ThankYou
  },
  computed: {
    ...mapState(["products", "cart", "quantity", "credits"]),
    ...mapGetters(["cartTotal"]),

    soldCart() {
      return (this.credits - this.cartTotal).toFixed(2);
    }
  },
  methods: {
    ...mapActions(["removeProduct"]),
    pay() {
      // si je suis login ok
      // sinon redirection login.vue

      let cartTotal = this.$store.getters.cartTotal;
      let creditUser = this.$store.state.credits;
      if (cartTotal <= creditUser) {
        // si le solde est suffisant
        this.isPayed = true;
        this.isError = false;
      } else {
        // si le solde est insuffisant
        this.isError = true;
        this.isPayed = false;
      }
    }
  }
};
</script>
<style scoped="">
.summary {
  margin-top: 2rem;
}
.delete {
  font-size: 1.2em;
  margin-left: 1em;
}
.delete:hover {
  color: red;
}
.pay {
  margin-top: 2em;
  margin-bottom: 2em;
}
</style>
