<template>
    <div class="rating">
        <span><img src="@/assets/img/pictos/star-fill.svg" alt="Star"></span>
        <span><img src="@/assets/img/pictos/star.svg" alt="Star"></span>
        <!-- <span>{{product.rating}}</span> -->
    </div>
</template>

<script>
export default {
  name: "rating",
  props: ["products"]
};
</script>

<style scoped>
</style>
