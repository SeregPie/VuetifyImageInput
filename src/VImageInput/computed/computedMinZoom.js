import getBoundingBoxHeight from '../../getBoundingBoxHeight';
import getBoundingBoxWidth from '../../getBoundingBoxWidth';

export default function() {
	let width = this.imageWidth / getBoundingBoxWidth(this.originalImageWidth, this.originalImageHeight, this.rotationRadians);
	let height = this.imageHeight / getBoundingBoxHeight(this.originalImageWidth, this.originalImageHeight, this.rotationRadians);
	switch (this.minZoom) {
		case 'cover':
			return Math.max(width, height);
		case 'contain':
			return Math.min(width, height);
	}
	return 0;
}
