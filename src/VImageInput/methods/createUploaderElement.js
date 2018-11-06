export default function($createElement) {
	return $createElement(
		'MyUploader',
		{
			props: {
				disabled: this.disabled,
				uploadIcon: this.remappedUploadIcon,
				uploadIconStyle: this.remappedUploadIconStyle,
			},
			style: {
				bottom: 0,
				left: 0,
				position: 'absolute',
				right: 0,
				top: 0,
			},
			on: {
				load: this.load,
			},
		},
	);
}
