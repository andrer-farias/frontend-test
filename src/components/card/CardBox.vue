<template>
  <Box class="card-box">
    <div data-testid="card-header" class="card-header">
      <div data-testid="card-header-rank" class="card-rank">{{getCodeValue}}</div>
      <img data-testid="card-header-suit" :alt="card.suit" :src="require(`@/assets/cards/${card.suit}.png`)" />
    </div>
    <div data-testid="card-footer" class="card-footer reverse">
      <img data-testid="card-footer-suit" :alt="card.suit" :src="require(`@/assets/cards/${card.suit}.png`)" />
      <div data-testid="card-footer-rank" class="card-rank">{{getCodeValue}}</div>
    </div>
  </Box>
</template>

<script>
import Box from '../layout/Box'
import { valueFromString } from '../../services/cards'

export default {
  name: 'CardBox',
  components: {
    Box
  },
  props: {
    card: {
      type: Object,
      required: true,
    }
  },
  computed:{
    getCodeValue: function(){
      return valueFromString(this.card.code)
    },
  },
}
</script>

<style scoped>
  .card-box {
    position: relative;
    background-color: white;
    height: 250px;
    border-radius: 15px;
    margin-left: 10px;
    margin-right: 25px;
    box-shadow:  3px 3px 8px 3px #a493ae;
  }
  .card-header {
    display: flex;
    text-align: left;
    padding-left: 15px;
    margin-top: 0px;
    position: absolute;
    top: 0;
    left: 0;
    padding: 15px;
  }
  .card-rank {
    font-size: 30px;
  }
  .card-header img {
    margin-left: 10px;
  }
  .card-footer {
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 15px;
  }
  .card-footer img {
    margin-right: 10px;
  }
  img {
    width: 24px;
    height: 30px;
  }
  .reverse {
    transform: rotate(180deg);
  }
</style>