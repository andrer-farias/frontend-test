import { shallowMount } from '@vue/test-utils'
import CardBox from '../CardBox.vue'
import suits from '../../../constants/suits'
import values from '../../../constants/values'

const HEARTS = suits.find(suit => suit.name === 'HEARTS')
const ACE = values.find(value => value.name === 'ACE')
const AH = `${ACE.id}${HEARTS.id}`;

const card = {
  code: AH,
  suit: HEARTS.name
}

describe('Grid.vue', () => {
  it('renders with card header and footer', () => {
    const wrapper = shallowMount(CardBox, {
      propsData: {
        card
      }
    });

    const cardHeader = wrapper.find('[data-testid="card-header"]')
    const cardHeaderRank = cardHeader.find('[data-testid="card-header-rank"]')
    const cardHeaderSuit = cardHeader.find('[data-testid="card-header-suit"]')

    const cardFooter = wrapper.find('[data-testid="card-footer"]')
    const cardFooterRank = cardFooter.find('[data-testid="card-footer-rank"]')
    const cardFooterSuit = cardFooter.find('[data-testid="card-footer-suit"]')

    expect(cardHeaderRank.text()).toEqual(ACE.id)
    expect(cardHeaderSuit.attributes('alt')).toEqual(HEARTS.name)

    expect(cardFooter.element.className).toContain('reverse')
    expect(cardFooterRank.text()).toEqual(ACE.id)
    expect(cardFooterSuit.attributes('alt')).toEqual(HEARTS.name)
  })
})
