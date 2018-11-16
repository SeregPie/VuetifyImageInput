export default function($createElement) {
	return $createElement(
		'input',
		{
			attrs: {
				name: this.name,
				type: 'hidden',
				value: this.imageData,
			},
		},
	);
}
