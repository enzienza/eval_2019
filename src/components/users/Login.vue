<template>
  <div class="login">
    <h1>Se connecter</h1>
    <div class="login-box">
      <input type="text" v-model="username" placeholder="username" />
      <input type="password" v-model="password" placeholder="password" />
      <button @click.prevent="login" class="cta">Se connecter</button>
    </div>
  </div>
  <!-- /.login -->
</template>

<script>
const username = "turlututu";
const password = "chapeau pointu";
export default {
  name: "login",
  data() {
    return {
      username: "turlututu",
      password: "chapeau pointu"
    };
  },
  methods: {
    login() {
      if (username === this.username && password === this.password) {
        localStorage.isLogged = true;
        this.$router.push({ name: "summary" });
      }
    }
  }
};
</script>

<style scoped></style>
