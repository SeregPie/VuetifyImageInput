import PaperDuck from 'paperduck';

export default function(data) {
	if ((this.imageData || data) && this.imageData !== data) {
		PaperDuck
			.load(data)
			.then((image) => {
				if (image.width && image.height) {
					this.internalImage = image;
					this.scaling = 0;
					this.originLeft = 0;
					this.originTop = 0;
				} else {
					this.internalImage = null;
				}
			})
			.catch(() => {
				// pass
			});
	}
}
