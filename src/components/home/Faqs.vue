<template>
  <v-container fluid class="">
    <v-row class="">
      <v-col class="px-4">
         <p class="google-font mb-0" style="font-size:2.0em;">Frequently asked questions</p>
         <p>Need Answers? Everything you need to know, Find them here. <router-link to="/faq">Seee More FAQs</router-link></p>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="10" cols="12" class="pa-0 ma-0 px-0 mx-0 ">
        <v-expansion-panels flat popout class="" >
          <v-expansion-panel v-for="(faq, i) in faqsData" :key="i" class="px-0 mx-0" style="border:1px solid #e0e0e0">
            <v-expansion-panel-header>
              <p
                class="google-font"
                style="font-size:110%;margin:auto"
              >
                {{ faq.name }}
              </p>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p class="google-font text-left">{{ faq.des }}</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import data from "@/assets/data/faq.json";
export default {
  name: "HomeFASComponent",
  data: () => ({
    faqsData: [],
  }),
  mounted() {
    this.faqsData = data.slice(0, 5);
  },
};
</script>

