<template>
  <v-container fluid class="py-0">
    <v-row justify="center" align="center" class="py-md-5">
      
      <v-col cols="12" md="6" class="order-2 order-md-1">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink "
          contain
          :src="require('@/assets/img/wtmlogo.png')"
          width="30vh"
        /> -->
        <v-img
          alt="Vuetify Logo"
          class="shrink ml-1"
          contain
          :src="'https://www.womentechmakers.com/static/assets/imgs/misc/logo.png'"
          width="30vh"
        />
      <p class="google-font my-0" style="font-size:2.8em;"><span style="color:#4285FA"> International Women's Day </span></p>
      <p class="google-font my-0" style="color:#5f6368;font-size:1.7em">India Summit 2021</p>
        <p
          class="google-font mt-10 mb-5"
          style="font-size: 135%; font-weight: 700"
        >
          <span style="font-weight:400"
            >March 20-21, 2021&nbsp;|&nbsp;</span
          >Online
        </p>
        <p class="google-font" style="font-size: 105%">
          IWD India 2021 is a coming together of women in technology from across the country to celebrate each other and to learn and gain inspiration from many exemplary women who had the courage to create despite the challenging times.
        </p>
        <p class="google-font">
          <v-chip
            v-for="item in hashtags"
            :key="item"
            outlined
            label
            target="_blank"
            rel="noreferrer"
            :href="'https://twitter.com/hashtag/' + item"
            dark
            color="grey darken-3"
            class="mr-2"
          >
            #{{ item }}
          </v-chip>
        </p>
        <!-- <v-btn
          dark
          color="#FF0000"
          depressed
          large
          target="_blank"
          style="
            text-transform: capitalize;
            border-radius: 5px;
            font-size:110%;
            padding: 00% 4%;
          "
          href="https://www.youtube.com/watch?v=Q1jkscA6u7I"
          class="google-font mr-3 mb-3 mt-6"
          >Watch Now</v-btn
        > -->
        <v-btn
          dark
          color="#3D7FF5"
          depressed
          large
          style="
            text-transform: capitalize;
            border-radius: 5px;
            font-size:110%;
            padding: 00% 6%;
          "
          class="google-font mr-3 mb-3 mt-6"
          >
          <a style="color:#fff;text-decoration: none;" href="https://www.womentechmakers.com/members" target="_blank">Become a Member</a>
          </v-btn>

        <!-- <v-btn
          dark
          color="#3D7FF5"
          depressed-
          large
          outlined
          style="
            text-transform: capitalize;
            border-radius: 5px;
            font-size:110%;
            padding: 00% 2%;
          "
          class="google-font mr-3 mb-3 mt-6"
          >IWD India 2021 Badge Soon</v-btn
        > -->
        <!-- <v-btn disabled class="google-font mr-3 mb-3 mt-6" style="
                        text-transform: capitalize;
                    ">
                  Registrations opening soon!
                </v-btn> -->

        <!-- <v-btn
          dark
          color="#4285FA"
          depressed
          large
          to="/registration"
          style="
            text-transform: capitalize;
            border-radius: 5px;
            font-size: 100%;
          "
          class="google-font mr-3 mb-3 mt-6"
          >Register Now</v-btn
        > -->

        
      </v-col>
       <v-col cols="12" md="6" class="text-center pa-md-0 order-1 order-md-2">
        <v-img class="" :src="require('@/assets/img/sideimg.png')" style="width:80%;margin:0 auto;">
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeHero",
  data: () => ({
    hashtags: ["IWDIndia2021","CouragetoCreate"],
  }),
};
</script>

<style>
</style>
