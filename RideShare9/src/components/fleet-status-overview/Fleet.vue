<template lang="html">

  <b-container class="p-4">
    <button class="ui primary button" id="torankbutton" type="button" v-on:click="toranking()">Ranking</button>
    <b-row>
    </b-row>
    <b-row>
      <b-col>
        <h4 class="mx-auto" style="width: 127px">Active Trips</h4>
        <b-form-input v-model="adSearchInput" placeholder="Search" class="my-2"></b-form-input>
        <b-list-group>
          <b-list-group-item class="text-center" v-b-toggle="'advertCollapse' + trip.id" href="#" v-for="trip in filteredTrips" :key="trip.id">
            <div class="font-weight-bold">{{trip.title}}</div>
            <b-collapse accordion="advert-accordion" :id="'advertCollapse'+trip.id">
              <table class="table">
                <tbody>
                  <tr>
                    <th scope="row">Date and time</th>
                    <td>{{trip.startTime}}</td>
                  </tr>
                  <tr>
                    <th scope="row">Start location</th>
                    <td>{{trip.startLocation}}</td>
                  </tr>
                </tbody>
              </table>
            </b-collapse>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col>
        <h4 class="mx-auto" style="width: 127 px">Drivers</h4>
        <b-form-input v-model="driverSearchInput" placeholder="Search" class="my-2"></b-form-input>
        <b-list-group>
          <b-list-group-item class="text-center"  v-b-toggle="'driverCollapse' + user.id" href="#" v-for="user in filteredDrivers" :key="user.id">
            <div class="font-weight-bold">{{user.username}}</div>
            <b-collapse accordion="driver-accordion" :id="'driverCollapse'+user.id">
              <table class="table">
                <tbody>
                  <tr>
                    <th scope="row">Driver Status</th>
                    <td>{{user.status}}</td>
                  </tr>
                </tbody>
              </table>
            </b-collapse>
          </b-list-group-item>
        </b-list-group>
        </b-col>
        <b-col>
        <h4 class="mx-auto" style="width: 127 px">Passengers</h4>
        <b-form-input v-model="passengerSearchInput" placeholder="Search" class="my-2"></b-form-input>
        <b-list-group>
          <b-list-group-item class="text-center"  v-b-toggle="'passengerCollapse' + user.id" href="#" v-for="user in filteredPassengers" :key="user.id">
            <div class="font-weight-bold">{{user.username}}</div>
            <b-collapse accordion="passenger-accordion" :id="'passengerCollapse'+user.id">
              <table class="table">
                <tbody>
                  <tr>
                    <th scope="row">Passenger Status</th>
                    <td>{{user.status}}</td>
                  </tr>
                </tbody>
              </table>
            </b-collapse>
          </b-list-group-item>
        </b-list-group>
        </b-col>
      
    </b-row>
  </b-container>
</template>

<script src="./fleet.js"/>

<style lang="css">
</style>
