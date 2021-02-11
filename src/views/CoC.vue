<template>
  <v-main class="">
    <v-container fluid class="mb-5 px-5">
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
            Code of Conduct
          </h1>
          <p class="google-font" style="font-size:120%">All participants of Women Techmakers International Women's Day India Summit 2021 event, online attendees, event staff, and speakers, must abide by the following policy:</p>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col md="10" lg="10" sm="11" cols="12">
          <v-container fluid class="ma-0 pa-0">
            <v-row align="start" justify="start">
              <v-col md="4" cols="12" v-for="(item, index) in cocData" :key="index">
                <p class="google-font" style="font-size:1.5em;">
                  <b>{{ item.name }}</b>
                </p>
                <p class="google-font" style="font-size:115%">
                  {{ item.des }}
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Partners",
  components: {},
  data: () => ({
    loading: true,
    cocData: [
      {
        name: "Be nice to the other attendees",
        des:
          "We're all part of the same community, so be friendly, welcoming, and generally a nice person. Be someone that other people want to be around. ",
      },
      {
        name: "Be respectful and constructive",
        des:
          "Remember to be respectful and constructive with your communication in discussions to fellow attendees. Don't get into flame wars, make personal attacks, vent, or rant unconstructively. Everyone should take responsibility for the community and take the initiative to diffuse tension and stop a negative thread as early as possible.",
      },
      {
        name: "Be collaborative",
        des:
          "We are here to learn a lot from each other. Share knowledge, and help each other out. You may disagree with ideas, not people.",
      },
      {
        name: "Participate",
        des:
          "Be a good listener.  Be mentally present in the sessions you are interested in. Join in on discussions, show up for the sessions on time, offer feedback on your event experience, and help us get better in our community engagements.",
      },
      {
        name: "Basic etiquette for online discussions",
        des:
          "Keep off topic conversations to a minimum. Don’t be spammy by advertising or promoting personal projects which are off topic.",
      },
    ],
  }),
  mounted() {},
};
</script>

<style></style>
