<template>
  <v-main class="">
    <v-container fluid class="grey lighten-4">
      <v-row justify="center" align="center" v-if="loading">
        <v-col cols="12">
          <v-progress-circular
            indeterminate
            :size="50"
            :width="5"
          ></v-progress-circular>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" v-else>
        <v-col md="10" lg="10" sm="11" cols="12">
          <v-container>
            <v-row class>
              <v-col class="mb-5">
                <h1 class="google-font mb-7 grey--text text--darken-2">
                  Our Team
                </h1>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="my-5 py-5">
      <v-row justify="center" align="center" class="px-0">
        <v-col md="10" lg="10" sm="11" cols="12" style="margin-top: -150px">
          <v-container fluid v-if="team.length > 0">
            <v-row class>
              <v-col
                md="3"
                lg="3"
                xl="2"
                sm="4"
                cols="6"
                class="px-1"
                v-for="(item, index) in team"
                :key="index"
              >
                <TeamDetails :item="item" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import TeamData from "@/assets/data/team.json";
import TeamDetails from "@/components/team/TeamDetails";
export default {
  name: "Team",
  data: () => ({
    team: [],
    loading: true,
  }),
  components: {
    TeamDetails,
  },
  mounted() {
    this.team = TeamData.sort((a, b) => {
      return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
    });
    this.loading = false;
  },
};
</script>

<style>
</style>