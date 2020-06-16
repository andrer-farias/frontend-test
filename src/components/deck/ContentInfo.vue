<template>
  <div data-testid="content-info" class="content-info">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ContentInfo',
}
</script>

<style scoped>
  .content-info {
    padding-top: 20px;
  }
</style>