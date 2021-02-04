<template>
  <v-container fluid class="fill-height">
    <v-row justify="center" align="center" class="text-center">
      <v-col md="12">
        <p class="google-font mb-0" style="font-size:1.9em;">
          Our Themes
        </p>
        <p class="google-font">Learn together to make good things at DevMela.</p>
      </v-col>
    </v-row>
    <v-row align="start" justify-md="center" class="fill-height">
      <v-col cols="6" md="2" lg="2" xl="2" class="" style="" v-for="(item, index) in themes" :key="index">
        <!-- <div class="ma-1 pa-5" style="border:1px solid #e0e0e0;border-radius:8px"> -->
        <p class="google-font" style="font-size:1.5em;">
            <b>{{item.title}}</b>
        </p>
        <p class="google-font" style="font-size:110%">
            {{item.description}}
        </p>
        <!-- </div>/ -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    themes:[
        { title: 'Web', description: 'Web is vast! Explore cool technologies like Deno along with a crisp talk on some hot topics about the Web.' },
        { title: 'Mobile', description: 'Traverse the  Mobile App development strategies having varieties from Android to Flutter.' },
        { title: 'Cloud', description: 'Learn Cloud and how to use Google Cloud Platform to solve any problem and have a solution.' },
        { title: 'ML', description: 'See the magic of Machine Learning from building the projects to building a career.' },
        { title: 'Design', description: ' Intensify UI/UX skills and let your creativity explore the world with your designs.' },
    ]
  }),
  mounted() {},
};
</script>

<style></style>
