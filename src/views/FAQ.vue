<template>
  <v-main class="my-5">
    <v-container fluid>
      <v-row justify="center" align="start" class="my-5 py-5">
        <v-col md="10" lg="10" sm="11" cols="12">
          <v-container fluid class="pa-0 ma-0">
            <v-row>
              <v-col class="pb-0" md="3" lg="3">
                <v-img
                  :src="require('@/assets/img/FAQ.svg')"
                  style=""
                  width="80%"
                ></v-img>
                <!-- <h1 class="google-font mb-5">FAQ</h1> -->
                <h1
                  class="google-font mt-6"
                  style="
                    font-size:2.9em;
                    line-height: 1.22;
                    font-weight: 500;
                    color:#4285F4
                  "
                >
                  FAQ
                </h1>
                <p class="google-font my-0">Need Answers?</p>
                <p class="google-font my-0">Everything you need to know, Find them here.</p>
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
                <!-- <v-expansion-panels>
                  <v-expansion-panel v-for="(item, i) in faqData" :key="i">
                    <v-expansion-panel-header class="google-font">{{
                      item.name
                    }}</v-expansion-panel-header>
                    <v-expansion-panel-content
                      class="google-font py-3 grey lighten-4"
                    >
                      {{ item.des }}
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels> -->
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
