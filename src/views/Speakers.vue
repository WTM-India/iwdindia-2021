<template>
  <v-main class="ma-0">
    <v-container fluid class="mb-5">
      <v-row
        justify="center"
        align="center"
        class=""
        style="border-bottom:1px solid #e0e0e0"
      >
        <v-col md="10" lg="10" sm="11" cols="12" class="my-md-12">
          <h1
            class="google-font"
            style="
                    font-size:2.5em;
                    line-height: 1.22;
                    font-weight: 500;
                  "
          >
            Speakers
          </h1>
          <p class="google-font" style="font-size:110%">
           Our speakers are influential women & allies who have been associated with communities within their organisations, cities, country and beyond.
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="pt-0">
        <v-col md="10" lg="10" sm="11" cols="12" class="pt-0">
          <v-container fluid>
            <v-row class>
              <v-col
                md="3"
                lg="2"
                xl="2"
                sm="4"
                cols="6"
                class="px-1"
                v-for="(item, index) in SpeakersData"
                :key="index"
              >
                <tempComp :speakerData="item" :SessionDetails="SessionDetails" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import SpeakersDataTemp from "@/assets/data/speakers.json";
import SessionDetails from "@/assets/data/sessions.json";
export default {
  name: "Speakers",
  components: {
    // Speakers: () => import("@/components/speakers/SpeakerDetails"),
    tempComp: () => import("../components/speakers/Temp"),
  },
  data: () => ({
    SpeakersData: [],
  }),
  mounted() {
    this.SpeakersData = this.sortByName(SpeakersDataTemp);
    this.SessionDetails = SessionDetails.sort((a, b) => {
      return a.id > b.id ? 1 : -1;
    });
  },
};
</script>

<style></style>
