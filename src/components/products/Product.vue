<template>
  <div class="description">
    <router-link :to="{ name: 'product-list' }" class="back">
      Retour à tous les produits
    </router-link>

    <div class="description-content d-flex">
      <div class="image">
        <img :src="product.image" alt="" />
      </div>
      <div class="text-side">
        <h2>{{ product.name }}</h2>
        <div>
          <span class="name">{{ product.name }}</span>
          <div class="rating">
            <!--
                <span><img src="@/assets/img/pictos/star-fill.svg" alt="Star"></span>
                <span><img src="@/assets/img/pictos/star-fill.svg" alt="Star"></span>
                <span><img src="@/assets/img/pictos/star-fill.svg" alt="Star"></span>
                <span><img src="@/assets/img/pictos/star-fill.svg" alt="Star"></span>
                <span><img src="@/assets/img/pictos/star.svg" alt="Star"></span>
            -->
            <span>{{ product.rating }}</span>
            <Rating></Rating>
          </div>
        </div>
        <!-- <div class="price">20€</div> -->
        <div class="price">{{ product.price }}€</div>
        <div class="">
          {{ product.description }}
        </div>
        <div class="quantity d-flex">
          <h3>Quantité</h3>
          <div class="quantity-number d-flex">
            <button @click="addQuantity">+</button>
            <span class="number">{{ $store.state.quantity }}</span>
            <button @click="subQuantity">-</button>
          </div>
        </div>
        <button class="cta">Ajouter au panier</button>
      </div>
    </div>
  </div>
  <!-- /.description -->
</template>

<script>
import Rating from "./Rating";
import { mapState, mapActions } from "vuex";
export default {
  name: "Product",
  data() {
    return {
      // product:{},
      // quantity: 0
    };
  },
  components: {
    Rating
  },
  computed: {
    ...mapState(["products", "quantity"])
  },
  methods: {
    ...mapActions(["addQuantity", "subQuantity"]),

    // Afficher le produit selectionner
    getProduct() {
      this.product = this.$store.state.products.find(el => {
        return el.id === this.$route.params.id;
      });
    }
  },

  created() {
    //do something after creating vue instance
    this.getProduct();
  }
};
</script>

<style scoped>
.description .image {
  min-width: 35%;
}
</style>
