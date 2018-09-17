export default function(image) {
	if (image) {
		if (this.$refs.canvas) {
			this.$refs.canvas.width = image.width;
			this.$refs.canvas.height = image.height;
			this.$refs.canvas.getContext('2d').drawImage(image.canvas, 0, 0);
		}
	}
}
