<template>
  <main class="container">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </main>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "App",
  components: {
    AppHeader
  },
  computed: {
    ...mapState(["products", "cart", "quantity"])
  },
  methods: {
    ...mapMutations(["addProduct"]),
    ...mapActions(["setProducts", "addToCart"]),

    // Afficher le produit selectionner
    getProduct() {
      this.product = this.$store.state.products.find(el => {
        return el.id === this.$route.params.id;
      });
    }
  },
  created() {
    this.setProducts();
  }
};
</script>

<style>
/* @import "./assets/css/app.css"; */
/* @import "./assets/css/bootstrap.min.css"; */
</style>
