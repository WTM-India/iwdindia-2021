<template>
  <v-container fluid >
    <v-row justify="center" align="center" class="my-md-5 py-md-5">
      <v-col md="5" sm="12" cols="12" class="">
        <v-img
          alt="Vuetify Logo"
          class="shrink "
          contain
          :src="require('@/assets/img/tagline.svg')"
          width="100%"
        />
      </v-col>
      <v-col md="7" sm="12" cols="12" class="white--text">
        <p class="google-font" style="font-size:2.5em;">
          <span style="">Empowered women, empower all! </span>
        </p>
        <p class="google-font" style="font-size:1.5em;">
          March 20 & 21, 2021 | Online
        </p>
        <p class="google-font" style="font-size:1.2em">
          Women Techmakers community provides visibility, community and resources for women to join, thrive and lead in the tech industry. 
          <br /><br />
          As a part of our International Women’s Day celebrations, we invite women and allies to join us in this celebration along with their communities. This event is put together by a group of amazing, passionate women who have an undying courage to create extraordinary things.
          <br /><br />
          These two days can be enjoyed in the comfort of your homes where we have inspirational speakers, discussions over chat and workshops to help you create amazing assets for yourself!
        </p>
        <p class="google-font mt-5">
          <v-chip
            v-for="item in hashtags"
            :key="item"
            outlined
            label
            target="_blank"
            rel="noreferrer"
            :href="'https://twitter.com/hashtag/' + item"
            dark
            color="white"
            class="mr-2"
          >
            #{{ item }}
          </v-chip>
        </p>
        <!-- <p class="google-font" style="font-size:125%">
          <span class="mr-4">#IWDIndia2021</span>
          <span class="mr-4">#CouragetoCreate</span>
        </p> -->
      </v-col>
      
      
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeAboutComponent",
  data: () => ({
    hashtags: ["IWDIndia2021","CouragetoCreate"],
  }),
  mounted() {},
};
</script>

<style></style>
