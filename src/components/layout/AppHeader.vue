<template>
    <header class="d-flex justify-content-between header">
        <div class="logo" style="cursor:pointer;">
            <img src="@/assets/img/pictos/logo.jpg" alt="Logo">
        </div>
        <div class="right-menu d-flex">
            <Account></Account>
            <Basket></Basket>
        </div>
    </header><!-- /.header -->
</template>

<script>
import Basket  from "../panier/Basket"
import Account from "../users/Account"
export default {
    name: "AppHeader",
    components: {
        Basket, Account
    },

};
</script>

<style scoped>
</style>
