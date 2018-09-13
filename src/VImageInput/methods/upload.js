import PaperDuck from 'paperduck';

import Function_noop from '/utils/Function/noop';

export default function(data) {
	PaperDuck
		.load(data)
		.then(({width, height}) => {
			if (width && height) {
				this.originalImage = {
					data,
					flipHorizontally: false,
					flipVertically: false,
					height,
					rotate: 0,
					width,
				};
			}
		})
		.catch(Function_noop);
}
