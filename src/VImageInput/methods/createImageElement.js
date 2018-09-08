export default function($createElement, image) {
	return $createElement(
		'img',
		{
			attrs: {
				src: image.toDataURL(),
			},
		},
	);
}
