import { shallowMount } from '@vue/test-utils'
import Grid from '../Grid.vue'

describe('Grid.vue', () => {
  it('renders slot within content-info', () => {
    const wrapper = shallowMount(Grid, {
      slots: {
        default: '<div data-testid="slot"><span>message</span></div>'
      },
    });
    const slot = wrapper
      .find('[data-testid="grid-container"]')
      .find('[data-testid="slot"]')

    expect(slot.element).toBeTruthy()
  })
})
