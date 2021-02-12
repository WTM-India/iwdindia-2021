<template>
  <v-container fluid class="fill-height my-5 py-md-5">
    <v-row align="center" justify-md="center" class="fill-height">
      <v-col md="4" lg="3" cols="12">
        <v-img
          alt="Vuetify Logo"
          class="shrink "
          contain
          :src="require('@/assets/img/2020.jpg')"
          width="100%"
        />
      </v-col>
      <v-col md="8" lg="9" cols="12" class="px-md-10">
        <p class="google-font" style="font-size:2.0em;">
          <span style=""
            >Women Techmakers <br>International Women’s Day India Summit 2020</span
          >
        </p>
        <p class="google-font" style="font-size:1.1em;">
          IWD India 2020 had seen unprecedented love and adulation from women and allies all over the world. Women Ambassadors from across India had gotten together to showcase exemplary teamwork, a passion to win and the courage to create something that hadn't been done before. 
        </p>
        <p class="google-font" style="font-size:1.1em;">
          The event was a phenomenal success, but the best part was that it brought out the sisterhood between communities. Together, we all rose. The team had tons of learnings and are now all set to make IWD India 2021 all the more worthy of your time. Stay tuned for a bigger, better and a never before experience.
        </p>
        <v-btn
          dark
          color="#3D7FF5"
          depressed
          large
          style="
            text-transform: capitalize;
            border-radius: 5px;
            font-size:100%;
            padding: 00% 3%;
          "
          class="google-font mr-3 mb-3 mt-6"
          >
          <a style="color:#fff;text-decoration: none;" href="https://wtmindia-iwd20.web.app/" target="_blank">See More Info</a>
          </v-btn>

          <v-btn
          dark
          color="#FF726D"
          depressed
          outlined
          large
          target="_blank"
          style="
            text-transform: capitalize;
            border-radius: 5px;
            font-size:100%;
            padding: 00% 3%;
          "
          href="https://www.youtube.com/watch?v=CAfAKHq9DPk"
          class="google-font mr-3 mb-3 mt-6"
          >Event Sizzle Reel</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomePastEventComponent",
  data: () => ({}),
  mounted() {},
};
</script>

<style></style>
