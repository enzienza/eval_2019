<template>

    <main class="container">
        <!-- <AppHeader></AppHeader> -->
        <router-view></router-view>
    </main>
</template>

<script>
// import AppHeader from "@/components/layout/AppHeader"

export default {
    name: "App",
    // components: {
    //     AppHeader
    // }
}
</script>

<style>
    @import "./assets/css/app.css";
    @import "./assets/css/bootstrap.min.css";
</style>
