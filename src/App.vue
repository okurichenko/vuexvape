<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import firebaseApp from '@/store/firebase';
  import { mapState } from 'vuex';
  import LayoutDefault from '@/components/non-routable/LayoutDefault';

  export default {
    name: 'app',
    components: {
      layoutDefault: LayoutDefault,
    },
    computed: {
      ...mapState(['user']),
    },
    beforeCreate() {
      firebaseApp.auth().onAuthStateChanged((user) => {
        // initially user = null, after auth it will be either <fb_user> or false
        this.$store.commit('setUser', user || false);
        if (user && this.$route.path === '/sign-in') {
          this.$router.replace('/');
        } else if (!user && this.$route.path !== '/sign-in') {
          this.$router.replace('/sign-in');
        }
      });
    },
  };
</script>

<style lang="scss">
  $fa-font-path: "~font-awesome/fonts/";
  @import "~font-awesome/scss/font-awesome.scss";
  @import "assets/styles/app.scss";
</style>
