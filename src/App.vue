<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
  import firebaseApp from '@/store/firebase';
//  import refBindings from '@/store/ref-bindings';
  import { mapState } from 'vuex';

  export default {
    name: 'app',
    computed: {
      ...mapState(['user']),
    },
    beforeCreate() {
//      firebaseApp.database().ref('/connected').on('value', (connectedSnap) => {
//        if (connectedSnap.val() === 1) {
//        /* we're connected! */
//          const firebaseCurrentUser = firebaseApp.auth().currentUser;
//          if (firebaseCurrentUser) {
//            this.$store.commit('setUser', firebaseCurrentUser);
//            refBindings(this, this.$store.state.user);
//          }
//        } else {
//          /* we're disconnected! */
//        }
//      });
      firebaseApp.auth().onAuthStateChanged((user) => {
        // initially user = null, after auth it will be either <fb_user> or false
        this.$store.commit('setUser', user || false);
        if (user && this.$route.path === '/sign-in') {
//          refBindings(this, user);
          this.$router.replace('/');
        } else if (!user && this.$route.path !== '/sign-in') {
          this.$router.replace('/sign-in');
        }
      });
    },
  };
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
