export default function($createElement) {
	let {image} = this;
	let editorElement;
	let uploaderTransitonElementChildren = [];
	if (image) {
		editorElement = this.createEditorElement($createElement, image);
	} else {
		editorElement = this.createEditorElement($createElement);
		uploaderTransitonElementChildren.push(this.createUploaderElement($createElement));
	}
	return $createElement(
		'div',
		{
			style: {
				display: 'inline',
				position: 'relative',
			},
		},
		[
			editorElement,
			$createElement(
				'v-fade-transition',
				uploaderTransitonElementChildren,
			),
		],
	);
}
