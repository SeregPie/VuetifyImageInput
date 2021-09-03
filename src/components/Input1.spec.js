import {mount} from '@vue/test-utils';
import {nextTick} from 'vue';

import Input from './Input1';

describe('', () => {
	test('', async () => {
		let wrapper = mount(Input);
		await nextTick();
		expect(wrapper.emitted('update:modelValue')).toBeFalsy();
	});
	test('', async () => {
		let wrapper = mount(Input, {
			props: {modelValue: 'a'}
		});
		await nextTick();
		await wrapper.setProps({modelValue: 'b'});
		expect(wrapper.emitted('update:modelValue')).toEqual([['b']]);
	});
});
