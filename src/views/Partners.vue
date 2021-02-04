<template>
  <v-main class="ma-0">
    <v-container fluid v-if="loading">
      <v-row justify="center" align="center">
        <v-col cols="12">
          <v-progress-circular
            indeterminate
            :size="50"
            :width="5"
          ></v-progress-circular>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid v-else class="mb-5">
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
            Organizing Communities
          </h1>
          <p class="google-font" style="font-size:120%">
            GDG Jalandhar along with the DSCs of Punjab, are organizing DevMela
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col md="10" lg="10" sm="11" cols="12">
          <OrganizingCommunities
            :organizingCommunities="organizingCommunitiesData"
            isSponsor="no"
          />
        </v-col>
      </v-row>

      <v-row justify="center" align="center" class="my-md-10 my-5">
        <v-col md="10" lg="10" sm="11" cols="12" class="my-0 py-0">
          <h1
            class="google-font ml-3"
            style="
                    font-size:1.8em;
                    line-height: 1.22;
                    font-weight: 500;
                  "
          >
            Our Partners
          </h1>
        </v-col>
        <v-col md="10" lg="10" sm="11" cols="12" class="my-0 py-0">
          <OrganizingCommunities
            :organizingCommunities="sponsorsShowData"
            isSponsor="yes"
          />
          <!-- <div
            class="mx-2 pa-md-5 py-md-8"
            style="border:1px solid #fafafa;border-radius:8px;background:#fafafa"
          >
            <v-container fluid>
              <v-row align="center" justify="center">
                <v-col md="7">
                  <p
                    class="google-font"
                    style="
                    font-size:2.0em;
                    line-height: 1.22;
                    font-weight: 500;
                  "
                  >
                    Sponsor us
                  </p>
                  <p class="google-font" style="font-size:120%">
                    DevMela is being organized with the motive of helping out
                    the developers in and out Punjab through the talks on
                    various technologies like Cloud, Design, ML, Web, Flutter,
                    Mobile and many more. <br /><br />
                    By sponsoring us, you get business exposure and a chance to
                    connect with the tech enthusiasts. This will also help the
                    attendees to grow using your products in their area of
                    interest.
                    <br /><br />
                    Sponsoring us will also help you as we will be promoting the
                    brand from our channel to the quality audiences.
                  </p>

                  <v-btn
                    dark
                    color="#4285FA"
                    depressed
                    large
                    rel="noreferrer"
                    target="_blank"
                    style="text-transform: capitalize;border-radius: 5px;font-size:100%;"
                    href="https://docs.google.com/presentation/d/e/2PACX-1vQ56u-FMfS76boAXR1Dp2xf6a8PXBHj5tID6CAYQiO0XbQVvHvxy63p2RE6auo1l6eUjMSIE5pjCYsd/pub?start=false&loop=false&delayms=3000"
                    class="google-font mr-3 mb-3 mt-6"
                    >Check out the Overview</v-btn
                  >
                  
                </v-col>
                <v-col md="4" class="text-center hidden-sm-and-down">
                  <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    :src="require('@/assets/img/community.png')"
                    width="70%"
                    style="margin-left:auto;margin-right:auto"
                  />
                </v-col>
              </v-row>
            </v-container>
          </div> -->
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import organizingCommunitiesData from "@/assets/data/communities";
import SponsorsData from "@/assets/data/sponsors";
import OrganizingCommunities from "@/components/partners/OrganizingCommunities";
export default {
  name: "Partners",
  components: {
    OrganizingCommunities,
  },
  data: () => ({
    loading: true,
    organizingCommunitiesData: [],
    sponsorsShowData:[]
  }),
  mounted() {
    this.organizingCommunitiesData = organizingCommunitiesData;
    this.sponsorsShowData = SponsorsData;
    this.loading = false;
  },
};
</script>

<style></style>
