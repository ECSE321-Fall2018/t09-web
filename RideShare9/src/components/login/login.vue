<template>
  <div id="login">
    <h1>Login</h1>
    <i class="hand point left outline icon"></i>
    <input type="text" id="usernametext" name="username" v-model="input.username" placeholder="Username" />
    <input type="password" id="passwordtext" name="password" v-model="input.password" placeholder="Password" />
    <button class="ui primary button" id="loginbutton" type="button" v-on:click="login()">Login</button>
  </div>
</template>

  <script src= "./login.js">
</script>

<style scoped>
  #login {
    width: 500px;
    border: 1px solid #CCCCCC;
    background-color: #FFFFFF;
    margin: auto;
    margin-top: 200px;
    padding: 20px;
  }
  h1{
    text-align:center;
    font-family: Georgia, serif;
  }
  #loginbutton{
    width: 6em;  height: 6em;
    margin: 2em auto;
  }
  #usernametext{

  }
</style>
