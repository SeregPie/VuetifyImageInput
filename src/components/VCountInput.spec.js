import {mount} from '@vue/test-utils';
import {nextTick} from 'vue';

import VCountInput from './VCountInput';

describe('VCountInput', () => {
	test('', async () => {
		let wrapper = mount(VCountInput);
		await nextTick();
		await wrapper.setProps({modelValue: 42});
		expect(wrapper.emitted('update:modelValue')).toBeFalsy();
	});
	test('', async () => {
		let wrapper = mount(VCountInput, {
			props: {modelValue: 42},
		});
		await nextTick();1
		wrapper.vm.increase();
		wrapper.vm.decrease();
		wrapper.vm.increase();
		await nextTick();
		expect(wrapper.emitted('update:modelValue')).toEqual([[43]]);
	});
	test('', async () => {
		let wrapper = mount(VCountInput, {
			props: {modelValue: 42},
		});
		await nextTick();
		wrapper.vm.increase();
		wrapper.vm.decrease();
		wrapper.vm.increase();
		await wrapper.setProps({modelValue: 42});
		await nextTick();
		expect(wrapper.emitted('update:modelValue')).toBeFalsy();
	});
});
