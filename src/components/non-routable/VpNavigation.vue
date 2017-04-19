<template>
  <div class="vp-navigation bg-primary">
    <div class="vp-navigation-left">
      <router-link to="recipes" class="btn btn-link"><i class="fa fa-flask"></i></router-link>
      <router-link to="aromas" class="btn btn-link"><i class="fa fa-thermometer-full"></i></router-link>
    </div>
    <div class="vp-navigation-right">
      <a class="btn btn-link" @click="signOut"><i class="fa fa-sign-out"></i></a>
    </div>
  </div>
</template>

<script>
  import firebaseApp from '@/store/firebase';

  export default {
    methods: {
      signOut() {
        firebaseApp.auth().signOut();
      },
    },
  };
</script>

<style scoped lang="scss">
  @import '../../assets/styles/_variables.scss';
  @import '../../assets/styles/mixins/_mixins.scss';

  .vp-navigation {
    align-items: center;
    background: #000;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 0 1rem;

    @include size(100%, (100vh - $layout-default-height));

    a, .btn.btn-link {
      color: $color-text-invert;
      padding: 1.9rem;
      transition: color 200ms ease;

    &.active {
       color: $color-text-invert-active;
       transition: color 200ms ease;
     }
    }
  }
</style>
