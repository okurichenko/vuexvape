<template>
  <div class="sign-in">
    <button @click="signIn">Sign in with Google</button>
  </div>
</template>

<script>
  import firebaseApp from '@/store/firebase';

  export default {
    name: 'sign-in',
    methods: {
      signIn() {
        firebaseApp.auth().signInAnonymously();
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
