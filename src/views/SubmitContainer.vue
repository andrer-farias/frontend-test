<template>
  <Container title="CARDS">
    <form @submit.prevent="handleSubmit">
      <Grid>
        <Box v-for="cardInput in deck" :key="cardInput.id" size="2">
          <TextInput
            v-bind:id="cardInput.id.toString()"
            v-bind:title="'CARD '+cardInput.id"
            v-bind:error="cardInput.error"
            placeholder="Enter card"
            @onChange="handleChange"
          />
        </Box>
      </Grid>
      <Grid>
        <Box size="2" />
        <Box size="2" id="rotation-input-title">
          <h2>Rotation Card</h2>
        </Box>
        <Box size="2" id="rotation-input-box">
          <TextInput
            id="rotationCard"
            v-bind:error="rotationCard.error"
            placeholder="Enter card"
            @onChange="handleRotationCardChange"
          />
        </Box>
      </Grid>
      <footer id="page-footer">
        <button data-testid="submit-form" type="submit">Submit</button>
      </footer>
    </form>
  </Container>
</template>

<script>
  import TextInput from '../components/inputs/TextInput'
  import Container from '../components/layout/Container'
  import Grid from '../components/layout/Grid'
  import Box from '../components/layout/Box'
  import { mapActions } from 'vuex'
  import { DECK_VIEW } from '../constants/routes'

  export default {
    name: 'SubmitContainer',
    components: {
      TextInput,
      Container,
      Grid,
      Box
    },
    data(){
      return {
        deck: [
          { id: 1, value: null },
          { id: 2, value: null },
          { id: 3, value: null },
          { id: 4, value: null },
          { id: 5, value: null },
          { id: 6, value: null },
          { id: 7, value: null },
          { id: 8, value: null },
          { id: 9, value: null },
          { id: 10, value: null },
        ],
        rotationCard: { value: null },
      }
    },
    methods: {
      ...mapActions(['saveDeck']),
      handleChange(id, value) {
        const index = this.deck.findIndex(v => v.id.toString() === id)
        this.deck[index] = {
          id,
          value: value && value.toUpperCase(),
        }
      },
      handleRotationCardChange(id, value){
        this.rotationCard.value = value
      },
      redirectToDeckView(deckId){
        this.$router.push({ name: DECK_VIEW, params: { id: deckId }})
      },
      handleSubmit(){
        this.saveDeck({
          deck: this.deck.filter(({ value }) => value).map(({ value }) => value),
          rotationCard: this.rotationCard.value,
          onSuccess: this.redirectToDeckView
        })
      },
    },
  }
</script>

<style scoped>
  footer {
    text-align: center;
    padding-bottom: 40px;
  }

  footer button {
    font-size: 20px;
    padding: 10px 30px 10px 30px;
    border-radius: 10px;
    color: yellow;
    background-color: blue;
    font-weight: 600;
  }

  #rotation-input-title {
    text-align:right;
  }

  #rotation-input-box {
    margin-top:28px;
  }
</style>