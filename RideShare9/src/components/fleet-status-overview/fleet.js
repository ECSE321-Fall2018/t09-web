import axios from 'axios'
var config = require('../../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'https://' + config.dev.backendHost

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: {'Access-Control-Allow-Origin': frontendUrl}
})

export default {
  name: 'fleet',
  data() {
    return {
      trips: [],
      renderedTrips: [],
      drivers: [],
      passengers: [],
      errorMessage: '',
      adSearchInput: ''
    }
  },
  methods: {
    toranking(){
      this.$router.replace({ name: "Ranking" });
    }
  },
  created: function() {
    AXIOS.get('/adv/active-advertisements').then(response => {
      this.trips = response.data
    }).catch(error => {
      console.log(error)
    })
  },
  computed: {
    filteredTrips: function() {
      let search = this.adSearchInput
      return this.trips.filter(function(trip) {
        if (trip.title.match(search) !== null) {
          return true
        }
        let stops = trip.stops
        for (var i = 0; i < stops.length; i++) {
          if (stops[i].stopName.toLowerCase().match(search) !== null) {
            //console.log('Success!')
            return true
          }
        }
        return false
      })
    }
  }
}

function Trip(id, title, startTime, startLocation, endLocation, tripStatus, seatsAvailable, driverUsername) {
  this.id = id
  this.title = title
  this.startTime = startTime
  this.startLocation = startLocation
  this.endLocation = endLocation
  this.tripStatus = tripStatus
  this.seatsAvailable = seatsAvailable
  this.stops = []
  this.vehicle = {}
  this.driverUsername = driverUsername
}
