<template>
  <div class="hello">
    <layout-header>
      <div class="header-left"></div>
      <h5 class="header-title text-center">Aromas</h5>
      <div class="header-right">
        <router-link to="/aromas/add" class="btn btn-link btn-block">
          <i class="fa fa-plus"></i>
        </router-link>
      </div>
    </layout-header>
    <layout-content>
      <div class="aromas-list" v-for="aroma in aromas">
        <aroma-card :aroma="aroma"></aroma-card>
      </div>
    </layout-content>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import LayoutHeader from '@/components/non-routable/LayoutHeader';
  import LayoutContent from '@/components/non-routable/LayoutContent';
  import AromaCard from '@/components/non-routable/AromaCard';

  export default {
    name: 'aromas-index',
    components: {
      LayoutHeader,
      LayoutContent,
      AromaCard,
    },
    computed: {
      ...mapState(['user']),
      aromas() {
        const state = this.$store.state;
        return state.allAromas.filter(aroma => aroma.userId === state.user.uid);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
