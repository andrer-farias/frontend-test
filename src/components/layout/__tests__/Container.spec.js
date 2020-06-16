import { shallowMount } from '@vue/test-utils'
import faker from 'faker'
import Container from '../Container.vue'

const title = faker.random.words(2);

describe('Container.vue', () => {
  it('renders with props.title', () => {
    const wrapper = shallowMount(Container, {
      propsData: {
        title,
      }
    });
    const container = wrapper.find('[data-testid="container-title"]')
    expect(wrapper.props().title).toEqual(title);
    expect(container.text()).toEqual(title);
  })
  it('renders slot within page-container', () => {
    const wrapper = shallowMount(Container, {
      slots: {
        default: '<div data-testid="slot"><span>message</span></div>'
      },
      propsData: {
        title,
      }
    });
    const slot = wrapper
      .find('[data-testid="page-container"]')
      .find('[data-testid="slot"]')
    expect(slot.element).toBeTruthy()
  })
})
