import { shallowMount } from '@vue/test-utils'
import ContentInfo from '../ContentInfo.vue'

describe('ContentInfo.vue', () => {
  it('renders slot within grid-container', () => {
    const wrapper = shallowMount(ContentInfo, {
      slots: {
        default: '<div data-testid="slot"><span>message</span></div>'
      },
    });
    const slot = wrapper
      .find('[data-testid="content-info"]')
      .find('[data-testid="slot"]')

    expect(slot.element).toBeTruthy()
  })
})
