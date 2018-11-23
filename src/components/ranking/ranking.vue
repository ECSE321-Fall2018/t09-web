<template>
  <b-container class="p-4">
    <b-row>
      <div class="circular ui animated primary button"
           variant="primary" tabindex="0" id="tofleetbutton" v-on:click="tofleet()">
        <div class="visible content">Fleet</div>
        <div class="hidden content">
          <i class="left arrow icon"></i>
        </div>
      </div>
    </b-row>
    <b-row>
      <b-col>
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
        <h4 id="toproutes" class="mx-auto" style="width: 280px">
          <i class="map icon"></i> Top popular routes</h4>
        <b-list-group>
          <b-list-group-item class="text-center" v-b-toggle="'advertCollapse' + index" href="#" v-for="(trip, index) in trips" :key="index">
            <div class="font-weight-bold">From {{trip.start}} to {{trip.end}}</div>
            <b-collapse accordion="advert-accordion" :id="'advertCollapse'+index">
              <table class="table">
                <tbody>
                <tr>
                  <th scope="row">Trips completed on this route</th>
                  <td>{{trip.count}}</td>
                </tr>
                </tbody>
              </table>
            </b-collapse>
          </b-list-group-item>
        </b-list-group>

      </b-col>
      <b-col>
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
        <h4 id="toppdriver" class="mx-auto" style="width: 280px">
          <i class="car icon"></i>
          Top performing drivers</h4>
        <b-list-group>
          <b-list-group-item class="text-center"  v-b-toggle="'driverCollapse' + driver.best.id" href="#" v-for="driver in drivers" :key="driver.best.id">
            <div class="font-weight-bold">{{driver.best.username}}</div>
            <b-collapse accordion="driver-accordion" :id="'driverCollapse'+driver.best.id">
              <table class="table">
                <tbody>
                <tr>
                  <th scope="row">Trips involved</th>
                  <td>{{driver.count}}</td>
                </tr>
                </tbody>
              </table>
            </b-collapse>
          </b-list-group-item>
        </b-list-group>

      </b-col>
      <b-col>
        <div class="ui animated button" tabindex="0"
             id="searchbutton"
             type="button"
             v-on:click="search()">
          <div class="visible content">Search</div>
          <div class="hidden content">
            <i class="search icon"></i>
          </div>
        </div>
        <h4 id="topdriver" class="mx-auto" style="width: 280px">
          <i class="child icon"></i>
          Top royal passengers</h4>
        <b-list-group>
          <b-list-group-item class="text-center"  v-b-toggle="'passengerCollapse' + passenger.best.id" href="#" v-for="passenger in passengers" :key="passenger.best.id">
            <div class="font-weight-bold">{{passenger.best.username}}</div>
            <b-collapse accordion="passenger-accordion" :id="'passengerCollapse'+passenger.best.id">
              <table class="table">
                <tbody>
                <tr>
                  <th scope="row">Trips involved</th>
                  <td>{{passenger.count}}</td>
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
    font-family: "Apple Symbols";
    font-size: 27px
  }
  #toppdriver{
    text-align: center;
    font-family: "Apple Symbols";
    font-size: 27px
  }
  #toproutes{
    text-align: center;
    font-family: "Apple Symbols";
    font-size: 27px
  }
</style>
