import frozenData from './frozenData';

export default function() {
	let data = frozenData();
	let {$options} = this;
	let {computed} = $options;
	Object.keys(data).forEach(key => {
		computed[key] = {
			get() {
				return data[key];
			},
			set(value) {
				data[key] = value;
			},
		};
	});
}
