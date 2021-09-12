import {mount} from '@vue/test-utils';
import {
	nextTick,
	ref,
} from 'vue';

import Input from './Input1';

describe.skip('', () => {
	test('', async () => {
		let wrapper = mount(Input);
		await nextTick();
		expect(wrapper.emitted('update:modelValue')).toBeFalsy();
	});
	test('', async () => {
		let valueRef = ref('a');
		let wrapper = mount(Input, {
			props: {modelValue: valueRef},
			attrs: {
				['onUpdate:modelValue'](value) {
					valueRef.value = value;
				},
			},
		});
		await nextTick();
		await wrapper.setProps({modelValue: 'b'});
		expect(wrapper.emitted('update:modelValue')).toEqual([['b']]);
	});
	test('', async () => {
		let wrapper = mount(Input);
		await nextTick();
		wrapper.vm.setValue('a');
		await nextTick();
		expect(wrapper.emitted('update:modelValue')).toEqual([['a']]);
	});
});
