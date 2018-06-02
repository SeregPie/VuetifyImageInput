import PaperDuck from 'paperduck';

export default function() {
	let input = document.createElement('input');
	input.type = 'file';
	input.addEventListener('change', () => {
		PaperDuck.load(input).then(instance => {
			this.internalValue = instance.contain(this.imageWidth, this.imageHeight).toDataURL('image/png');
		});
	});
	input.click();
}
