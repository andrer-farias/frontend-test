import { shallowMount } from '@vue/test-utils'
import Box from '../Box.vue'

describe('Box.vue', () => {
  it('renders container with default size class when props.size is not passed', () => {
    const wrapper = shallowMount(Box);
    const container = wrapper.find('[data-testid="box-content"]')
    expect(container.element.className).toContain('size-2')
  })
  it('renders container with props.size class when passed', () => {
    const size = '5';
    const wrapper = shallowMount(Box, {
      propsData:{
        size,
      },
    });
    const container = wrapper.find('[data-testid="box-content"]')
    expect(container.element.className).toContain(`size-${size}`)
  })
  it('renders with slot when passed', () => {
    const wrapper = shallowMount(Box, {
      slots: {
        default: '<div data-testid="slot"><span>message</span></div>'
      }
    });
    const slot = wrapper.find('[data-testid="slot"]')
    expect(slot.element).toBeTruthy()
  })
})
