<template>
    <header class="d-flex justify-content-between header">
        <div class="logo">
            <img src="@/assets/img/pictos/logo.jpg" alt="Logo">
        </div>
        <div class="right-menu d-flex">
            <!-- <Account></Account> -->
            <div class="basket">
                <div class="img">
                    <img src="@/assets/img/pictos/basket.svg" alt="Basket">
                </div>
                <!-- <Basket></Basket> -->
                <router-link></router-link>
            </div>
        </div>
    </header><!-- /.header -->
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style scoped>
</style>
