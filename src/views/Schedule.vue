<template>
  <v-main class="ma-0">
    <v-container fluid class="mb-5">
      <v-row
        justify="center"
        align="center"
        class="pb-0 mb-0"
        style="border-bottom:1px solid #e0e0e0"
      >
        <v-col md="10" lg="10" sm="11" cols="12" class="mt-md-12 pb-0">
          <h1
            class="google-font"
            style="
                    font-size:2.5em;
                    line-height: 1.22;
                    font-weight: 500;
                  "
          >
            Schedule
          </h1>
          <p class="google-font" style="font-size:110%">
            Check out the schedule below.
          </p>
          <br>
          <v-tabs
            v-model="model"
            color="primary"
            slider-color="primary"
          >
            <v-tab href="#day1"> March 20 </v-tab>
            <v-tab href="#day2"> March 21 </v-tab>
          </v-tabs>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="pt-0">
        <v-col md="10" lg="10" sm="11" cols="12" class="pt-0">
          <v-tabs-items v-model="model">
            <v-tab-item
              value="day1"
              class="white my-3"
            >
             <v-container>
                <v-row>
                  <v-col>
                    <ScheduleDetails :data="ScheduleData[0]" />
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <v-tab-item
              value="day2"
              class="white my-3"
            >
               <v-container>
                <v-row>
                  <v-col>
                    <ScheduleDetails :data="ScheduleData[1]" />
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import ScheduleDetailsData from "@/assets/data/schedule.json";
import ScheduleDetails from "@/components/schedule/ScheduleDetails";
export default {
  name: "Schedule",
  components: {
    ScheduleDetails
  },
  data: () => ({
    model: "day2",
    ScheduleData: [],
  }),
  mounted() {
    this.ScheduleData = ScheduleDetailsData;
  },
   methods: {
    getMobileTab() {
      if (window.innerWidth < 500) return true;
      else return false;
    },
  },
};
</script>

<style></style>
