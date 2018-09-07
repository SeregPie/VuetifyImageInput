export default function($createElement) {
	let elementChildren = [this.createEditorElement()];
	let {image} = this;
	if (!image) {
		elementChildren.push(this.createUploaderElement());
	}
	return $createElement(
		'div',
		{
			style: {
				display: 'inline',
				position: 'relative',
			},
		},
		elementChildren,
	);
}
