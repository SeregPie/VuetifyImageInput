export default function({deltaX, deltaY}) {
	if (Number.isFinite(deltaX) && Number.isFinite(deltaY)) {
		if (this.flippedHorizontally) {
			deltaX *= -1;
		}
		if (this.flippedVertically) {
			deltaY *= -1;
		}
		this.cropLeft += deltaX;
		this.cropTop += deltaY;
	}
}
