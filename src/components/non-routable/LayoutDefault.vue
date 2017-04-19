<template>
  <div class="layout-default">
    <slot></slot>
    <vp-navigation></vp-navigation>
  </div>
</template>

<script>
  import VpNavigation from '@/components/non-routable/VpNavigation';
  import { mapState } from 'vuex';

  export default {
    name: 'LayoutDefault',
    components: {
      vpNavigation: VpNavigation,
    },
    computed: {
      ...mapState(['user']),
    },
  };
</script>

<style scoped lang="scss">
  @import '../../assets/styles/_variables.scss';
  @import '../../assets/styles/mixins/_mixins.scss';

  .layout-default {
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;
    position: relative;

    .container-fluid {
      overflow: hidden;

      @include size(100%, $layout-default-height);

      .liquid-container > .liquid-child > .liquid-container > .liquid-child {
        display: flex;
        flex-flow: column nowrap;
      }
    }
  }
</style>
