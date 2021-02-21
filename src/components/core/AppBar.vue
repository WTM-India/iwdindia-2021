<template>
  <v-app-bar
    app
    fixed
    color="white"
    elevate-on-scroll
    style="box-shadow: 0 2px 6px 0 rgba(0,0,0,.12), inset  0 -1px 0 0 #dadce0;"
    hide-on-scroll
  >
    <v-app-bar-nav-icon
      aria-label="Hamburger Btn"
      @click="toggleDrawer"
      class="d-md-none d-lg-none"
    ></v-app-bar-nav-icon>

    <div class="d-flex align-center">
      <router-link
        to="/"
        class="google-font grey--text text--darken-2"
        style="text-decoration: none;"
      >
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/img/logo.png')"
          width="35"
        />
      </router-link>
    </div>
    <v-toolbar-title class="google-font px-0" style="width: 300px">
      <router-link
        to="/"
        class="google-font grey--text text--darken-2"
        style="text-decoration: none; font-size: 120%"
        >
        IWD India 2021
        </router-link
      >
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-tabs
      color="#4285FA"
      right
      slider-color="#4285FA"
      :hide-slider="getRouteName()"
      class="hidden-sm-and-down google-font"
    >
      <v-tab
        class="google-font"
        aria-label="toolbar links"
        v-for="(link, i) in links.filter((obj) => obj.meta.showToolbar)"
        :key="i"
        :to="link.to"
        @click="onClick($event, link)"
        style="text-transform: capitalize; font-size: 100%"
        >{{ link.text }}</v-tab
      >
    </v-tabs>
    <v-btn to="/registration" rounded depressed class="mx-3 hidden-sm-and-down" color="#4285f4" dark>
      <v-icon left>mdi-account-circle-outline</v-icon>
      Register
    </v-btn>
    <PushNotification />
    <v-btn
      aria-label="Share Button"
      icon
      v-on:click="shareMe"
      class="hidden-sm-and-up"
    >
      <v-icon>mdi-share-variant</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import PushNotification from "./PushNotification";
export default {
  name: "AppBar",
  data: () => ({
    hideSlidersOn: ["CodeofConduct", "Registraton"],
  }),
  components:{
    PushNotification
  },
  computed: {
    ...mapGetters(["links"]),
  },
  methods: {
    ...mapMutations(["toggleDrawer"]),
    onClick(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    },
    getRouteName() {
      return this.hideSlidersOn.includes(this.$route.name) ? true : false;
    },
    shareMe() {
      // console.log(e);
      if (navigator.share) {
        navigator
          .share({
            title: "Women Techmakers International Women's Day India Summit 2021",
            url: "https://iwdindia.in/",
          })
          .then(() => {
            console.log("Thanks for sharing");
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        alert("Not supporting in your browser");
      }
    },
  },
};
</script>

<style></style>
