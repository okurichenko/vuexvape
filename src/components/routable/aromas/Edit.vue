<template>
  <div class="aromas-edit">
    <layout-header>
      <div class="header-left">
        <router-link to="/aromas" class="btn btn-link btn-block">
          <i class="fa fa-chevron-left"></i>
        </router-link>
      </div>
      <h5 class="header-title text-center">Edit aroma</h5>
      <div class="header-right"></div>
    </layout-header>
    <layout-content>
      <form role="form" class="form ember-view" v-on:submit="formSubmit(aroma)">
        <div class="form-group is-required ember-view">
          <label for="ember842-field" class="control-label">Vendor</label>
          <input v-model="aroma.vendor" placeholder="Vendor" type="text" id="ember842-field" class="form-control">
        </div>
        <div id="ember904" class="form-group is-required ember-view">
          <label for="ember904-field" class="control-label">Name</label>
          <input v-model="aroma.name" placeholder="Name" type="text" id="ember904-field" class="form-control">
        </div>
        <div id="ember910" class="form-group is-required ember-view">
          <label for="ember910-field" class="control-label  ">Volume</label>
          <input v-model="aroma.volume" placeholder="Volume" type="number" id="ember910-field" class="form-control">
        </div>

        <br>

        <button type="submit" id="ember916" class="btn btn-success btn-block ember-view">Save</button>
      </form>
    </layout-content>
  </div>
</template>

<script>
  import LayoutHeader from '@/components/non-routable/LayoutHeader';
  import LayoutContent from '@/components/non-routable/LayoutContent';

  export default {
    name: 'aromas-edit',
    components: {
      LayoutHeader,
      LayoutContent,
    },
    computed: {
      aroma() {
        const aromaId = this.$route.params.id;
        return this.$store.state.aromas.find(a => a['.key'] === aromaId);
      },
    },
    methods: {
      formSubmit(aroma) {
        return this.$store.dispatch('saveAroma', aroma).then(() => {
          this.$router.replace('/aromas');
        });
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
