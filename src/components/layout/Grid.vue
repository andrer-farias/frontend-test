<template>
  <div data-testid="grid-container" class="grid-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Grid',
}
</script>

<style>
  .grid-container {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    align-self: center;
    text-align: center;
  }
</style>