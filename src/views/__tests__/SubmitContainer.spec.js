import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import SubmitContainer from '../SubmitContainer.vue'

const localVue = createLocalVue();

localVue.use(Vuex)

describe('SubmitContainer.vue', () => {
  let actions = {}
  let store = {}
  beforeEach(() => {
    actions = {
      saveDeck: jest.fn(),
    }
    store = new Vuex.Store({ actions })
  });

  it('call "saveDeck" on submit form', async () => {
    const wrapper = mount(SubmitContainer, { store, localVue })
    const submitButton = wrapper.find('form')

    submitButton.trigger('submit')

    await wrapper.vm.$nextTick()

    expect(actions.saveDeck).toHaveBeenCalledTimes(1)
  })

  it('update "data.rotationCard" value on change rotation input', async () => {
    const wrapper = mount(SubmitContainer, { store, localVue })
    const rotationCardInput = wrapper.find('[data-testid="input-rotationCard"]')

    const inputValue = "2H"
    rotationCardInput.setValue(inputValue)
    rotationCardInput.trigger('keyup')

    await wrapper.vm.$nextTick()

    expect(wrapper.vm.$data.rotationCard.value).toEqual(inputValue)
  })

  it('update "data.deck" node value on change card input', async () => {
    const wrapper = mount(SubmitContainer, { store, localVue })
    
    const [firstInputData] = wrapper.vm.$data.deck
    const firstInputId = firstInputData.id
    const firstInputNewValue = '2C'
    const firstInput = wrapper.find(`[data-testid="input-${firstInputId}"]`)

    expect(wrapper.vm.$data.deck[0].value).toEqual(firstInputData.value)

    firstInput.setValue(firstInputNewValue)
    firstInput.trigger('keyup')
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.$data.deck[0].value).toEqual(firstInputNewValue)
  })
})
