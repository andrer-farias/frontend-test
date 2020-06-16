import { shallowMount } from '@vue/test-utils'
import faker from 'faker'
import TextInput from '../TextInput.vue'

const props = {
  id: faker.random.uuid(),
  placeholder: faker.random.word(),
}

describe('TextInput.vue', () => {
  it('renders with required default props', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: props,
    })

    const inputTitle = wrapper
      .find('[data-testid="input-container"]')
      .find(`[data-testid="input-${props.id}"]`)

    expect(wrapper.props().id).toEqual(props.id)
    expect(wrapper.props().placeholder).toEqual(props.placeholder)
    expect(inputTitle.attributes('placeholder')).toEqual(props.placeholder)
  })

  it('renders with props.title when passed', () => {
    const title = faker.random.words(2)
    const wrapper = shallowMount(TextInput, {
      propsData: {
        ...props,
        title
      },
    })

    const inputTitle = wrapper
      .find('[data-testid="input-container"]')
      .find('[data-testid="input-title"]')
      .find('strong')

    expect(inputTitle.text()).toEqual(title)
  })

  it('renders without props.title', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: props,
    })

    const inputTitle = wrapper
      .find('[data-testid="input-container"]')
      .find('[data-testid="input-title"]')

    expect(inputTitle.element).toBeFalsy()
  })

  it('emits event when input changes', async () => {
    const inputValue = faker.random.word();
    const wrapper = shallowMount(TextInput, {
      propsData: props,
    })

    const input = wrapper
      .find('[data-testid="input-container"]')
      .find(`[data-testid="input-${props.id}"]`)
    
    input.setValue(inputValue)
    input.trigger('keyup')

    await wrapper.vm.$nextTick()
 
    const [event] = wrapper.emitted().onChange;
    expect(event).toEqual([props.id, inputValue])
  })
})