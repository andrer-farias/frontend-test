<template>
  <div data-testid="input-container" class="input-container">
    <p data-testid="input-title" v-if="title"><strong>{{title}}</strong></p>
    <input :data-testid="'input-'+id" type="text" @keyup="onChangeValue" v-model="value" :placeholder="placeholder" :required="required" />
  </div>
</template>

<script>
  export default {
    name: 'TextInput',
    props: {
      id:{
        type: String,
        required: true,
      },
      placeholder:{
        type: String,
        required: true,
      },
      required: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        default: null,
      },
    },
    data(){
      return {
        value: "",
      }
    },
    methods: {
      onChangeValue: function() {
        const { id, value } = this
        this.$emit('onChange', id, value)
      },
    },
  }
</script>

<style scoped>
  input {
    width: 100%;
    border: 1px solid #d1d1d1; 
    border-radius: 5px;
    box-shadow: 1px 1px 2px 2px #e8eded;
    font-size: 15px;
    padding: 10px;
    text-transform: uppercase;
  }
  .input-container {
    padding-left: 15px;
    padding-right: 15px;
  }
  p {
    color: #b1b2b2;
    font-size: 12px;
    text-align: left;
  }
  ::placeholder {
    text-transform: initial;
    color: #d1d1d1;
  }
</style>
