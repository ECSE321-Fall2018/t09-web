

export default {
  name: 'fleet',
  data() {
    return {
      trips: [],
      renderedTrips: [],
      drivers: [],
      passengers: [],
      error: '',
      adSearchInput: ''
    }
  },
  created: function() {
    this.trips = [
      {
        "id": 10,
        "title": "adv1",
        "startTime": "2018-11-11 12:12:12",
        "startLocation": "1100 Av du Docteur-Penfield",
        "endLocation": null,
        "tripStatus": "REGISTERING",
        "seatsAvailable": 18,
        "stops": [{
            "id": 3,
            "stopName": "3425 Rue University",
            "price": 100
          },
          {
            "id": 4,
            "stopName": "8018 20e Av",
            "price": 100
          },
          {
            "id": 5,
            "stopName": "11171 Rue Notre-Dame Est",
            "price": 100
          }
        ],
        "vehicle": {
          "id": 2,
          "licencePlate": "12345",
          "model": "t80b",
          "color": "white",
          "maxSeat": 100,
          "driver": 5
        },
        "driverUsername": "driver666"
      },
      {
        "id": 12,
        "title": "adv2",
        "startTime": "2018-11-11 12:12:12",
        "startLocation": "1100 Av du Docteur-Penfield",
        "endLocation": null,
        "tripStatus": "REGISTERING",
        "seatsAvailable": 8,
        "stops": [{
            "id": 3,
            "stopName": "3425 Rue University",
            "price": 100
          },
          {
            "id": 4,
            "stopName": "8018 20e Av",
            "price": 100
          },
          {
            "id": 5,
            "stopName": "11171 Rue Notre-Dame Est",
            "price": 100
          },
          {
            "id": 6,
            "stopName": "3700 Rue Damien Gauthier",
            "price": 100
          },
          {
            "id": 7,
            "stopName": "2315 Rue Pelletier",
            "price": 100
          },
          {
            "id": 8,
            "stopName": "439 Rue Principale",
            "price": 100
          }
        ],
        "vehicle": {
          "id": 2,
          "licencePlate": "12345",
          "model": "t80b",
          "color": "white",
          "maxSeat": 100,
          "driver": 5
        },
        "driverUsername": "driver666"
      }
    ]
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
          if (stops[i].stopName.match(search) !== null) {
            console.log('Success!')
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
