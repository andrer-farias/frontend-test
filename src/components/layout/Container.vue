<template>
  <div data-testid="page-container" id="page-container">
    <nav>
      <h1 data-testid="container-title">{{title}}</h1>
    </nav>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    title: {
      type: String,
      required: true,
    }
  }
}
</script>

<style>
  nav {
    background-color:green;
    text-align: center;
    padding: 2px;
    color: yellow;
    font-size: 30px;
    margin: -8px;
  };

  .content-wrap {
    padding-bottom: 2.5rem;
  }

  #page-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
  }

  #page-container {
    text-align: center;
    align-items: center;
    align-content: center;
    align-self: center;
  }
</style>