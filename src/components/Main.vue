<template>
  <div class="main">
    <layout-default>
      <router-view></router-view>
    </layout-default>
  </div>
</template>

<script>
  import LayoutDefault from '@/components/non-routable/LayoutDefault';

  export default {
    name: 'main',
    components: {
      LayoutDefault,
    },
    beforeCreate() {
      if (this.$store.state.user) {
        this.$router.replace('/aromas');
      } else {
        this.$router.replace('/sign-in');
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
