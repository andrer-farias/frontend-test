import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import faker from 'faker'
import suits from '../../constants/suits'
import values from '../../constants/values'
import DeckList from '../DeckList.vue'

const HEARTS = suits.find(suit => suit.name === 'HEARTS')
const ACE = values.find(value => value.name === 'ACE')
const AH = `${ACE.id}${HEARTS.id}`;

const deckId = faker.random.uuid();

const route = {
  params: {
    id: deckId,
  }
}

const card = {
  code: AH,
  suit: HEARTS.name
}
const highCard = '2C'
const fullHouseCombinations = ['2C, 2H, 2D, AC, AS']

const localVue = createLocalVue()
localVue.use(Vuex)

describe('DeckList.vue', () => {
  let state = {}
  let actions = {}
  let getters = {}
  let store = {}

  describe('with full house combos', () => {
    beforeEach(() => {
      state = {
        cards: [card, card],
      }
      actions = {
        loadDeck: jest.fn(),
      }
      getters = {
        highCard: () => highCard,
        getFullHouseCombinations: () => fullHouseCombinations
      }

      store = new Vuex.Store({ actions, state, getters })
    })

    it('render with all properties', () => {
      const wrapper = mount(DeckList, { store, localVue, mocks: { $route: route } })

      const cards = wrapper.findAll('[data-testid="box-content"]')
      const contentInfo = wrapper.findAll('[data-testid="content-info"]')
      const highCardElement = contentInfo.at(0)
      const fullHouseElement = contentInfo.at(1)

      const fullHouseCombos = fullHouseElement.findAll('p');
      const firstFullHouse = fullHouseCombos.at(0)

      expect(cards.length).toEqual(state.cards.length)
      expect(highCardElement.text()).toContain(highCard);
      expect(fullHouseCombos.length).toEqual(fullHouseCombinations.length);
      expect(firstFullHouse.text()).toEqual(fullHouseCombinations[0])
    })
  })

  describe('without full house combos', () => {
    beforeEach(() => {
      state = {
        cards: [card, card],
      }
      actions = {
        loadDeck: jest.fn(),
      }
      getters = {
        highCard: () => highCard,
        getFullHouseCombinations: () => []
      }

      store = new Vuex.Store({ actions, state, getters })
    })

    it('render with all properties', () => {
      const wrapper = mount(DeckList, { store, localVue, mocks: { $route: route } })

      const cards = wrapper.findAll('[data-testid="box-content"]')
      const contentInfo = wrapper.findAll('[data-testid="content-info"]')
      const highCardElement = contentInfo.at(0)
      const fullHouseElement = contentInfo.at(1)

      const fullHouseCombos = fullHouseElement.findAll('p');

      expect(cards.length).toEqual(state.cards.length)
      expect(highCardElement.text()).toContain(highCard);
      expect(fullHouseCombos.length).toEqual(0);
      expect(fullHouseElement.text()).toContain('None')
    })
  })
})
