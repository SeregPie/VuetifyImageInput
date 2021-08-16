import {mount, flushPromises} from '@vue/test-utils';
import {nextTick} from 'vue';

import VImageInput from './VImageInput';

describe('wyzpweob', () => {
	let imageDataURL = 'image_1';
	let emptyDataURL = 'data:,';
	let invalidDataURL = 'data:image/png;base64';
	// create with null => n/a
	test('xjofaiqq', async () => {
		let wrapper = mount(VImageInput);
		await flushPromises();
		expect(wrapper.emitted('error')).toBeFalsy();
		expect(wrapper.emitted('update:modelValue')).toBeFalsy();
	});
	// create with '' => update:modelValue(null)
	test('ouorphjl', async () => {
		let wrapper = mount(VImageInput, {
			props: {modelValue: ''}
		});
		await flushPromises();
		expect(wrapper.emitted('error')).toBeFalsy();
		expect(wrapper.emitted('update:modelValue')).toEqual([[null]]);
	});
	// create with emptyDataURL => update:modelValue(null)
	test('cpevayyw', async () => {
		let wrapper = mount(VImageInput, {
			props: {modelValue: emptyDataURL}
		});
		await flushPromises();
		expect(wrapper.emitted('error')).toBeFalsy();
		expect(wrapper.emitted('update:modelValue')).toEqual([[null]]);
	});
	// create with imageDataURL => n/a
	test('hhyqiqjx', async () => {
		let wrapper = mount(VImageInput, {
			props: {modelValue: imageDataURL}
		});
		await flushPromises();
		expect(wrapper.emitted('error')).toBeFalsy();
		expect(wrapper.emitted('update:modelValue')).toBeFalsy();
	});
	// create with ` ${imageDataURL} ` => update:modelValue(imageDataURL)
	test('ttucbinz', async () => {
		let wrapper = mount(VImageInput, {
			props: {modelValue: ` ${imageDataURL} `}
		});
		await flushPromises();
		expect(wrapper.emitted('error')).toBeFalsy();
		expect(wrapper.emitted('update:modelValue')).toEqual([[imageDataURL]]);
	});
	// create with invalidDataURL => error & update:modelValue(null)
	test('lgjkkfjc', async () => {
		let wrapper = mount(VImageInput, {
			props: {modelValue: invalidDataURL}
		});
		await flushPromises();
		expect(wrapper.emitted('error')).toHaveLength(1);
		expect(wrapper.emitted('update:modelValue')).toEqual([[null]]);
	});
	// change from null to '' => n/a
	test('wqipnkbt', async () => {
		let wrapper = mount(VImageInput);

	});
	// change from null to imageDataURL => update:modelValue(imageDataURL)
	test('mvwywecl', async () => {
		let wrapper = mount(VImageInput);

	});
	// change from null to invalidDataURL => error
	//   to null => n/a
	test('mmajazbi', async () => {
		let wrapper = mount(VImageInput);

	});
	// change from imageDataURL to null => update:modelValue(null)
	test('iarpugjo', async () => {
		let wrapper = mount(VImageInput);

	});
	// change from imageDataURL to otherImageDataURL => update:modelValue(otherImageDataURL)
	test('hljuxyqd', async () => {
		let wrapper = mount(VImageInput);

	});
	// change from imageDataURL to ` ${imageDataURL} ` => nothing
	test('fitmeuav', async () => {
		let wrapper = mount(VImageInput);

	});
	// change from imageDataURL to invalidDataURL => error
	//   to imageDataURL => n/a
	test('vzziykzk', async () => {
		let wrapper = mount(VImageInput);

	});
	// change from null to imageDataURL to null: nothing
	test('iptzvtbn', async () => {
		let wrapper = mount(VImageInput);

	});
	// change from imageDataURL to null to imageDataURL: nothing
	test('zjhftwgm', async () => {
		let wrapper = mount(VImageInput);

	});
	// change from null to imageDataURL to invalidDataURL: error()
	test('fksmtlbo', async () => {
		let wrapper = mount(VImageInput);

	});
	// change from null to invalidDataURL to imageDataURL: update:modelValue(imageDataURL)
	test('nratnsqi', async () => {
		let wrapper = mount(VImageInput);

	});




	/*let dataURL = '123';
	let emptyDataURL = 'data:,';
	let otherDataURL = '321';
	let invalidDataURL = 'data:image/png;base64';
	test('create with null', async () => {
		let wrapper = mount(VImageInput);
		await nextTick(); // todo: await more
		expect(wrapper.emitted('load')).toBeFalsy();
		expect(wrapper.emitted('error')).toBeFalsy();
		expect(wrapper.emitted('update:modelValue')).toBeFalsy();
	});
	test('create with ``', async () => {
		let wrapper = mount(VImageInput, {
			props: {modelValue: ''},
		});
		await nextTick(); // todo: await more
		expect(wrapper.emitted('load')).toBeFalsy();
		expect(wrapper.emitted('error')).toBeFalsy();
		expect(wrapper.emitted('update:modelValue')).toHaveLength(1);
		expect(wrapper.emitted('update:modelValue')[0][0]).toBeNull();
	});
	test('create with dataURL', async () => {
		let wrapper = mount(VImageInput, {
			props: {modelValue: dataURL},
		});
		await nextTick(); // todo: await more
		expect(wrapper.emitted('load')).toHaveLength(1);
		expect(wrapper.emitted('error')).toBeFalsy();
		expect(wrapper.emitted('update:modelValue')).toBeFalsy();
	});
	test('create with ` ${dataURL} `', async () => {
		let wrapper = mount(VImageInput, {
			props: {modelValue: ` ${dataURL} `},
		});
		await nextTick(); // todo: await more
		expect(wrapper.emitted('error')).toBeFalsy();
		expect(wrapper.emitted('load')).toHaveLength(1);
		expect(wrapper.emitted('update:modelValue')).toHaveLength(1);
		expect(wrapper.emitted('update:modelValue')[0][0]).toBe(dataURL);
	});
	test('create with invalidDataURL', async () => {
		let wrapper = mount(VImageInput, {
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
		let wrapper = mount(VImageInput);
		await nextTick(); // todo: await more
		await wrapper.setProps({modelValue: ''});
		expect(wrapper.emitted('error')).toHaveLength(1);
		expect(wrapper.emitted('load')).toBeFalsy();
		expect(wrapper.emitted('update:modelValue')).toHaveLength(1);
		expect(wrapper.emitted('update:modelValue')[0][0]).toBeNull();
	});
	test('ysrqprjs', async () => {
		let wrapper = mount(VImageInput);
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
			let dataURL = 'abc';
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
	});
	test('qjeuvnlo', async () => {
		let dataURL;
		let wrapper = mount(VImageInput, {
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
		let dataURL;
		let wrapper = mount(VImageInput, {
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
