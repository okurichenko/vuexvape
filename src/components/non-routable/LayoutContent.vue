<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script></script>

<style scoped lang="scss">
  @import '../../assets/styles/_variables.scss';
  @import '../../assets/styles/mixins/_mixins.scss';

  .container {
    overflow-x: hidden;
    overflow-y: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
    flex: 0 0 $layout-content-height;
    height: $layout-content-height;
  }
</style>
