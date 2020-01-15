<template>
  <div class="product-list d-flex justify-content-between">
    <router-link
      :to="{ name: 'product', params: { id: product.id } }"
      v-for="product in products"
      class="product-item shadow-sm"
      :key="product"
    >
      <div class="product-image" :src="product.image">
        <img :src="product.image" alt="" />
      </div>
      <div class="description d-flex">
        <div class="left-content">
          <span class="name">{{ product.name }}</span>
          <Rating>
            <span>{{ product.rating }}</span>
          </Rating>
        </div>
        <div class="right-content">
          <span class="price">${{ product.price }}</span>
          <button @click="addProduct(product)" class="add d-flex">
            <img src="@/assets/img/pictos/add.svg" alt="Ajouter" />
          </button>
        </div>
      </div>
      <!-- /.description d-flex -->
    </router-link>

    <!-- <router-view></router-view> -->

    <Pagination></Pagination>
  </div>
  <!-- /.product-list -->
</template>

<script>
import Pagination from "./Pagination";
import Rating from "./Rating";
import { mapState, mapActions } from "vuex";
export default {
  name: "ProductList",
  components: {
    Pagination,
    Rating
  },
  computed: {
    ...mapState(["products", "quantity", "cart"])
  },
  methods: {
    ...mapActions(["appProduct"])
  }
};
</script>

<style scoped>
.product-image {
  width: 345px;
  height: 500px;
}
.description {
  width: 345px;
  position: relative;
  top: -1em;
}
.left-content {
  width: 100%;
  height: 80px;
}
.right-content {
  /* width: 95px;
  height: 80px; */
}
.description .price {
  position: absolute;
  right: 0.3em;
  font-size: medium;
}
.add.d-flex {
  position: absolute;
  bottom: 0.5em;
  right: 0em;
}
.product-list .product-item {
  width: 345px;
}
.product-item {
  margin-bottom: 3em;
  max-height: 570px;
}
.product-item:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>
