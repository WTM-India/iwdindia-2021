<template>
  <v-container fluid>
    <v-row justify="center" align="center" class="my-5 py-5" >
      <v-col md="12" sm="12" cols="12" >
        <p class="google-font" style="font-size:2.0em;">
        <span style="color:#5f6368">chrome://</span> <b><span style="color:#000000de">schedule</span></b>
        </p>
        <p class="google-font" style="font-size:110%">
          Much of the web ecosystem focuses on fundamentals and innovating quickly to meet the ever-changing needs of users. While we are open to welcome everyone and a digital event means anyone can join, the content will be curated and tailored to India/APAC region audiences.
          <br><br>
          The event will begin from 2:00 PM IST and take you to a virtual tour of amazing topics related to web and Chrome. Find the detailed schedule here.
        </p>

        <!-- <p class="google-font">Schedule Comming Soon...</p> -->
        <v-btn
          dark
          color="#3D7FF5"
          depressed
          large
          outlined
          style="
            text-transform: capitalize;
            border-radius: 5px;
            font-size:110%;
            padding: 00% 2%;
          "
          to="/schedule"
          class="google-font mr-3 mb-3 mt-6"
        >
          Schedule
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Agenda",
}
</script>
