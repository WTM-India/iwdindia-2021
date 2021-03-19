<template>
    <v-dialog v-model="show" width="600" persistent>
        <v-card>
            <v-card-title class="google-font">
                <h2>Welcome to International Women’s Day India Summit 2021</h2>
            </v-card-title>
            <v-container>
              <v-card-text>
                <p>
                  Join us at the International Women’s Day Summit using this link and get ready to witness the most exciting event put together for you by the Women Techmakers India community. 
                </p>
              </v-card-text>
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
                class="google-font mr-3 mb-3 ml-4"
              >
                Register Now!
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
                href="https://www.youtube.com/channel/UCOpGX93bBiVxa2zoKrmjqXA"
                class="google-font mr-3 mb-3"
              >Live Stream</v-btn
            >
            </v-container>
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
     value: Boolean
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
         this.$emit('input', value)
      }
    }
  },
  methods: {
    close: function() {
      localStorage.model_disabled = true;
      localStorage.setItem('disabled', true);
      this.show = false
    }
  },
}
</script>
