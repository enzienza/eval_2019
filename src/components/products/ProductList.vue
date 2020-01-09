<template>
    <div class="product-list d-flex justify-content-between">
        <router-link :to="{name:'product',params:{id:product}}" v-for="product in products" class="product" :key="product">
            <div class="product-image" style="background: url(https://cdn.pixabay.com/photo/2015/05/31/15/01/shoes-792074_1280.jpg); background-size: cover;">
            <!-- <div class="product-image" v-bind:src="product.image" >     -->
                <img class="hide" src="https://cdn.pixabay.com/photo/2015/05/31/15/01/shoes-792074_1280.jpg" alt="Shoes">
                <!-- <img v-bind:src="product.image" alt=""> -->
            </div>
            <div class="description d-flex">
                <div class="left-content">
                    <span class="name">{{product.name}}</span>
                    <div class="rating">
                        <!-- <span><img src="@/assets/img/pictos/star-fill.svg" alt="Star"></span>
                        <span><img src="@/assets/img/pictos/star-fill.svg" alt="Star"></span>
                        <span><img src="@/assets/img/pictos/star-fill.svg" alt="Star"></span>
                        <span><img src="@/assets/img/pictos/star-fill.svg" alt="Star"></span>
                        <span><img src="@/assets/img/pictos/star.svg" alt="Star"></span> -->
                        <span>{{product.rating}}</span>
                    </div>
                </div>
                <div class="right-content">
                    <span class="price">${{product.price}}</span>
                    <button class="add d-flex"><img src="@/assets/img/pictos/add.svg" alt="Ajouter"></button>
                </div>
            </div><!-- /.description d-flex -->
        </router-link>

        <!-- <router-view></router-view> -->

        <Pagination></Pagination>

    </div><!-- /.product-list -->
</template>

<script>
import Pagination from "./Pagination"
import axios from "axios"
export default {
    name: "ProductList",
    components: {
        Pagination
    },
    data(){
        return{
            products:[]
        }
    },
    created() {
      //do something after creating vue instance
      axios.get("https://5df6a0ebc1b62e0014e2088c.mockapi.io/products").then((res)=> {
          this.products = res.data

      }).catch((res)=>{
          console.log("Probleme avec la requete" + res.data)
      })
    }
};
</script>

<style scoped>
</style>
