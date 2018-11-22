<template>
  <b-container class="p-4">
  <button class="ui primary button" id="tofleetbutton" type="button" v-on:click="tofleet()">Fleet</button>
    <b-row>
    </b-row>
    <b-row>
      <b-col>
        <h4 class="mx-auto" style="width: 127px">Top popular routes</h4>
        <datepicker
          id="startdatepicker"
          v-model="startdate"
          placeholder="StartTime"
          format="yyyy-MM-dd"
          calendar-button-icon="calendar icon"
          v-bind:calendar-button="true"
          v-bind:bootstrap-styling="true"
          v-bind:full-month-name="true"
        ></datepicker>

        <b-list-group>
          <b-list-group-item class="text-center" v-b-toggle="'advertCollapse' + trip.count" href="#" v-for="trip in drivers" :key="trip.count">
            <div class="font-weight-bold">{{trip.count}}</div>
            <b-collapse accordion="advert-accordion" :id="'advertCollapse'+trip.count">
              <table class="table">
                <tbody>
                <tr>
                  <th scope="row">Date and time</th>
                  <td>{{trip.count}}</td>
                </tr>
                <tr>
                  <th scope="row">Start location</th>
                  <td>{{trip.count}}</td>
                </tr>
                </tbody>
              </table>
            </b-collapse>
          </b-list-group-item>
        </b-list-group>

      </b-col>
      <b-col>
        <h4 class="mx-auto" style="width: 127px">Top drivers</h4>
        <datepicker
          id="enddatepicker"
          v-model="enddate"
          class = "input"
          placeholder="EndTime"
          format="yyyy-MM-dd"
          calendar-button-icon="calendar icon"
          v-bind:calendar-button="true"
          v-bind:bootstrap-styling="true"
          v-bind:full-month-name="true"
        >
        </datepicker>
        <b-list-group>
          <b-list-group-item class="text-center"  v-b-toggle="'driverCollapse' + driver.best.id" href="#" v-for="driver in drivers" :key="driver.best.id">
            <div class="font-weight-bold">{{driver.best.id}}</div>
            <b-collapse accordion="driver-accordion" :id="'driverCollapse'+driver.best.id">
              <table class="table">
                <tbody>
                <tr>
                  <th scope="row">Driver Status</th>
                  <td>{{driver.best.id}}</td>
                </tr>
                </tbody>
              </table>
            </b-collapse>
          </b-list-group-item>
        </b-list-group>

      </b-col>
      <b-col>
        <h4 id="topdriver" class="mx-auto" style="width: 127px">Top drivers</h4>
        <div class="ui animated button" tabindex="0"
             id="searchbutton"
             type="button"
             v-on:click="search()">
          <div class="visible content">Search</div>
          <div class="hidden content">
            <i class="search icon"></i>
          </div>
        </div>
        <b-list-group>
          <b-list-group-item class="text-center"  v-b-toggle="'passengerCollapse' + driver.id" href="#" v-for="driver in passengers" :key="driver.count">
            <div class="font-weight-bold">{{driver.username}}</div>
            <b-collapse accordion="passenger-accordion" :id="'passengerCollapse'+driver.id">
              <table class="table">
                <tbody>
                <tr>
                  <th scope="row">Passenger Status</th>
                  <td>{{driver.status}}</td>
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

<script src= "./ranking.js">
</script>

<style scoped>
  #searchbutton{
    margin:auto;
    display:block;
  }
  #topdriver{
    text-align: center;
  }
</style>
