<template>
  <div class="content-fluid bg-primary full-height">
    <div class="row">
      <div class="col-xs-6 col-xs-offset-3 pushed">
        <button class="btn btn-default btn-block" @click="signIn">
          Sign in with <i class="fa fa-google"></i>oogle
        </button>
      </div>
    </div>
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
<style lang="sass">


</style>
