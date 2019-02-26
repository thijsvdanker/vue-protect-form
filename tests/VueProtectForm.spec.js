import { shallowMount } from '@vue/test-utils';
import expect from 'expect';
import VueProtectForm from '../src/vue-protect-form.vue';

describe('VueProtectForm.vue', () => {
  it('it is not changed on render', () => {
    const wrapper = shallowMount(VueProtectForm, {
      slots: {
        default: '<form><input type="text"></form>'
      }
    });
    expect(wrapper.vm.isChanged).toBe(false);
  });

  it('changing the input sets isChanged', () => {
    const wrapper = shallowMount(VueProtectForm, {
      slots: {
        default: '<form><input type="text"></form>'
      }
    });

    const textInput = wrapper.find('input[type="text"]');
    textInput.setValue('fooo');

    expect(wrapper.vm.isChanged).toBe(true);
  });

  it('it does not track hidden elements by default', () => {
    const wrapper = shallowMount(VueProtectForm, {
      slots: {
        default: '<form><input type="hidden"></form>'
      }
    });

    const textInput = wrapper.find('input[type="hidden"]');
    textInput.setValue('fooo');

    expect(wrapper.vm.isChanged).toBe(false);
  });

  it('it tracks hidden elements when trackHiddenInputs is enabled', () => {
    const wrapper = shallowMount(VueProtectForm, {
      propsData: {
        trackHiddenInputs: true
      },
      slots: {
        default: '<form><input type="hidden"></form>'
      }
    });

    const textInput = wrapper.find('input[type="hidden"]');
    textInput.setValue('fooo');

    expect(wrapper.vm.isChanged).toBe(true);
  });

  it('it does not track password inputs by default', () => {
    const wrapper = shallowMount(VueProtectForm, {
      slots: {
        default: '<form><input type="password"></form>'
      }
    });

    const textInput = wrapper.find('input[type="password"]');
    textInput.setValue('fooo');

    expect(wrapper.vm.isChanged).toBe(false);
  });

  it('it tracks password inputs when trackPasswordInputs is enabled', () => {
    const wrapper = shallowMount(VueProtectForm, {
      propsData: {
        trackPasswordInputs: true
      },
      slots: {
        default: '<form><input type="password"></form>'
      }
    });

    const textInput = wrapper.find('input[type="password"]');
    textInput.setValue('fooo');

    expect(wrapper.vm.isChanged).toBe(true);
  });
});
