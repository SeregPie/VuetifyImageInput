import {mount} from '@vue/test-utils';
import {nextTick} from 'vue';

import sleep from '../utils/sleep';
import VImageInput from './VImageInput';

describe.skip('VImageInput', () => {
	let catImageDataURL = 'a';
	let dogImageDataURL = 'b';
	describe('', () => {
		test('', async () => {
			let wrapper = mount(VImageInput, {
				props: {modelValue: catImageDataURL},
			});
			await nextTick();
			await sleep(100);
			await wrapper.setProps({modelValue: null});
			await sleep(100);
			await wrapper.setProps({modelValue: catImageDataURL});
			await sleep(100);
			expect(wrapper.emitted('update:modelValue')).toBeFalsy();
		});
		test.each([
			'',
			' ',
			// emptyDataURL,
		])(' ', async (value) => {
			let wrapper = mount(VImageInput, {
				props: {modelValue: value},
			});
			await nextTick();
			await sleep(100);
			expect(wrapper.emitted('update:modelValue')).toEqual([[null]]);
		});
		test.each([
			` ${catImageDataURL} `,
		])(' ', async (value) => {
			let wrapper = mount(VImageInput, {
				props: {modelValue: value},
			});
			await nextTick();
			await sleep(100);
			expect(wrapper.emitted('update:modelValue')).toEqual([[catImageDataURL]]);
		});
	});
	describe.skip('', () => {
		test('', async () => {
			let wrapper = mount(VImageInput, {
				props: {modelValue: catImageDataURL},
			});
			await nextTick();
			await sleep(100);
			wrapper.vm.rotateClockwise();
			await sleep(100);
			expect(wrapper.emitted('update:modelValue')).toEqual([[`${catImageDataURL}1`]]);
		});
		test('', async () => {
			let wrapper = mount(VImageInput, {
				props: {modelValue: catImageDataURL},
			});
			await nextTick();
			await sleep(100);
			wrapper.vm.rotateClockwise();
			await sleep(100);
			wrapper.vm.rotateClockwise();
			await sleep(100);
			expect(wrapper.emitted('update:modelValue')).toEqual([
				[`${catImageDataURL}1`],
				[`${catImageDataURL}2`],
			]);
		});
		test('', async () => {
			let wrapper = mount(VImageInput, {
				props: {modelValue: catImageDataURL},
			});
			await nextTick();
			await sleep(100);
			wrapper.vm.rotateClockwise();
			wrapper.vm.rotateClockwise();
			await sleep(100);
			expect(wrapper.emitted('update:modelValue')).toEqual([[`${catImageDataURL}2`]]);
		});
		test('', async () => {
			let wrapper = mount(VImageInput, {
				props: {modelValue: catImageDataURL},
			});
			await nextTick();
			await sleep(100);
			wrapper.vm.rotateClockwise();
			await sleep(100);
			await wrapper.setProps({modelValue: `${catImageDataURL}1`});
			await sleep(100);
			expect(wrapper.emitted('update:modelValue')).toEqual([[`${catImageDataURL}1`]]);
		});
		test('', async () => {
			let wrapper = mount(VImageInput, {
				props: {modelValue: catImageDataURL},
			});
			await nextTick();
			await sleep(100);
			wrapper.vm.rotateClockwise();
			await wrapper.setProps({modelValue: dogImageDataURL});
			await sleep(100);
			expect(wrapper.emitted('update:modelValue')).toEqual([[dogImageDataURL]]);
		});
	});
});


/*



---

init(a)
await
transform()
await
reset()
await
=> value: [a1, a]

init(a)
await
transform()
reset()
await
=> value: []

test('', async () => {
	let wrapper = mount(VImageInput, {
		props: {modelValue: ` ${catImageDataURL} `},
	});
	await nextTick();
	await sleep(100);
	expect(wrapper.emitted('update:modelValue')).toEqual([[catImageDataURL]]);
});
test('', async () => {
	let wrapper = mount(VImageInput, {
		props: {modelValue: catImageDataURL},
	});
	await nextTick();
	await sleep(100);
	await wrapper.setProps({modelValue: dogImageDataURL});
	await sleep(100);
	expect(wrapper.emitted('update:modelValue')).toEqual([[dogImageDataURL]]);
});
test('', async () => {
	let wrapper = mount(VImageInput, {
		props: {modelValue: catImageDataURL},
	});
	await nextTick();
	await sleep(100);
	wrapper.vm.transformImage('a');
	await nextTick();
	await sleep(100);
	expect(wrapper.emitted('update:modelValue')).toEqual([[catImageDataURL + 'a']]);
});
test('', async () => {
	let wrapper = mount(VImageInput, {
		props: {modelValue: catImageDataURL},
	});
	await nextTick();
	await sleep(100);
	wrapper.vm.transformImage('a');
	await nextTick();
	await sleep(100);
	await wrapper.setProps({modelValue: catImageDataURL + 'a'});
	await sleep(100);
	expect(wrapper.emitted('update:modelValue')).toEqual([[catImageDataURL + 'a']]);
});
test('', async () => {
	let wrapper = mount(VImageInput, {
		props: {modelValue: catImageDataURL},
	});
	await nextTick();
	await wrapper.setProps({modelValue: dogImageDataURL});
	await wrapper.setProps({modelValue: catImageDataURL});
	await sleep(100);
	expect(wrapper.emitted('update:modelValue')).toBeFalsy();
});
*/
