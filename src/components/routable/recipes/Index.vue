<template>
  <div class="hello">
    <layout-header>
      <div class="header-left"></div>
      <h5 class="header-title text-center">Recipes</h5>
      <div class="header-right">
        <div class="btn btn-link btn-block">
          <i class="fa fa-plus"></i>
        </div>
      </div>
    </layout-header>
    <layout-content>
      <div class="aromas-list" v-for="recipe in recipes">
        <recipe-card :recipe="recipe"></recipe-card>
      </div>
    </layout-content>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import LayoutHeader from '@/components/non-routable/LayoutHeader';
  import LayoutContent from '@/components/non-routable/LayoutContent';
  import RecipeCard from '@/components/non-routable/RecipeCard';

  export default {
    name: 'recipe-index',
    components: {
      LayoutHeader,
      LayoutContent,
      RecipeCard,
    },
    computed: {
      ...mapState(['user']),
      recipes() {
        const state = this.$store.state;
        return state.allRecipes;
      },
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
