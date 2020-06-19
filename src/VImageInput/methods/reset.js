export default function() {
	this.dirtyImageWidth = this.imageWidth;
	this.dirtyImageHeight = this.imageHeight;
	this.dirtyTranslationHorizontally = 0;
	this.dirtyTranslationVertically = 0;
	this.rotationInTurns = 0; // todo
	this.flippedHorizontally = false;
	this.flippedVertically = false;
	this.dirtyZoom = 0;
}
