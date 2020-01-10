<template>
    <div class="description">
        <router-link :to="{name:'product-list'}" class="back">Retour à tous les produits</router-link>

        <div class="description-content d-flex">
            <div class="image" v-bind:src="product.image">
                <img v-bind:src="product.image" alt="">
            </div>
            <div class="text-side">
                <h2>{{product.name}}</h2>
                <div>
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
                <!-- <div class="price">20€</div> -->
                <div class="price">
                    {{product.price}}€
                </div>
                <div class="">
                    {{product.description}}
                </div>
                <div class="quantity d-flex">
                    <h3>Quantité</h3>
                    <div class="quantity-number d-flex">
                        <button>+</button>
                        <span class="number">1x</span>
                        <button>-</button>
                    </div>
                </div>
                <button class="cta">Ajouter au panier</button>
            </div>
        </div>
    </div><!-- /.description -->
</template>

<script>
export default {
    name: "Product",
    data(){
        return{ product:{}}
    },
    methods: {
        getProduct() {
            this.product = this.$store.state.products.find(el => {
                return el.id === this.$route.params.id
            })
        }
    },
    created() {
        //do something after creating vue instance
        this.getProduct();
    }
};
</script>

<style scoped>
</style>
