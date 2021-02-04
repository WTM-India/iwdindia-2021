<template>
  <v-main class="my-5 fill-height grey lighten-5">
    <v-container fluid class="mt-0 py-0 fill-height">
      <v-row align="center" justify="center" v-if="loading">
        <v-progress-circular indeterminate color="indigo" :width="5" :size="50"> </v-progress-circular>
      </v-row>
      <v-row
        v-show="!loading"
        align="center"
        justify="center"
        class="mt-0 pt-0"
      >
        <v-col md="10" lg="10" sm="10" cols="12" class="text-center grey lighten-5">
          <iframe
            @load="load"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfTZ0doJ2ZAJPuV5WExOgG7ksjnKOU_q9i1f1fcgLllz10brw/viewform?embedded=true"
            style="min-width: 100%; border: none;"
            scrolling="no" 
            height="2500"
            frameborder="0"
            marginheight="0"
            marginwidth="0" 
            id="myIframe"
            >Loading...</iframe
          >
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name:"Registration",
  data: () => ({
    loading: true,
  }),
  methods: {
    load() {
      console.log("loaded");
      this.loading = false;
    },
  },
};
</script>

<style>
@media only screen and (max-width: 600px) {
  iframe {
    height: 2900px !important;
    width: 100%;
  }
}
</style>