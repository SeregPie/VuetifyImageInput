import PaperDuck from 'paperduck';

import Function_noop from '/utils/Function/noop';

export default function() {
	let input = document.createElement('input');
	input.type = 'file';
	input.addEventListener('change', () => {
		PaperDuck
			.load(input)
			.then(image => {
				this.image = image.scaleMin(this.imageWidth, this.imageHeight);
			})
			.catch(Function_noop);
	});
	input.click();
}
