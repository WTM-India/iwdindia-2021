<template>
  <v-main class="ma-0">
    <v-container fluid class="mt-0 py-0">
      <v-row align="center" justify="center" class="mt-0 pt-0">
        <v-col cols="12" md="10" lg="10" sm="10" class="my-2">
          <Hero class="mt-md-8 mb-md-0 my-xs-0 py-xs-0" />
        </v-col>
        <v-col cols="12" md="10" lg="10" sm="10">
          <Model v-model="showModel" />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="mt-0 py-md-10" style="border-top:1px solid #e0e0e0">
      <v-row align="center" justify="center" class="mt-0 pt-0">
        <v-col cols="12" md="5" lg="5" sm="10" class="">
          <YouTube />
        </v-col>
        <v-col cols="12" md="5" lg="5" sm="10" class="google-font px-6 pb-5">
          <p
            class="google-font mb-2"
            style="font-size: 3.5vh;line-height: 1.22;font-weight:500"
          >
            Explore YouTube Live Streams
          </p>
          <p>
            Women Techmakers India is all set to host Women Techmakers
            International Women’s Day Summit with a focus on the exciting theme
            #CourageToCreate​.
          </p>
          <p style="font-size:130%">What is in store for the participants?</p>
          <ul style="font-size:110%">
            <li>Loads of learning and hands-on workshops</li>
            <li>
              A plethora of formats like workshops, tech talks, lightning talks
              and panel discussions.
            </li>
            <li>Amazing swags and certificates of participation!</li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
    
    <v-container
      fluid
      class="my-0 py-0 bg-image"
      :style="{
        'background-image': 'url(' + require('@/assets/img/bg.svg') + ')',
        'background-repeat': 'repeat-y',
      }"
    >
      <v-row align="center" justify="center" class="my-0 py-0">
        <v-col cols="12" md="10" lg="10" sm="10" class="my-0 py-0">
          <about />
        </v-col>
      </v-row>
    </v-container>
    <!-- <breakImage colorCode="#1e8e3e" height="80px" /> -->
    <v-container fluid class="">
      <v-row align="start" justify="center">
        <v-col cols="12" md="11" lg="11" sm="11">
          <Theme />
        </v-col>
      </v-row>
    </v-container>
    <!-- <breakImage colorCode="#f9ba00" height="80px" />  -->
    <v-container fluid>
      <v-row
        align="center"
        justify="center"
        class=""
        style="border-bottom:1px solid #2C77DF;"
      >
        <v-col cols="12" md="10" lg="10" sm="10" class="mb-md-10">
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
    <v-container
      fluid
      class="my-md-6 mb-14"
      style="border-top:1px solid #e0e0e0"
    >
      <v-row align="center" justify="center" class="">
        <v-col cols="12" md="10" lg="10" sm="10" class="text-center pt-15">
          <p class="google-font my-0" style="font-size:2.0em;">
            Keep in touch with #IWDIndia2021 for the latest announcements
          </p>
          <p class="google-font">
            Let's get connected so that we can reach out to each other via a
            simple notification. Stake out #IWDIndia2021 for the updates and
            news.
          </p>
          <SocialInfo class="" />
        </v-col>
      </v-row>
    </v-container>
    <!-- <breakImage colorCode="#e74434" height="80px" /> -->
  </v-main>
</template>

<script>
import Hero from /* webpackChunkName: "hero", webpackPreload: true */ "@/components/home/Hero";
import Model from /* webpackChunkName: "hero", webpackPreload: true */ "@/components/home/Model";
import SocialInfo from /* webpackChunkName: "homecommunitysocial", webpackPreload: true */ "@/components/common/CommunitySocial";
import Faqs from /* webpackChunkName: "homeFaqs", webpackPreload: true */ "@/components/home/Faqs";
import YouTube from "../components/home/YouTube";
export default {
  name: "Home",
  components: {
    YouTube,
    Hero,
    Model,
    About: () =>
      import(
        /* webpackChunkName: "homeabout", webpackPreload: true */ "@/components/home/about"
      ),
    Theme: () =>
      import(
        /* webpackChunkName: "homeTheme", webpackPreload: true */ "../components/home/Theme"
      ),
    PastEvent: () =>
      import(
        /* webpackChunkName: "homePastEvent", webpackPreload: true */ "../components/home/pastevent"
      ),
    SocialInfo,
    Faqs,
  },
  data: () => ({
    showModel: false,
  }),
  mounted() {
    this.showModel = !JSON.parse(localStorage.model_disabled || false);
  },
};
</script>

<style>
@media only screen and (max-width: 660px) {
  .bg-image {
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center !important;
  }
}
</style>
