<template>
  <Container title="Ordered Pile">
    <div class="deck-content">
      <Grid>
        <CardBox
          v-for="(card, index) in cards" :key="index"
          :card="card"
        />
      </Grid>
    </div>
    <ContentInfo v-show="highCard">
      <strong>High Card:</strong> {{highCard}}
    </ContentInfo>
    <ContentInfo>
      <strong>Full House Combo:</strong> <span v-if="!hasFullHouseCombinations">None</span>
      <p v-for="combination in getFullHouseCombinations" :key="combination">
        {{combination}}
      </p>
    </ContentInfo>
  </Container>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import Container from '../components/layout/Container'
import Grid from '../components/layout/Grid'
import CardBox from '../components/card/CardBox'
import ContentInfo from '../components/deck/ContentInfo'

export default {
  components: {
    Container,
    Grid,
    CardBox,
    ContentInfo
  },
  mounted(){
    this.loadDeck({ id: this.id });
  },
  computed: {
    ...mapState({
      cards: state => state.cards,
    }),
    ...mapGetters(['highCard', 'getFullHouseCombinations']),
    id: function(){
      return this.$route.params.id
    },
    hasFullHouseCombinations: function(){
      return this.getFullHouseCombinations.length > 0
    }
  },
  methods: mapActions(['loadDeck']),
}
</script>

<style>
  .deck-content {
    margin: 20px;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 20px;
    background-color: #d8d8d8;
    border: 1px solid #979797;
    align-self: center;
  }
</style>