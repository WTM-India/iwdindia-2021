<template>
  <v-container fluid>
    <v-row justify="center" align="center" class="my-5 py-5" >
      <v-col md="4" sm="12" cols="12" class="">
        <v-img
          alt="Vuetify Logo"
          class="shrink "
          contain
          :src="require('@/assets/img/about.svg')"
          width="100%"
        />
      </v-col>
      <v-col md="8" sm="12" cols="12" >
        <p class="google-font" style="font-size:2.0em;">
        <span style="color:#5f6368">chrome://</span> <b><span style="color:#000000de">about CDS Extended</span></b>
        </p>
        <p class="google-font" style="font-size:135%;"><b>January 9, 2021 | Online</b></p>
        <p class="google-font" style="font-size:110%">
          Chrome Dev Summit Extended India is a follow-up event of Chrome Dev Summit. Like any other event, we are keeping this simple. Apart from sharing plethora of guidances from the main session of Chrome Dev Summit, we’ll be covering a hands-on workshop delivered by experts to experience better!
          <br><br>
          We’ll be running virtually on January 9, 2021 on various amazing topics such as Web vitals, Speedtools, Web capabilities, Frontend performance etc.

        </p>
        <p class="google-font" style="font-size:125%"><b><span class="mr-4">#CDSExtended</span></b> <b><span class="mr-4">#CDSExtendedIndia</span></b></p>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    faqData: [],
  }),
  mounted() {},
};
</script>

<style></style>
