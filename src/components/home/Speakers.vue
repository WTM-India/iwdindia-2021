<template>
  <v-container fluid>
    <v-row justify="center" align="center" class="my-5 py-5" >
      <v-col md="12" sm="12" cols="12" >
        <p class="google-font" style="font-size:2.0em;">
        <span style="color:#5f6368">chrome://</span> <b><span style="color:#000000de">speakers</span></b>
        </p>
        <p class="google-font" style="font-size:110%">
          Like we said we are coming to you, we are also bringing a few brilliant speakers to you. 
These amazing minds will be sharing their knowledge and covering amazing topics from the Web ecosystem.
<br><br>
          Connect and get to know more about them here.
        </p>
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
          to="/speakers"
          class="google-font mr-3 mb-3 mt-6"
        >
          See All Speakers
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Speakers",
}
</script>
