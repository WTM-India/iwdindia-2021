<template>
  <v-container fluid class="">
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          icon
          class="mx-2"
          v-on="on"
          color="#5f6368"
          rel="noreferrer"
          href="https://twitter.com/wtmindia"
          target="_blank"
          slot="activator"
        >
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
      </template>
      <span>Twitter</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          icon
          class="mx-2"
          color="#5f6368"
          v-on="on"
          rel="noreferrer"
          href="https://www.youtube.com/c/WomenTechmakersIndia/"
          target="_blank"
          slot="activator"
        >
          <v-icon>mdi-youtube</v-icon>
        </v-btn>
      </template>
      <span>YouTube</span>
    </v-tooltip>

    <!-- <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          icon
          v-on="on"
          class="mx-2"
          color="#5f6368"
          rel="noreferrer"
          href="https://www.instagram.com/"
          target="_blank"
          slot="activator"
        >
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      </template>
      <span>Instagram</span>
    </v-tooltip> -->

    <!-- <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          icon
          v-on="on"
          class="mx-2"
          color="#5f6368"
          rel="noreferrer"
          href="https://www.linkedin.com/"
          target="_blank"
          slot="activator"
        >
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
      </template>
      <span>Linkedin</span>
    </v-tooltip> -->

    <!-- <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          icon
          v-on="on"
          class="mx-2"
          color="#5f6368"
          rel="noreferrer"
          href="https://www.facebook.com"
          target="_blank"
          slot="activator"
        >
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
      </template>
      <span>Facebook</span>
    </v-tooltip> -->

    <!-- <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          icon
          v-on="on"
          class="mx-2"
          color="#5f6368"
          rel="noreferrer"
          href="https://github.com/"
          target="_blank"
          slot="activator"
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </template>
      <span>GitHub</span>
    </v-tooltip> -->
  </v-container>
</template>

<script>
export default {
    name:"SocialInfo"
};
</script>

<style>
</style>