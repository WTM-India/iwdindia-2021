<template>
  <v-container fluid class="">
    <v-row class="">
      <v-col class="px-4">
         <p class="google-font mb-0" style="font-size:2.0em;">Frequently asked questions</p> 
         <p class="google-font mb-4">Need Answers? Everything you need to know, Find them here. <router-link to="/faq">See More FAQs</router-link></p>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="10" cols="12" class="pa-0 ma-0 px-4 mx-0 ">
        <v-expansion-panels accordion class="" flat >
          <v-expansion-panel v-for="(faq, i) in faqsData" :key="i" class="px-0 mx-0" style="border:1px solid #dee0e4">
            <v-expansion-panel-header >
              <p
                class="google-font"
                style="font-size:1.2em;margin:auto"
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

<style scoped>
.borderbottom{
  /* border-bottom:1px solid #dee0e4 */
}
</style>

