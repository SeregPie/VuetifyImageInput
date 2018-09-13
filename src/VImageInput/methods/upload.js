import PaperDuck from 'paperduck';

import Function_noop from '/utils/Function/noop';

export default function(image) {
	PaperDuck
		.load(image)
		.then(image => {
			this.image = image.cover(this.imageWidth, this.imageHeight);
		})
		.catch(Function_noop);
}
