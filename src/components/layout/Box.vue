<template>
  <div data-testid="box-content" :class="'box size-'+size">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Box',
  props: {
    size: {
      type: String,
      default: '2',
    }
  }
}
</script>

<style>
  :root {
    --margin: 3px;
  }

  .box {
    border-radius: 5px;
    margin: var(--margin);
    height: 50px;
    padding-top: 20px;
    margin-top: 20px;
  }

  .size-1 {
    width: calc((100%/10) - (var(--margin)* 3));
  }

  .size-2 {
    width: calc((100%/5) - (var(--margin)* 2));
  }

</style>