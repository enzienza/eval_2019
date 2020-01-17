<template>
  <div class="account">
    <span
      class="my-account"
      @click="isConnect = !isConnect"
      style="cursor:pointer;"
    >
      My account
    </span>
    <div class="account-menu" v-if="isConnect">
      <!-- <div v-show="!isLogin">
        <button @click="logout" class="logout">{{ buttonValue }}</button>
      </div>
      <div v-show="isLogin"> -->
      <span class="name">Henri Jenkens</span>
      <span>Crédits : {{ credits }}€</span>
      <!-- <span>Crédits : {{ soldCart }}€</span> -->
      <button class="add-credit">Ajouter du crédit +</button>
      <button @click="logout" class="logout">{{ buttonValue }}</button>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import { mapState, mapGetters } from "vuex";
export default {
  name: "Account",
  data() {
    return {
      isConnect: false,
      // isLogin: false,
      buttonValue: "Se connecter"
    };
  },
  computed: {
    ...mapState(["products", "cart", "quantity", "credits"])
    // ...mapGetters(["cartTotal"]),

    // soldCart() {
    //   return (this.credits - this.cartTotal).toFixed(2);
    // },

    // isLoginOK() {
    //
    // },
  },
  methods: {
    // logout() {
    //   if () {
    //     localStorage.isLogged = false;
    //     this.$router.push({ name: "login" });
    //     this.isLogin = false;
    //   } else {
    //     this.$router.push({ name: "produc-list" });
    //     this.isLogin = true;
    //   }
    // }

    logout() {
      // localStorage.isLogged = false;
      // this.$router.push({ name: "login" });
      if (localStorage.isLogged === true) {
        console.log("og");
        this.buttonValue = "Se connecter";
        localStorage.isLogged = true;
        this.$router.push({ name: "summary" });
        // this.isLogin = false;
      } else {
        console.log("nope");
        this.buttonValue = "Se déconnecter";
        localStorage.isLogged = false;
        this.$router.push({ name: "login" });
        // this.isLogin = true;
      }
    }
  }
};
</script>

<style scoped></style>
