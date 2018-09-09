export default function($createElement) {
	let {
		borderColor,
		image,
	} = this;
	let elementChildren = [];
	let editorWrapperElementOptions = {
		style: {},
	};
	let editorElement;
	let pushEditorWrapperElement = (() => {
		elementChildren.push($createElement(
			'div',
			editorWrapperElementOptions,
			[editorElement],
		));
	});
	if (image) {
		editorElement = this.createEditorElement($createElement, image);
		pushEditorWrapperElement();
	} else {
		editorElement = this.createEditorElement($createElement);
		Object.assign(editorWrapperElementOptions.style, {
			opacity: 0,
			visibility: 'hidden',
		});
		pushEditorWrapperElement();
		elementChildren.push(this.createUploaderElement($createElement));
	}
	return $createElement(
		'div',
		{
			class: 'transition-swing',
			style: {
				border: `2px solid ${borderColor}`,
				borderRadius: '4px',
				display: 'inline',
				position: 'relative',
			},
		},
		elementChildren,
	);
}
