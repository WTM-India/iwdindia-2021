<template>
  <v-app>
    <v-snackbar
      v-model="snackWithButtons"
      :timeout="timeout"
      bottom
      right
      class="snack"
    >
      {{ snackWithBtnText }}
      <template v-slot:action="{ attrs }">
        <v-spacer />
        <v-btn
          aria-label="Snackbar"
          dark
          text
          v-bind="attrs"
          color="#00f500"
          @click.native="refreshApp"
        >
          {{ snackBtnText }}
        </v-btn>
        <v-btn
          icon
          v-bind="attrs"
          aria-label="close"
          @click="snackWithButtons = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    <!-- v-if="!$route.name=='Badge'"/ -->
    <AppBar />
    <MainView />
    <AppDrawer />
    <AppBottomNav class="hidden-md-and-up" />
    <AppFooter class="hidden-sm-and-down" />
  </v-app>
</template>

<script>
import MainView from /* webpackChunkName: "views", webpackPreload: true */ "@/components/core/Views";
import AppBar from /* webpackChunkName: "appbar", webpackPreload: true */"@/components/core/AppBar";
import AppDrawer from /* webpackChunkName: "Appdrawer", webpackPreload: true */"@/components/core/Drawer";
import AppBottomNav from /* webpackChunkName: "bottomnav", webpackPreload: true */"@/components/core/BottomNav"
import AppFooter from /* webpackChunkName: "footer", webpackPreload: true */"@/components/core/Footer"
export default {
  name: "App",
  components: {
    AppBar,
    MainView,
    AppDrawer,
    AppBottomNav,
    AppFooter
    // AppDrawer: () => import(/* webpackChunkName: "Appdrawer", webpackPreload: true */"@/components/core/Drawer"),
    // AppBottomNav: () => import(/* webpackChunkName: "bottomnav", webpackPreload: true */"@/components/core/BottomNav"),
    // AppFooter: () => import(/* webpackChunkName: "footer", webpackPreload: true */"@/components/core/Footer"),
  },

  data: () => ({
    refreshing: false,
    registration: null,
    snackBtnText: '',
    snackWithBtnText: '',
    snackWithButtons: false,
    timeout: 6000,
  }),
  created() {
    // Listen for swUpdated event and display refresh snackbar as required.
    document.addEventListener('swUpdated', this.showRefreshUI, { once: true });
    // Refresh all open app tabs when a new service worker is installed.
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return;
        this.refreshing = true;
      window.location.reload();
    });
  },
  methods:{
    showRefreshUI(e) {
      this.registration = e.detail;
      this.snackBtnText = 'Refresh';
      this.snackWithBtnText = 'New version available!';
      this.snackWithButtons = true;
      this.refreshApp()
    },
    refreshApp() {
      this.snackWithButtons = false;
      if (!this.registration || !this.registration.waiting) { return; }
      this.registration.waiting.postMessage('skipWaiting');
    }
  }
};
</script>


<style scoped>
.snack >>> .v-snack__content {
  padding-right: 16px;
}
</style>
