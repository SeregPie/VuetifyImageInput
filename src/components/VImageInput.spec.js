import {mount} from '@vue/test-utils';
import {nextTick} from 'vue';

import VImageInput from './VImageInput';

let sleep = (async(ms) => {
	await(new Promise(resolve => {
		setTimeout(resolve, ms);
	}));
});

describe('VImageInput', () => {
	let catImageDataURL = 'a';
	let dogImageDataURL = 'b';
	describe('', () => {
		test('', async () => {
			let wrapper = mount(VImageInput, {
				props: {modelValue: null},
			});
			await nextTick();
			await sleep(100);
			expect(wrapper.emitted('update:modelValue')).toBeFalsy();
		});
		test('', async () => {
			let wrapper = mount(VImageInput, {
				props: {modelValue: catImageDataURL},
			});
			await nextTick();
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
	describe('', () => {
		test('', async () => {
			let wrapper = mount(VImageInput);
			await nextTick();
			await sleep(100);
			await wrapper.setProps({modelValue: catImageDataURL});
			await sleep(100);
			expect(wrapper.emitted('update:modelValue')).toEqual([[catImageDataURL]]);
		});
		test('', async () => {
			let wrapper = mount(VImageInput);
			await nextTick();
			await sleep(100);
			await wrapper.setProps({modelValue: catImageDataURL});
			await sleep(100);
			await wrapper.setProps({modelValue: dogImageDataURL});
			await sleep(100);
			expect(wrapper.emitted('update:modelValue')).toEqual([
				[catImageDataURL],
				[dogImageDataURL],
			]);
		});
		test('', async () => {
			let wrapper = mount(VImageInput);
			await nextTick();
			await sleep(100);
			await wrapper.setProps({modelValue: catImageDataURL});
			await wrapper.setProps({modelValue: dogImageDataURL});
			await sleep(100);
			expect(wrapper.emitted('update:modelValue')).toEqual([[dogImageDataURL]]);
		});
	});
});

// wrapper.vm.rotateClockwise();

//

/*

---

---

init(a)
await
transform()
await
=> value: [a1]

init(a)
await
transform()
await
transform()
await
=> value: [a1, a2]

init(a)
await
transform()
transform()
await
=> value: [a2]

init(a)
await
transform()
await
setValue(a1)
await
=> value: [a1]

init(a)
await
transform()
setValue(b)
await
=> value: [b]

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
