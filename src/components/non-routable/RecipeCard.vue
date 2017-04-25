<template>
  <router-link tag="div" :to="{ name: 'recipes-edit', params: { id: recipe['.key'] }}" class="bg-primary well well-sm recipe-card">
    <h4 v-text="recipe.name"></h4>
    <div class="recipe-details">
      <div class="dl-horizontal">
        <div class="recipe-details-param">
          <div>Type:</div>
          <div v-text="recipe.type"></div>
        </div>
        <div class="recipe-details-param">
          <div>Base:</div>
          <div v-text="recipe.pg"></div>
        </div>
        <div class="recipe-details-param">
          <div>Volume:</div>
          <div v-text="`${recipe.volume}ml`"></div>
        </div>
        <div class="recipe-details-param">
          <div>Brew:</div>
          <div v-text="`${recipe.brew}h`"></div>
        </div>
      </div>
      <!--div class="recipe-details-aromas" v-for="aromaExpend in recipe.aromas">
        <span class="label label-success" v-text="aromaExpend.aroma.name"></span>
      </div-->
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'recipe-card',
    props: ['recipe'],
  };
</script>

<style scoped lang="scss">
  .recipe-card {
    &.well {
      background-color: #337ab7!important;
    }

    .dl-horizontal {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
    }

    .recipe-details-param {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;

      div:first-of-type {
        min-width: 50%;
      }
    }

    h4 {
      border-bottom: 1px solid #fff;
      padding-bottom: 1rem;
    }

    .recipe-details-aromas {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid #fff
    }
  }
</style>
