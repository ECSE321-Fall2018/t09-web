import axios from "axios";
import Store from "./store.js";

var config = require('../../../config')


var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL:backendUrl,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Authorization',
    'Access-Control-Expose-Headers':'Authorization'
    }
})


export default {
  name: 'Login',
  mounted(){
    document.getElementById("errormsg").style.display = "none";
  },
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    disappear(){
      document.getElementById("errormsg").style.display = "none";
    },
    signupnotice(){
      alert("Signup for admin is not open, please contact our company!");
    },
    login() {
      let self = this;
      AXIOS.post('/login',{
        username:self.input.username,
        password:self.input.password
      }).then(function(response){
        self.$emit("authenticated",true);
        self.$router.replace({ name: "Fleet" });
        Store.save(response.headers.authorization)
      }).catch(function(error){
        console.log(error);
        document.getElementById("errormsg").style.display = "block";
      })
      /*
      if(this.input.username != "" && this.input.password != "") {
        if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "Hello" });
          console.log(frontendUrl);
          console.log(backendUrl);
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }*/
    }
  }
}
