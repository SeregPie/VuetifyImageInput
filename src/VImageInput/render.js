export default function($createElement) {
	let {
		editorElement,
		image,
	} = this;
	if (image) {
		return editorElement;
	}
	let {uploaderElement} = this;
	let editorWrapperElement = $createElement(
		'div',
		{
			style: {
				visibility: 'hidden',
			},
		},
		[editorElement],
	);
	let wrapperElement = $createElement(
		'div',
		{
			style: {
				display: 'inline',
				position: 'relative',
			},
		},
		[
			editorWrapperElement,
			uploaderElement,
		],
	);
	return wrapperElement;
}
