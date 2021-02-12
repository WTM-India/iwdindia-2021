<template>
  <v-container fluid class="fill-height">
    <v-row justify="center" align="center">
      <v-col md="11">
        <p class="google-font mb-0" style="font-size:1.9em;">
          WHAT TO EXPECT
        </p>
      </v-col>
    </v-row>
    <v-row align="start" justify-md="center" class="fill-height">
      <v-col md="11">
        <v-container fluid>
          <v-row>
            <v-col
              cols="6"
              md="3"
              lg="3"
              xl="3"
              class="text-center"
              style=""
              v-for="(item, index) in themes"
              :key="index"
            >
              <v-img :src="require('@/assets/img/theme/' + item.img)" style="width:70%;margin-left:auto;margin-right:auto"></v-img>
              <p class="google-font" style="font-size:110%;color:#545454">
                {{ item.content }}
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeThemeComponent",
  data: () => ({
    themes: [
      {
        name: "Mobile",
        content:
          "Share learnings, community stories, and relevant expertise/resources with WTM Ambassadors, GDG Organizers and community members. ",
        img: "1.png",
      },
      {
        name: "Web",
        content:
          "Participate in curated sessions led by women leaders and experts to aid in personal and professional development. ",
        img: "2.png",
      },
      {
        name: "Cloud",
        content:
          "Learn and exchange best practices on creating diverse and inclusive communities and events. ",
        img: "3.png",
      },
      {
        name: "Machine Learning",
        content:
          "Connect with a community of women leaders in technology across India and celebrate each others achievements.",
        img: "4.png",
      },
    ],
  }),
  mounted() {},
};
</script>

<style></style>
