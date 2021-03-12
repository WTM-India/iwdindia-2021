<template>
  <v-dialog v-model="dialog" width="800" scrollable>
    <template v-slot:activator="{ on, attrs }">
      <div
        v-on="on"
        v-ripple
        v-bind="attrs"
        style="
          cursor: pointer;
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 5px;
        "
        class="text-center py-5 ma-1 fill-height"
      >
        <v-avatar size="130">
          <v-img
            :src="getImgUrl(speakerData.image)"
            :lazy-src="getImgUrl(speakerData.image)"
            :alt="speakerData.name"
          ></v-img>
        </v-avatar>
        <p class="mt-3 mb-0 google-font mb-0" style="font-size: 120%">
          {{ speakerData.name }}
        </p>
        <p class="mt-1 mb-0 google-font mt-0" style="font-size: 80%">
          {{ speakerData.company.name }}
        </p>

        <socialMediaDetails class="pl-0 ml-0" :socialInfo="speakerData.social" />
      </div>
    </template>
    <v-card class="white" v-if="dialog">
      <v-card-text class="pa-0">
        <v-container fluid>
          <v-row style="border-bottom: 1px solid #e0e0e0">
            <v-col md="12" cols="12" class="px-md-10 px-3">
              <v-list class="pa-0 ma-0">
                <v-list-item class="pa-0 ma-0">
                  <v-list-item-avatar size="60">
                    <v-img
                      :src="getImgUrl(speakerData.image)"
                      :lazy-src="getImgUrl(speakerData.image)"
                      :alt="speakerData.name"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="google-font mb-0" style="font-size: 140%">{{ speakerData.name }}</v-list-item-title>
                    <v-list-item-subtitle class="google-font mb-0" style="font-size: 110%"
                      >{{ speakerData.company.designation }}</v-list-item-subtitle
                    >
                    <v-list-item-subtitle v-if="speakerData.company.name" class="google-font mb-0" style="font-size: 110%"
                      >
                      {{ speakerData.company.name }}</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="12" cols="12" class="px-md-10 px-5">
              <p class="google-font mb-0" style="font-size: 110%"><b>Bio</b></p>
              <p class="google-font" style="font-size: 110%">{{ speakerData.bio }}</p>

              <socialMediaDetails
                class="pl-0 ml-0 mb-2"
                :socialInfo="speakerData.social"
              />

              <p
                class="my-0 google-font mt-5"
                v-if="speakerData.sessionId.length > 0"
                style="font-size: 120%"
              >
                <b>Session:</b>
              </p>
              <v-container fluid>
                <v-row md="12">
                  
                  <v-col
                    cols="12"
                    md="8"
                    class="px-0 my-0 py-0"
                    v-for="itemp in speakerData.sessionId"
                    :key="itemp.id"
                  >
                    <div
                      v-for="item in binarySearchSession(itemp)"
                      :key="item.id"
                      class="mb-2"
                      style="width: 100%"
                    >
                      <v-list
                        two-line
                        subheader
                        class="pa-0 ma-0"
                        style="width: 100%"
                      >
                        <v-list-item class="pa-0" style="width: 100%">
                          <v-list-item-avatar>
                            <v-avatar color="grey" size="100">
                              <span class="white--text">{{
                                getCharString(item.title)
                              }}</span>
                            </v-avatar>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title
                              class="google-font text-wrap"
                              style="text-align: left"
                              >{{ item.title }}</v-list-item-title
                            >
                            <v-list-item-subtitle class="google-font">
                              <v-chip
                                color="red"
                                label
                                outlined
                                v-if="item.timeDuration"
                                class="mt-2 mb-1"
                                x-small
                                >{{ item.timeDuration }} Min</v-chip
                              >
                              <v-chip
                                color="#00BFA5"
                                label
                                v-if="item.track"
                                outlined
                                class="mt-2 mb-1 ml-2"
                                x-small
                                >{{ item.track }}</v-chip
                              >
                            </v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <!-- <v-divider></v-divider> -->

      <v-card-actions class="white">
        <v-spacer></v-spacer>
        <v-btn
          aria-label="close"
          class="px-10"
          color="primary"
          text
          @click="dialog = false"
          >Close</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import socialMediaDetails from "@/components/common/PersonSocialInfo";
export default {
  name: "SpeakerDetails",
  components: {
    socialMediaDetails,
  },
  props: ["speakerData", "SessionDetails"],
  data: () => ({
    dialog: false,
  }),
  methods: {
    binarySearchSession(id) {
      let low = 0;
      let high = this.SessionDetails.length;
      while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (this.SessionDetails[mid].id == id) {
          return [this.SessionDetails[mid]];
        } else if (this.SessionDetails[mid].id > id) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }
    },
  },
};
</script>

<style scoped>
.darkModeCard {
  background-color: #292929;
  border: 1px solid #212121;
  border-radius: 5px;
}
.whiteThemeCard {
  background: white;
  border: 1px solid #e0e0e0;
  /* border-top: 4px solid #0005DF; */
  border-radius: 5px;
}
</style>
