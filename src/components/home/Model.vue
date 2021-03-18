<template>
    <v-dialog v-model="show" width="600" persistent>
        <v-card>
            <v-card-title class="google-font">
                <h2>Join live streaming</h2>
            </v-card-title>
            <v-container>
              <v-card-text>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum semper ligula, vitae suscipit ex tincidunt eu. Morbi lacinia in arcu a tempus. Sed dignissim magna vel velit rutrum, et iaculis lorem posuere. Duis maximus blandit arcu non condimentum. Sed fringilla, nibh sit amet ultricies bibendum, quam ante tempor eros, sed congue purus est in est. Morbi vitae lacus a nisl eleifend dignissim eu eget nulla. Aliquam erat leo, interdum a leo sit amet, consequat feugiat nunc. Maecenas sodales lorem vel lorem fringilla euismod. Cras in ante pharetra, sollicitudin turpis sed, ullamcorper arcu. Aliquam aliquam nibh vitae lectus commodo efficitur. In id neque nulla. Quisque porta ante sed eros euismod semper in a turpis. In lacinia malesuada quam, sed dictum eros tristique id. Vivamus tempus, nulla sed consectetur ultricies, turpis lectus molestie elit, id vestibulum enim lacus non dui.</p>
              </v-card-text>
              <v-btn
                to="registration"
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
      this.show = false
    }
  },
}
</script>