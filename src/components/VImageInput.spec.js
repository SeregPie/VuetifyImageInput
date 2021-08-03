import {mount} from '@vue/test-utils';
import {nextTick} from 'vue';

import VImageInput from './VImageInput';

describe('VImageInput', () => {
	test('1', async () => {
		let wrapper = mount(VImageInput, {
			props: {}
		});
		await wrapper.vm.load(validFile);
		expect(wrapper.emitted()).toHaveProperty('load');
		expect(wrapper.emitted()['load']).toHaveLength(2);
		expect(wrapper.emitted()['load'][0]).toEqual([]);
		await wrapper.vm.load(invalidFile);
		expect(wrapper.emitted()['error']).toHaveLength(2);
		expect(wrapper.emitted()['error'][0]).toEqual([]);
	});
});
