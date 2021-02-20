<template>
  <v-main class="ma-0">
    <v-container fluid class="mt-0 py-0">
      <v-row align="center" justify="center" class="mt-0 pt-0">
        <v-col cols="12" md="10" lg="10" sm="10" class="my-2">
          <Hero class="mt-md-8 mb-md-0 my-xs-0 py-xs-0" />
        </v-col>
      </v-row>
    </v-container>
    <!-- <breakImage colorCode="#f8f9fa" height="120px" /> -->
    <v-container fluid  class="my-0 py-0" :style="{'background-image': 'url(' + require('@/assets/img/bg.svg') + ')','background-repeat':'repeat-y'}">
      <v-row
        align="center"
        justify="center"
        class="my-0 py-0"
      >
        <v-col cols="12" md="10" lg="10" sm="10" class="my-0 py-0" >
          <about />
        </v-col>
      </v-row>
    </v-container>
    <!-- <breakImage colorCode="#1e8e3e" height="80px" /> -->
    <v-container fluid class="">
      <v-row align="start" justify="center" class="mb-md-5" style="border-bottom: 5px solid rgb(44, 119, 223);">
        <v-col cols="12" md="11" lg="11" sm="11">
          <Theme />
        </v-col>
      </v-row>
    </v-container> 
    <!-- <breakImage colorCode="#f9ba00" height="80px" />  -->
    <v-container fluid class="" >
      <v-row align="center" justify="center" class="mb-5" style="border-bottom:5px solid #2C77DF;">
        <v-col cols="12" md="10" lg="10" sm="10">
          <PastEvent />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="">
      <v-row align="center" justify="center" class="mb-5">
        <v-col cols="12" md="10" lg="10" sm="10">
          <Faqs />
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="my-md-6 mb-14" style="border-top:1px solid #e0e0e0">
      <v-row align="center" justify="center" class="">
        <v-col cols="12" md="10" lg="10" sm="10" class="text-center pt-15">
          <p class="google-font my-0" style="font-size:2.0em;">Keep in touch with #IWDIndia2021 for the latest announcements</p>
          <p class="google-font">Let's get connected so that we can reach out to each other via a simple notification. Stake out #IWDIndia2021 for the updates and news.</p>
          <SocialInfo class="" />
        </v-col>
      </v-row>
    </v-container>
    <!-- <breakImage colorCode="#e74434" height="80px" /> -->
  </v-main>
</template>

<script>
import Hero from /* webpackChunkName: "hero", webpackPreload: true */ "@/components/home/Hero"
import SocialInfo from /* webpackChunkName: "homecommunitysocial", webpackPreload: true */'@/components/common/CommunitySocial'
import Faqs from /* webpackChunkName: "homeFaqs", webpackPreload: true */ '@/components/home/Faqs'
export default {
  // metaInfo: {
  //     title: 'Home',
  //     titleTemplate: '%s | IWD India 2021',
  //     htmlAttrs: {
  //       lang: 'en',
  //       amp: true
  //     },
  //     meta: [
  //       { charset: 'utf-8' },
  //       { name: 'description', content: 'IWD India 2021 is a coming together of women in technology from across the country to celebrate each other and to learn and gain inspiration from many exemplary women who had the courage to create despite the challenging times' },
  //       { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  //     ]
  // },
  name: "Home",
  components: {
    Hero,
    About: () => import(/* webpackChunkName: "homeabout", webpackPreload: true */ "@/components/home/about"),
    // breakImage: () => import(/* webpackChunkName: "homebreakimage", webpackPreload: true */ '@/components/common/breakImage'),
    Theme: () => import(/* webpackChunkName: "homeTheme", webpackPreload: true */ '../components/home/Theme'),
    PastEvent: () => import(/* webpackChunkName: "homePastEvent", webpackPreload: true */ '../components/home/pastevent'),
    SocialInfo,
    // SocialInfo: () => import(/* webpackChunkName: "homecommunitysocial", webpackPreload: true */'@/components/common/CommunitySocial'),
    Faqs,
    // Faqs: () => import(/* webpackChunkName: "homeFaqs", webpackPreload: true */ '@/components/home/Faqs'),
    // Speakers: () => import(/* webpackChunkName: "homeSpeakers", webpackPreload: true */'@/components/home/Speakers'),
    // Schedule: () => import(/* webpackChunkName: "homeSchedule", webpackPreload: true */'@/components/home/Schedule'),
  },
};
</script>

<style></style>
