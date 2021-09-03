import {mount} from '@vue/test-utils';
import {nextTick} from 'vue';

import Input from './Input2';

describe('', () => {
	test('', async () => {
		let wrapper = mount(Input);
		await nextTick();
		expect(wrapper.emitted('update:modelValue')).toBeFalsy();
	});
	test('', async () => {
		let wrapper = mount(Input, {
			props: {modelValue: 10}
		});
		await nextTick();
		await wrapper.setProps({modelValue: 20});
		expect(wrapper.emitted('update:modelValue')).toEqual([[20]]);
	});
	test('', async () => {
		let wrapper = mount(Input, {
			props: {
				max: 10,
				modelValue: 20,
			},
			attrs: {
				['onUpdate:modelValue'](value) {
					console.log('HEY', value);
				},
			},
		});
		await nextTick();
		expect(wrapper.emitted('update:modelValue')).toEqual([[10]]);
	});
	test('', async () => {
		let wrapper = mount(Input, {
			props: {
				max: 10,
				modelValue: 10,
			},
		});
		await nextTick();
		await wrapper.setProps({modelValue: 20});
		expect(wrapper.emitted('update:modelValue')).toBeFalsy();
	});
	test('', async () => {
		let wrapper = mount(Input, {
			props: {modelValue: 20},
		});
		await nextTick();
		await wrapper.setProps({max: 10});
		expect(wrapper.emitted('update:modelValue')).toEqual([[10]]);
	});
	test('', async () => {
		let wrapper = mount(Input);
		await nextTick();
		wrapper.vm.setValue(10);
		await nextTick();
		expect(wrapper.emitted('update:modelValue')).toEqual([[10]]);
	});
	test('', async () => {
		let wrapper = mount(Input, {
			props: {max: 10},
		});
		await nextTick();
		wrapper.vm.setValue(100);
		await nextTick();
		expect(wrapper.emitted('update:modelValue')).toEqual([[10]]);
	});
});
