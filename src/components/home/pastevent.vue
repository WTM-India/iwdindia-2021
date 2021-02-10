<template>
  <v-container fluid class="fill-height my-5 py-md-5">
    <v-row align="center" justify-md="center" class="fill-height">
      <v-col md="3">
        <v-img
          alt="Vuetify Logo"
          class="shrink "
          contain
          :src="require('@/assets/img/2020.jpg')"
          width="100%"
        />
      </v-col>
      <v-col md="9" class="px-md-10">
        <p class="google-font" style="font-size:2.0em;">
          <span style=""
            >Women Techmakers <br>International Women’s Day India Summit 2020</span
          >
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga neque
          optio vel, amet eveniet harum veniam, perspiciatis eius corrupti eaque
          aliquid sequi? Sapiente itaque non fuga quidem eaque accusantium iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga neque
          optio vel, amet eveniet harum veniam, perspiciatis eius corrupti eaque
          aliquid sequi? Sapiente itaque non fuga quidem eaque accusantium iste.
        </p>
        <v-btn
          dark
          color="#3D7FF5"
          depressed
          large
          style="
            text-transform: capitalize;
            border-radius: 5px;
            font-size:100%;
            padding: 00% 3%;
          "
          class="google-font mr-3 mb-3 mt-6"
          >
          <a style="color:#fff;text-decoration: none;" href="https://wtmindia-iwd20.web.app/" target="_blank">See More Info</a>
          </v-btn>

          <v-btn
          dark
          color="#FF726D"
          depressed
          outlined
          large
          target="_blank"
          style="
            text-transform: capitalize;
            border-radius: 5px;
            font-size:100%;
            padding: 00% 3%;
          "
          href="https://www.youtube.com/watch?v=CAfAKHq9DPk"
          class="google-font mr-3 mb-3 mt-6"
          >Hightlight Video</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomePastEventComponent",
  data: () => ({}),
  mounted() {},
};
</script>

<style></style>
