<template>
  <div id="login" >
    <div class="ui two column middle aligned very relaxed stackable grid">
      <div class="column">
        <div class="ui form">
          <div class="field">
            <label>username</label>
            <div class="ui left icon input">
              <input type="text" id="usernametext" name="username" v-on:focus="disappear()" v-model="input.username" placeholder="account username">
              <i class="user icon"></i>
              <div class="ui left pointing red basic label" id="errormsg">
                Wrong username or password!
              </div>
            </div>
          </div>
          <div class="field">
            <label>password</label>
            <div class="ui left icon input">
              <input type="password" id="passwordtext" name="password" v-model="input.password" placeholder="Password" />
              <i class="lock icon"></i>
            </div>
          </div>
          <div class="ui blue submit button" id="loginbutton" type="button" v-on:click="login()">Login</div>
        </div>
      </div>
      <div class="center aligned column">
        <div class="ui big green labeled icon button" v-on:click="signupnotice()">
          <i class="signup icon"></i>
          Join
        </div>
      </div>
    </div>
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
</style>
