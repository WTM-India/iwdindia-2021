<template>
  <v-container fluid class="fill-height">
    <v-row align="start" justify-md="center" class="fill-height">
      <v-col
        cols="12"
        md="4"
        lg="4"
        xl="3"
        sm="6"
        class="mb-3"
      >
        <div class="ma-1 pa-5 white--text" style="border:1px solid #e0e0e0;border-radius:8px;background:#7289DA">
          <v-icon x-large class="mt-2 mb-2" color="white">mdi-discord</v-icon>
          <p class="google-font " style="font-size:1.5em;">
            <b>Join our Discord Server</b>
          </p>
          <p class="google-font" style="font-size:115%">
            Keep up with the latest DevMela news and announcements. Join the
            conversation on Discord Server.
          </p>
          <v-btn
            dark
            color="white"
            depressed
            outlined
            target="_blank"
            style="text-decoration:none"
            href="https://discord.gg/UATTrkxwr3"
            class="google-font"
            >Join Now</v-btn
          >
        </div>
      </v-col>

      <v-col
        cols="12"
        md="4"
        lg="4"
        xl="3"
        sm="6"
        class="mb-3"
      >
        <div class="ma-1 pa-5" style="border:1px solid #e0e0e0;border-radius:8px">
          <v-icon x-large class="mt-2 mb-2">mdi-star</v-icon>
          <p class="google-font" style="font-size:1.5em;">
            <b>FAQ</b>
          </p>
          <p class="google-font" style="font-size:115%">
            Get all the details about DevMela: including event content,
            schedule, access, what to expect, and more.
          </p>
          <v-btn
            dark
            color="#4285FA"
            depressed
            text
            style="text-decoration:none"
            to="/faq"
            class="google-font"
            >See More</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "JoinUs",
  data: () => ({}),
  mounted() {},
};
</script>

<style></style>
