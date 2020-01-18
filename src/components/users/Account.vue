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
      <span class="name">Henri Jenkens</span>
      <span>Crédits : {{ credit }}€</span>
      <button @click="isAddCredit = !isAddCredit" class="add-credit">
        Ajouter du crédit +
      </button>

      <div class="add" v-if="isAddCredit">
        <input
          type="number"
          v-model="inputCredit"
          @click.prevent="addCredit"
          placeholder="Ajouter le montant"
        />
      </div>

      <button @click="logout" class="logout">{{ buttonValue }}</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Account",
  data() {
    return {
      isConnect: false,
      buttonValue: "Se connecter",
      isAddCredit: false,
      inputCredit: ""
    };
  },
  computed: {
    ...mapState(["products", "cart", "quantity", "credits"]),

    /*
     *
     */
    credit() {
      return this.credits + this.inputCredit;
    }
  },
  methods: {
    logout() {
      /* SI "localStorage.isLogged => true"
       * alors le bouton devient "Se connecter", je suis redirigé sur la page "summaty"
       * SINON
       * le bouton devient ce "Se déconnecter", je suis redirigé sur la page de "login"
       * */
      if (localStorage.isLogged === true) {
        console.log("ok");
        this.buttonValue = "Se connecter";
        localStorage.isLogged = true;
        this.$router.push({ name: "summary" });
      } else {
        console.log("nope");
        this.buttonValue = "Se déconnecter";
        localStorage.isLogged = false;
        this.$router.push({ name: "login" });
      }
    },

    addCredit() {
      this.push(this.inputCredit);
      this.inputCredit = "";
    }
  }
};
</script>

<style scoped>
.add input {
  width: 100%;
  margin-top: 0.5em;
  margin-bottom: 1em;
}
</style>
