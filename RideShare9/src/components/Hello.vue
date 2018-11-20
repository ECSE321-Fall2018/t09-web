<template>
  <div id="login">
  <div class="ui two column middle aligned very relaxed stackable grid">
    <div class="column">
      <div class="ui form">
        <div class="field">
          <label>username</label>
          <div class="ui left icon input">
            <input type="text" placeholder="account username">
            <i class="user icon"></i>
          </div>
        </div>
        <div class="field">
          <label>password</label>
          <div class="ui left icon input">
            <input type="password">
            <i class="lock icon"></i>
          </div>
        </div>
        <div class="ui blue submit button">Login</div>
      </div>
    </div>
    <div class="center aligned column">
      <div class="ui big green labeled icon button">
        <i class="signup icon"></i>
        Join
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import Store from "./login/store.js"
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    console.log(Store.fetch())
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#login {
  width: 500px;
  border: 1px solid #CCCCCC;
  background-color: #FFFFFF;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>
