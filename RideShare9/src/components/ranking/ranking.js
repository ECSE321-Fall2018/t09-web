import axios from 'axios'
import Store from "../login/store.js"
import Datepicker from 'vuejs-datepicker';

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
  components: {Datepicker},
  data() {
    return {
      startdate: "",
      enddate: "",
      drivers:[],
      passengers:[],
      trips:[],
      errormessage:"fine"
    }
  },
  created(){
    this.fetchdriver("1000-10-10 11:11:11","4444-11-11 11:11:11")
    this.fetchpassenger("1000-10-10 11:11:11","4444-11-11 11:11:11")
    console.log("created!");
  },
  mounted(){
    console.log("mounted!");
  },
  methods: {
    search(){
      this.fetchpassenger(this.startdate.getFullYear()+"-"+(this.startdate.getMonth()+1)+"-"+this.startdate.getDate()+" 00:00:00",
        this.enddate.getFullYear()+"-"+(this.enddate.getMonth()+1)+"-"+this.enddate.getDate()+" 23:59:59")
      this.fetchdriver(this.startdate.getFullYear()+"-"+(this.startdate.getMonth()+1)+"-"+this.startdate.getDate()+" 00:00:00",
        this.enddate.getFullYear()+"-"+(this.enddate.getMonth()+1)+"-"+this.enddate.getDate()+" 23:59:59")
    },
    fetchdriver(starttime,endtime){
      let self = this;
      AXIOS.post('/adv/get-top-drivers',{
        startTimeX:starttime,
        startTimeY:endtime
      }).then(function(response){
        console.log(response.data[1].best)
        self.drivers = response.data
      }).catch(function(error){
        console.log(error)
      })
    },
    fetchpassenger(starttime,endtime) {
      let self = this;
      AXIOS.post('/map/get-top-passengers', {
        startTimeX: starttime,
        startTimeY: endtime
      }).then(function (response) {
        self.passengers = response.data
      }).catch(function (error) {
        console.log(error)
      })
    },
    tofleet(){
      this.$router.replace({ 'name':"Fleet"})

    }
  }
}
