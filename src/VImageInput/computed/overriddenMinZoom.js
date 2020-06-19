import getBoundingBoxHeight from '../../getBoundingBoxHeight';
import getBoundingBoxWidth from '../../getBoundingBoxWidth';

export default function() {
	let width = this.imageWidth / getBoundingBoxWidth(this.internalImageWidth, this.internalImageHeight, this.rotationInRadians);
	let height = this.imageHeight / getBoundingBoxHeight(this.internalImageWidth, this.internalImageHeight, this.rotationInRadians);
	switch (this.minZoom) {
		case 'cover':
			return Math.max(width, height);
		case 'contain':
			return Math.min(width, height);
	}
	return 0;
}
