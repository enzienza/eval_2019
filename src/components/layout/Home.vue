<template>
<div class="">
    <AppHeader></AppHeader>
    <div class="home">
        <div class="actions-bar d-flex">
            <div class="search-bar">
                <input type="text" placeholder="rechercher un produit">
            </div>
            <div class="select">
                <div class="displayed">Ordre alphabétique</div>
                <div class="options">
                    <!-- <button class="selected">Ordre alphabétique</button>
                    <button>Ordre alphabétique inv.</button>
                    <button>Prix Ascendant</button>
                    <button>Prix Descendant</button> -->
                </div>
            </div>
        </div>
    </div><!-- /.home -->
    <router-view></router-view>
</div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader"

export default {
    name: "Home",
    components: {
      AppHeader
    }
}
</script>

<style scoped>

</style>
