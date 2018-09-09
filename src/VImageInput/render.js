export default function($createElement) {
	let {
		borderColor,
		fullHeight,
		fullWidth,
		image,
	} = this;
	let elementOptions = {
		class: 'transition-swing',
		style: {
			border: `2px solid ${borderColor}`,
			borderRadius: '4px',
			display: 'inline',
			position: 'relative',
		},
	};
	if (fullWidth) {
		elementOptions.style.width = '100%';
	}
	if (fullHeight) {
		elementOptions.style.height = '100%';
	}
	let elementChildren = [];
	let editorWrapperElementOptions = {
		style: {
			display: 'table',
			height: 0,
			minHeight: '100%',
			minWidth: '100%',
			width: 0,
		},
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
		elementOptions,
		elementChildren,
	);
}
