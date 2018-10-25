import ZingTouch from 'zingtouch';

let zt;

export default {
	bind(el, {value}) {
		if (!zt) {
			zt = new ZingTouch.Region(document.body);
		}
		zt.bind(el, 'pan', ({detail: {data, events}}) => {
			value(data, ...events);
		});
	},

	unbind(el) {
		zt.unbind(el, 'pan');
	},
};
