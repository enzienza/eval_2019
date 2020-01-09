<template>
    <div class="description">
        <button class="back">Retour à tous les produits</button>
        <div class="description-content d-flex">
            <div class="image" style="background: url(https://cdn.pixabay.com/photo/2015/05/31/15/01/shoes-792074_1280.jpg); background-size: cover;">
                <img class="hide" src="https://cdn.pixabay.com/photo/2015/05/31/15/01/shoes-792074_1280.jpg" alt="Amazing image">
            </div>
            <div class="text-side">
                <h2>Super snickers blancs</h2>
                <div>
                    <span class="name">Snickers blancs</span>
                    <div class="rating">
                        <span><img src="@/assets/img/pictos/star-fill.svg" alt="Star"></span>
                        <span><img src="@/assets/img/pictos/star-fill.svg" alt="Star"></span>
                        <span><img src="@/assets/img/pictos/star-fill.svg" alt="Star"></span>
                        <span><img src="@/assets/img/pictos/star-fill.svg" alt="Star"></span>
                        <span><img src="@/assets/img/pictos/star.svg" alt="Star"></span>
                    </div>
                </div>
                <div class="price">20€</div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cupiditate, facere? Culpa dignissimos
                    dolorum eaque harum numquam perspiciatis ratione reprehenderit, suscipit ut! Architecto consectetur
                    ea et fugit libero tempore unde.
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
  name: "Product"
};
</script>

<style scoped>
</style>
