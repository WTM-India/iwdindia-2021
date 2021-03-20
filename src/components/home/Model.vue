<template>
  <v-dialog v-model="show" width="700" persistent >
    <v-card class="px-md-3 pt-md-3" style="border-radius:15px">
      <v-card-title class="google-font pb-4" style="font-size:150%"
        >Welcome to Women Techmakers #IWDIndia2021?
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="google-font">
        <p style="font-size:120%" class="mt-5">
          Join us at the International Women’s Day Summit using this link and
          get ready to witness the most exciting event put together for you by
          the Women Techmakers India community.
        </p>
         <p style="font-size:130%">What is in store for the participants?</p>
          <ul style="font-size:120%">
            <li>Loads of learning and hands-on workshops</li>
            <li>
              A plethora of formats like workshops, tech talks, lightning talks
              and panel discussions.
            </li>
            <li>Amazing swags and certificates of participation!</li>
          </ul>
          <br><br>
        
        <v-btn
          dark
          color="#FF0000"
          depressed
          large
          target="_blank"
          style="
            text-transform: capitalize;
            font-size:105%;
            padding: 00% 3%;
          "
          href="https://bit.ly/iwdindia02"
          class="google-font mr-3 mb-3 "
          >
          <v-icon left>mdi mdi-youtube</v-icon>
          Watch Now</v-btn
        >
        <v-btn
          to="/registration"
          dark
          color="#3D7FF5"
          depressed
          large
          style="
                  text-transform: capitalize;
                  font-size:105%;
                  padding: 00% 3%;
                "
          class="google-font mr-3 mb-3"
        >
          Register Now!
        </v-btn>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-actions class="white">
        <v-spacer></v-spacer>
        <v-btn aria-label="close" color="primary" text @click="close"
          >Close</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "HomeModel",
  props: {
    value: Boolean,
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    close: function() {
      localStorage.model_disabled = true;
      localStorage.setItem("disabled", true);
      this.show = false;
    },
  },
};
</script>
