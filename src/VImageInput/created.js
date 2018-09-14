export default function() {
	this.$watch(
		'value',
		function(data) {
			this.load(data);
		},
		{immediate: true},
	);
	this.$watch(
		'imageData',
		function(data) {
			this.$emit('input', data);
		},
		{immediate: true},
	);
}
