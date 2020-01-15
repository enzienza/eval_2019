<template>
  <div class="account">
    <span
      class="my-account"
      @click="isConnect = !isConnect"
      style="cursor:pointer;"
      >My account</span
    >
    <div class="account-menu" v-if="isConnect">
      <span class="name">Henri Jenkens</span>
      <span>Crédits : {{ credits }}€</span>
      <button class="add-credit">Ajouter du crédit +</button>
      <button @click="login" class="logout">Se déconnecter</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Account",
  data() {
    return {
      isConnect: false
    };
  },
  computed: {
    ...mapState(["credits"])
  },
  methods: {
    login() {
      console.log("Connection");
    }
  }
};
</script>

<style scoped></style>
