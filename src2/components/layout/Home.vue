<template>
<div class="">
    <div class="home">
        <div class="actions-bar d-flex">
            <Search></Search>
            <Select></Select>
        </div>
    </div><!-- /.home -->
    <router-view></router-view>
</div>
</template>

<script>
import Search from "../form/Search"
import Select from "../form/Select"
export default {
    name: "Home",
    components: {
      Search, Select
    }
}
</script>

<style scoped>

</style>
