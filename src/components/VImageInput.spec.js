import {mount} from '@vue/test-utils';
import {nextTick} from 'vue';

import VImageInput from './VImageInput';

describe('wyzpweob', () => {
	// create with null
	// create with nullish
	// create with valid dataURL
	// create with invalid dataURL

	// change from nullish to null
	// change from nullish to valid
	// change from nullish to invalid
	// change from valid to null
	// change from valid to nullish
	// change from valid to invalid
	// change from invalid to null
	// change from invalid to nullish
	// change from invalid to valid
	test('ysrqprjs', async () => {
		let wrapper = mount(VImageInput);
		await nextTick(); // todo: await more
		console.log(wrapper.emitted());
		console.log(wrapper.emitted('update:modelValue'));
		expect(wrapper.emitted('update:modelValue')).toBeUndefined();
		expect(wrapper.emitted('update:modelValue')[0][0]).toBeNull();
		/*await wrapper.setProps({
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
		*/
	});
	/*test('qjeuvnlo', async () => {
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
