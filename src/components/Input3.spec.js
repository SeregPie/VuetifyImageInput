import {mount} from '@vue/test-utils';
import {nextTick} from 'vue';

import Input from './Input3';

let sleep = (async (ms) => {
	await (new Promise(resolve => {
		setTimeout(resolve, ms);
	}));
});

describe('', () => {
	let imageDataURL = 'a';
	let otherImageDataURL = 'b';
	test('', async () => {
		let wrapper = mount(Input);
		await nextTick();
		await sleep(11);
		expect(wrapper.emitted('update:modelValue')).toBeFalsy();
	});
	test('', async () => {
		let wrapper = mount(Input, {
			props: {modelValue: imageDataURL}
		});
		await nextTick();
		await sleep(11);
		await wrapper.setProps({modelValue: otherImageDataURL});
		await sleep(11);
		expect(wrapper.emitted('update:modelValue')).toEqual([[otherImageDataURL]]);
	});
	test('', async () => {
		let wrapper = mount(Input);
		await nextTick();
		await sleep(11);
		wrapper.vm.setValue(imageDataURL);
		await nextTick();
		await sleep(11);
		expect(wrapper.emitted('update:modelValue')).toEqual([[imageDataURL]]);
	});
	test('', async () => {
		let wrapper = mount(Input, {
			props: {modelValue: imageDataURL}
		});
		await nextTick();
		await sleep(11);
		wrapper.vm.transformImage('a');
		await sleep(11);
		expect(wrapper.emitted('update:modelValue')).toEqual([[imageDataURL + 'a']]);
	});
});
