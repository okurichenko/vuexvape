<template>
  <div class="header container">
    <slot></slot>
  </div>
</template>

<script></script>

<style scoped lang="scss">
  @import '../../assets/styles/_variables.scss';
  @import '../../assets/styles/mixins/_mixins.scss';

  .header {
    align-items: center;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex: 0 0 $layout-header-height;
    flex-flow: row nowrap;
    height: $layout-header-height;
    padding-bottom: 1rem;
    padding-top: .5rem;

    .header-left, .header-right {
      flex: 0 0 10%;
      width: 10%;
    }

    .header-title {
      flex: 0 0 80%;
      width: 80%;
    }
  }
</style>
