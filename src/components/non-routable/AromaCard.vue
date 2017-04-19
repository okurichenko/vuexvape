<template>
  <router-link tag="div" :to="{ name: 'aromas-edit', params: { id: aroma['.key'] }}" class="aroma-card well bg-primary well-sm">
    <div class="aroma-text">
      <div class="aroma-text-name">{{aroma.name}}</div>
      <div class="aroma-text-vendor">{{aroma.vendor}}</div>
    </div>
    <div class="aroma-volume">{{aroma.volume}}ml</div>
  </router-link>
</template>

<script>
  export default {
    name: 'aroma-card',
    props: ['aroma'],
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .aroma-card {
    background-color: #337ab7!important;
    &.well {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      background-color: #337ab7!important;
      align-items: center;

      .aroma-text {
        display: flex;
        flex-flow: column nowrap;

        &-vendor {
          font-size: 1.4rem;
          color: #bbb;
        }

        &-name {
          font-size: 2rem;
        }
      }

      .aroma-volume {
        font-size: 2.5rem;
      }
    }
  }

</style>
