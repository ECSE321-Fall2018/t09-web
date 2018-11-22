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
      tripStatus: 'All',
      tripStatuses: [
        "All",
        "Registering Passengers",
        "Registration Complete",
        "On Route"
      ],
      drivers: [],
      renderedDrivers: [],
      passengers: [],
      errorMessage: '',
      adSearchInput: '',
      driverSearchInput: '',
      passengerSearchInput: ''
    }
  },
  methods: {
    toranking: function(){
      this.$router.replace({ name: "Ranking" });
    },
    translateTripStatus: function(status) {
      return statusTransate[status];
    }
  },
  created: function() {
    AXIOS.get('/adv/active-advertisements').then(response => {
      this.trips = response.data
    }).catch(error => {
      console.log(error)
    })
    AXIOS.get('/user/active-drivers').then(response => {
      this.drivers = response.data
    }).catch(error => {
      console.log(error)
    })
    AXIOS.get('/user/active-passengers').then(response => {
      this.passengers = response.data
    }).catch(error => {
      console.log(error)
    })
  },
  computed: {
    filteredTrips: function() {
      let search = this.adSearchInput
      let selectedStatus = this.tripStatus
      let statusList = this.tripStatuses
      return this.trips.filter(function(trip) {
        if (selectedStatus !== statusList[0] && trip.tripStatus !== statusMap[selectedStatus]) {
          return false
        }
        if (trip.title.match(search) !== null) {
          return true
        }
        let stops = trip.stops
        for (var i = 0; i < stops.length; i++) {
          if (stops[i].stopName.toLowerCase().match(search.toLowerCase()) !== null) {
            return true
          }
        }
        return false
      })
    },
    filteredDrivers: function() {
      let search = this.driverSearchInput
      return this.drivers.filter(function(user) {
        if (user.username.match(search) !== null) {
          return true
        }
      })
    },
    filteredPassengers: function() {
      let search = this.passengerSearchInput
      return this.passengers.filter(function(user) {
        if (user.username.match(search) !== null) {
          return true
        }
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

function User(id, username, status) {
  this.id = id
  this.username = username
  this.status = status
}

var statusMap = {
  'Registering Passengers' : 'REGISTERING',
  'Registration Complete' : 'CLOSED',
  'On Route' : 'ON_RIDE'
}

var statusTransate = {
  'REGISTERING' : 'Registering Passengers',
  'CLOSED' : 'Registration Complete',
  'ON_RIDE' : 'On Route'
}
