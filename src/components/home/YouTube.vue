<template>
  <v-container fluid class="py-10">
    <!-- <v-row justify="center" align="center">
      <v-col class="text-center">
        <p
          class="google-font mb-2"
          style="font-size: 3.5vh;line-height: 1.22;font-weight:500"
        >
          Explore YouTube Live Streams
        </p>
      </v-col>
    </v-row> -->
    <v-row justify="center" align="center">
      <v-col
        v-for="item in youtube"
        :key="item.day"
        md="5"
        cols="10"
        class="ma-1 pa-5"
        style="
          background: #ffffff 0% 0% no-repeat padding-box;
          box-shadow: 0px 3px 16px #dceaff;
          border-radius: 10px;
          opacity: 1;
        "
      >
        <v-img :src="item.img" style="border-radius:8px"></v-img>
        <p class="google-font mt-2 mb-0" style="font-size: 80%">
          {{ item.date }}
          <br />{{ item.time }}
        </p>
        <p class="google-font mb-3" style="font-size:110%">{{ item.day }}</p>
        <v-btn
          :href="item.link"
          target="_blank"
          small
          outlined
          color="red"
          style="text-transform: capitalize"
          class="ml-0 google-font"
        >
          <v-icon size="20px" class="mr-1">{{
            item.type == "Watch Now" ? "mdi-access-point" : "mdi-bell-outline"
          }}</v-icon
          >{{ item.type }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    youtube: [
      {
        day: "DevMela | Day 01",
        date: "November 28",
        type: "Watch Now",
        link: "https://bit.ly/devmela01",
        time: "03:30 PM - 06:30 PM (IST)",
        img:"https://img.youtube.com/vi/VpGeP9i5nxk/mqdefault.jpg"
      },
      {
        day: "DevMela | Day 02",
        date: "November 29",
        type: "Watch Now",
        link: "https://bit.ly/devmela02",
        time: "03:00 PM - 06:30 PM (IST)",
        img:"https://img.youtube.com/vi/0_Rb793YT_M/mqdefault.jpg"
      }
    ],
  }),
};
</script>

<style>
</style>