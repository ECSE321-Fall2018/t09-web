<template>
  <div id="app">
    <div id="nav">
      <router-link class="ui circular animated green button" v-if="authenticated" to="/login" v-on:click.native="logout()" replace>
        <div class="visible content">Logout</div>
        <div class="hidden content">
          <i class="remove icon"></i>
        </div>
      </router-link></div>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "hello",
        password: "password"
      }
    }
  },
  mounted() {
    //this.authenticated = false;
    if(!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
      this.$router.replace({ name: "login" });
    }
  }
}
</script>

<style>
  body {
    background-color: #FFFFFF;
  }
  h1 {
    padding: 0;
    margin-top: 0;
  }
  #app {
    margin: auto;
  }
</style>
