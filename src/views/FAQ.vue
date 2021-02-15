<template>
  <v-main class="my-5 px-1">
    <v-container fluid>
      <v-row justify="center" align="start" class="my-5 ">
        <v-col md="10" lg="10" sm="11" cols="12">
          <v-container fluid class="pa-0 ma-0">
            <v-row>
              <v-col class="pb-0" md="3" lg="3">
                <!-- <v-img
                  :src="require('@/assets/img/FAQ.svg')"
                  style=""
                  width="80%"
                ></v-img> -->
                <!-- <h1 class="google-font mb-5">FAQ</h1> -->
                <p
                  class="google-font mt-6 grey--text text--darken-2 mb-0"
                  style="
                    font-size:1.9em;
                  "
                >
                  FAQ
                </p>
                <p class="google-font my-0">Need Answers?</p>
                <p class="google-font my-0">Everything you need to know, find them here.</p>
              </v-col>
              <v-col md="9" lg="9" sm="11" cols="12">
                <v-container fluid>
                  <v-row v-for="(coc, i) in faqData" :key="i">
                    <v-col md="9">
                      <p
                        style="color:#4285FA;font-size:130%"
                        class="google-font mb-2"
                      >
                        {{ coc.name }}
                      </p>
                      <p class="google-font" style="font-size:110%">{{ coc.des }}</p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import data from "@/assets/data/faq.json";
export default {
  name: "FAQ",
  data: () => ({
    faqData: [],
  }),
  mounted() {
    this.faqData = data;
  },
};
</script>

<style></style>
