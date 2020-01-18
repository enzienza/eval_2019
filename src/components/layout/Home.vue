<template>
  <div class="">
    <div class="home">
      <div class="actions-bar d-flex">
        <Search></Search>

        <Select></Select>
      </div>
    </div>
    <!-- /.home -->
    <router-view></router-view>
  </div>
</template>

<script>
import Search from "../form/Search";
import Select from "../form/Select";

import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Search,
    Select
  },

  data() {
    return {
      isDisplayed: false
    };
  },
  computed: {
    ...mapState(["products", "search", "searchByFilter"])
  },
  methods: {}
};
</script>

<style scoped></style>
