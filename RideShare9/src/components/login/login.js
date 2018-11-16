import axios from "axios";
var config = require('../../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL:backendUrl,
  headers: {
    //'Access-Control-Allow-Origin': frontendUrl
    }
})


export default {
  name: 'Login',
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      /*var AUTH_TOKEN = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJib3NzeGllIiwiZXhwIjo5MjIzMzcyMDM2ODU0Nzc1fQ.PrB-Y3hY0MDZfrNwOlDt2eeHq4pvXVKYJ30L_b40SfPIFatXn9OFRzeu6rLL2wZGX6UgqTAxsnbS_Y38qEgDJg"
      let config = {
        headers: {
          "Authorization":AUTH_TOKEN
        }
      }
      */
      AXIOS.get('/user/mainpg').then(function(response){
        console.log(response);
      }).catch(function(error){
        console.log(error);
      })
      /*AXIOS.post('/user/sign-up',{
        username: 'admin999',
        password: '12345',
        role: 'ROLE_ADMIN'
      }).then(function (response){
        console.log(response);
      }).catch(function (error){
        console.log("wrong");
      })*/




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
      }
    }
  }
}
