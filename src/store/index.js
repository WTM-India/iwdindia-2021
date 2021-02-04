import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [
      {
        text: "Home",
        to: "/",
        icon: "mdi-home-outline",
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      // {
      //   text: "Communities",
      //   to: "/communities",
      //   icon: "mdi-form-select",
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: false,
      //   },
      // },
      {
        text: "Schedule",
        to: "/schedule",
        icon: "mdi-format-float-left",
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      {
        text: "Speakers",
        to: "/speakers",
        icon: "mdi-account-switch",
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      // {
      //   text: "Team",
      //   to: "/team",
      //   icon: "mdi-account-multiple",
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: false,
      //   },
      // },
      // {
      //   text: "Register",
      //   to: "/registration",
      //   icon: "mdi-account-circle-outline",
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: false,
      //   },
      // },
      // {
      //   text: "Live",
      //   to: "/Live",
      //   icon: "mdi-trophy-variant",
      //   meta: {
      //     showToolbar: false,
      //     showBottomNav: false,
      //   },
      // },
      {
        text: "FAQ",
        to: "/faq",
        icon: "mdi-star-outline",
        meta: {
          showToolbar: true,
          showBottomNav: false,
        },
      },
      {
        text: "Badge",
        to: "/badge",
        icon: "mdi-sticker-emoji",
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
    ],
},
  getters: {
    links: (state) => state.items,
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: (state) => (state.drawer = !state.drawer),
  },
  actions: {},
  modules: {},
});
