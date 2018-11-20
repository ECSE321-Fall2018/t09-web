<template>
  <button class="ui primary button" id="tofleetbutton" type="button" v-on:click="tofleet()">Fleet</button>
</template>

<script>
  import axios from 'axios'
  import Store from "../login/store.js"
  var config = require('../../../config')

  var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
  var backendUrl = 'https://' + config.dev.backendHost


  var AXIOS = axios.create({
    baseURL: backendUrl,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Authorization',
        'Access-Control-Expose-Headers':'Authorization',
        'Authorization':Store.fetch()
      }
  });
    export default {
        name: "Ranking",
      created(){
          console.log("created!");
      },
      methods: {
          fetchdriver(){
            AXIOS.post('/adv/get-top-drivers',{
              startTimeX:"1000-12-11 11:11:11",
              startTimeY:"3000-12-11 11:11:11"
            }).then(function(response){
              console.log(response)
              console.log("fetched!")
            }).catch(function(error){
              console.log(error)
            })
          },
        fetchpassenger() {
          AXIOS.post('/map/get-top-passengers', {
            startTimeX: "1000-12-11 11:11:11",
            startTimeY: "3000-12-11 11:11:11"
          }).then(function (response) {
            console.log(response)
          }).catch(function (error) {
            console.log(error)
          })
        },
        tofleet(){
            this.$router.replace({ 'name':"Fleet"})
            this.fetchpassenger();
            this.fetchdriver();
        }
      }

    }
</script>

<style scoped>

</style>
