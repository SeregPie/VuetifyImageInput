import PaperDuck from 'paperduck';

export default function(data) {
	if ((this.imageData || data) && this.imageData !== data) {
		PaperDuck
			.load(data)
			.then(({width, height}) => {
				if (width && height) {
					this.internalImageData = data;
					this.internalImageWidth = width;
					this.internalImageHeight = height;
					this.flippedHorizontally = false;
					this.flippedVertically = false;
					this.rotation = 0;
					this.scaling = 0;
					this.center();
				} else {
					this.internalImageData = null;
				}
			})
			.catch(() => {
				// pass
			});
	}
}
