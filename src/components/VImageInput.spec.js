import {mount} from '@vue/test-utils';
import {nextTick} from 'vue';

import VImageInput from './VImageInput';

describe('wyzpweob', () => {



	// change from dataURL to null: update:modelValue(null)
  // change from dataURL to '': update:modelValue(null)
	// change from dataURL to otherDataURL: update:modelValue(otherDataURL)
	// change from dataURL to ` ${dataURL} `: nothing
	// change from dataURL to invalidDataURL: error()
	//   to dataURL: nothing

	// change from null to dataURL to null: nothing
	// change from dataURL to null to dataURL: nothing

	// change from null to dataURL to invalidDataURL: error()
	// change from null to dataURL to otherDataURL: update:modelValue(otherDataURL)

	const dataURL = '123';
	const emptyDataURL = 'data:,';
	const otherDataURL = '321';
	const invalidDataURL = 'data:image/png;base64';
	test('create with null', async () => {
		const wrapper = mount(VImageInput);
		await nextTick(); // todo: await more
		expect(wrapper.emitted('load')).toBeFalsy();
		expect(wrapper.emitted('error')).toBeFalsy();
		expect(wrapper.emitted('update:modelValue')).toBeFalsy();
	});
	test('create with ``', async () => {
		const wrapper = mount(VImageInput, {
			props: {modelValue: ''},
		});
		await nextTick(); // todo: await more
		expect(wrapper.emitted('load')).toBeFalsy();
		expect(wrapper.emitted('error')).toBeFalsy();
		expect(wrapper.emitted('update:modelValue')).toHaveLength(1);
		expect(wrapper.emitted('update:modelValue')[0][0]).toBeNull();
	});
	test('create with dataURL', async () => {
		const wrapper = mount(VImageInput, {
			props: {modelValue: dataURL},
		});
		await nextTick(); // todo: await more
		expect(wrapper.emitted('load')).toHaveLength(1);
		expect(wrapper.emitted('error')).toBeFalsy();
		expect(wrapper.emitted('update:modelValue')).toBeFalsy();
	});
	test('create with ` ${dataURL} `', async () => {
		const wrapper = mount(VImageInput, {
			props: {modelValue: ` ${dataURL} `},
		});
		await nextTick(); // todo: await more
		expect(wrapper.emitted('error')).toBeFalsy();
		expect(wrapper.emitted('load')).toHaveLength(1);
		expect(wrapper.emitted('update:modelValue')).toHaveLength(1);
		expect(wrapper.emitted('update:modelValue')[0][0]).toBe(dataURL);
	});
	test('create with invalidDataURL', async () => {
		const wrapper = mount(VImageInput, {
			props: {modelValue: invalidDataURL},
		});
		await nextTick(); // todo: await more
		expect(wrapper.emitted('error')).toHaveLength(1);
		expect(wrapper.emitted('load')).toBeFalsy();
		expect(wrapper.emitted('update:modelValue')).toHaveLength(1);
		expect(wrapper.emitted('update:modelValue')[0][0]).toBeNull();
	});

		// : nothing
	// change from null to dataURL: load() + update:modelValue(dataURL)
	// change from null to ` ${dataURL} `: load() + update:modelValue(dataURL)
	// change from null to invalidDataURL: error()
	//   to null: nothing
	test(`change from null to ''`, async () => {
		const wrapper = mount(VImageInput);
		await nextTick(); // todo: await more
		await wrapper.setProps({modelValue: ''});
		expect(wrapper.emitted('error')).toHaveLength(1);
		expect(wrapper.emitted('load')).toBeFalsy();
		expect(wrapper.emitted('update:modelValue')).toHaveLength(1);
		expect(wrapper.emitted('update:modelValue')[0][0]).toBeNull();
	});
	test('ysrqprjs', async () => {
		const wrapper = mount(VImageInput);
		await nextTick(); // todo: await more
		console.log(wrapper.emitted());
		await wrapper.setProps({modelValue: null});
		console.log(wrapper.emitted());
		await wrapper.setProps({modelValue: ''});
		console.log(wrapper.emitted());
		await wrapper.setProps({modelValue: undefined});
		console.log(wrapper.emitted());
		/*console.log(wrapper.emitted('update:modelValue'));
		expect(wrapper.emitted('update:modelValue')).toBeUndefined();
		expect(wrapper.emitted('update:modelValue')[0][0]).toBeNull();
		await wrapper.setProps({
			modelValue: null,
		});
		await nextTick(); // todo: await more
		expect(wrapper.emitted('update:modelValue')).toHaveLength(1);
		expect(wrapper.emitted('update:modelValue')[1][0]).toBeNull();
		await wrapper.setProps({
			modelValue: '',
		});
		expect(wrapper.emitted('update:modelValue')).toHaveLength(2);
		expect(wrapper.emitted('update:modelValue')[1][0]).toBeNull();
		{
			const dataURL = 'abc';
			await wrapper.setProps({
				modelValue: dataURL,
			});
			await nextTick();
			expect(wrapper.emitted('update:modelValue')).toHaveLength(2);
			expect(wrapper.emitted('update:modelValue')[1][0]).toBe(dataURL);
			{
				await wrapper.setProps({
					modelValue: 'invalid',
				});
				await nextTick();
				expect(wrapper.emitted('update:modelValue')).toHaveLength(2);
				expect(wrapper.emitted('error')).toHaveLength(2);
			}
		}
		*/
	});
	/*test('qjeuvnlo', async () => {
		const dataURL;
		const wrapper = mount(VImageInput, {
			props: {}
		});
		await nextTick();
		expect(wrapper.emitted('update:modelValue')).toHaveLength(1);
		expect(wrapper.emitted('update:modelValue')[0][0]).toBeNull();
		await wrapper.vm.load(validFile);
		expect(wrapper.emitted()['load']).toHaveLength(1);
		expect(wrapper.emitted()['load'][0]).toEqual([]);
		await wrapper.vm.load(invalidFile);
		expect(wrapper.emitted()['error']).toHaveLength(2);
		expect(wrapper.emitted()['error'][0]).toEqual([]);
	});
	test('jndtyziu', async () => {
		const dataURL;
		const wrapper = mount(VImageInput, {
			props: {
				modelValue: dataURL,
			}
		});
		await wrapper.vm.load(validFile);
		expect(wrapper.emitted()).toHaveProperty('load');
		expect(wrapper.emitted()['load']).toHaveLength(2);
		expect(wrapper.emitted()['load'][0]).toEqual([]);
		await wrapper.vm.load(invalidFile);
		expect(wrapper.emitted()['error']).toHaveLength(2);
		expect(wrapper.emitted()['error'][0]).toEqual([]);
	});*/
});
