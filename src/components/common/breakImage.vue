<template>
  <v-container fluid class="my-0 pa-0">
    <v-row
      align="center"
      justify="center"
      :style="{'background': colorCode}"
      class="ma-0 py-0"
    >
      <v-col cols="12" md="12" lg="12" sm="12" class="pa-0 ma-0" >
        <v-img
          alt="Shape svg"
          class="contain"
          :src="require('@/assets/img/wtm-full-banner.png')"
          width="120%"
          style="max-height:180px"
        ></v-img>

        <!-- <v-img
          alt="Shapes Images"
          class="contain"
          src="https://developer.chrome.com/devsummit/assets/squiggles/banner-2e4e7af6.avif"
          width="100%"
          style="z-index:1"
          :style="{'maxHeight':height}"
        ></v-img> -->

        <!-- <v-img
          alt="Shape svg"
          class="contain"
          :src="require('@/assets/img/tear-top-white.svg')"
          width="100%"
          style="max-height:400px;transform: skewY(270deg);z-index:2;"
        ></v-img> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        name:'breakImage',
        props:['colorCode','height'],
        
    }
</script>
