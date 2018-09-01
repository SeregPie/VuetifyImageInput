export default function() {
	return this.image ? this.image.toDataURL(`image/${this.imageType}`, this.imageEncoderOptions) : null;
}
