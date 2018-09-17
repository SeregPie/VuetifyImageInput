export default function({deltaX, deltaY}) {
	if (Number.isFinite(deltaX) && Number.isFinite(deltaY)) {
		this.cropLeft -= deltaX;
		this.cropTop -= deltaY;
	}
}
