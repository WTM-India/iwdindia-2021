<template>
  <v-main class="ma-0">
    <v-container fluid class="mt-0 py-0">
      <v-row align="center" justify="center" class="mt-0 pt-0">
        <v-col cols="12" md="10" lg="10" sm="10" class="my-2">
          <Hero class="mt-md-8 mb-md-0 my-xs-0 py-xs-0" />
        </v-col>
      </v-row>
    </v-container>
    <breakImage colorCode="#f8f9fa" height="120px" />
    <v-container fluid class="my-0 py-0">
      <v-row
        align="center"
        justify="center"
        class="my-0 py-0"
        style="background: white;"
      >
        <v-col cols="12" md="10" lg="10" sm="10" class="my-0 py-0">
          <about />
        </v-col>
      </v-row>
    </v-container>
    <breakImage colorCode="#1e8e3e" height="80px" />
    <v-container fluid class="">
      <v-row align="start" justify="center" class="mb-md-5">
        <v-col cols="12" md="5" lg="5" sm="10">
          <Schedule />
        </v-col>
        <v-col cols="12" md="5" lg="5" sm="10">
          <Speakers />
        </v-col>
      </v-row>
    </v-container> 
    <breakImage colorCode="#f9ba00" height="80px" /> 
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
          <p class="google-font my-0" style="font-size:2.0em;;font-weight:700"><span style="color:#5f6368">chrome://</span> Keep in touch with CDS Extended for the latest announcements</p>
          <p class="google-font">Let's get connected so that we can reach out to each other via a simple notification. Stake out #CDSExtended for the updates and news.</p>
          <SocialInfo class="" />
        </v-col>
      </v-row>
    </v-container>
    <!-- <breakImage colorCode="#e74434" height="80px" /> -->
  </v-main>
</template>

<script>
import Hero from /* webpackChunkName: "hero", webpackPreload: true */ "@/components/home/Hero"
export default {
  name: "Home",
  components: {
    Hero,
    About: () => import(/* webpackChunkName: "homeabout", webpackPreload: true */ "@/components/home/about"),
    breakImage: () => import(/* webpackChunkName: "homebreakimage", webpackPreload: true */ '@/components/common/breakImage'),
    SocialInfo: () => import(/* webpackChunkName: "homecommunitysocial", webpackPreload: true */'@/components/common/CommunitySocial'),
    Faqs: () => import(/* webpackChunkName: "homeFaqs", webpackPreload: true */'@/components/home/Faqs'),
    Speakers: () => import(/* webpackChunkName: "homeSpeakers", webpackPreload: true */'@/components/home/Speakers'),
    Schedule: () => import(/* webpackChunkName: "homeSchedule", webpackPreload: true */'@/components/home/Schedule'),
  },
};
</script>

<style></style>
