<template>
  <v-container fluid>
    <v-row align="center" justify="start">
      <v-col
        cols="12"
        sm="4"
        md="3"
        lg="3"
        style=""
        v-for="(item, idx) in organizingCommunities"
        :key="idx"
      >
        <v-card
          style="border-radius: 8px;border:1px solid #e0e0e0"
          :href="item.link"
          target="_blank"
          class="pa-2"
          flat
        >
          <v-tooltip bottom open-delay="100">
            <template v-slot:activator="{ on }">
              <v-img
                v-if="isSponsor == 'no'"
                contain
                v-on="on"
                :src="require('@/assets/img/communities/' + item.image)"
              ></v-img>
              <v-img
                v-else
                contain
                v-on="on"
                :src="require('@/assets/img/sponsors/' + item.image)"
              ></v-img>
            </template>
            <span class="google-font">{{ item.name }}</span>
          </v-tooltip>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "OrganizingCommunities",
  props: ["organizingCommunities",'isSponsor'],
};
</script>

<style>
</style>