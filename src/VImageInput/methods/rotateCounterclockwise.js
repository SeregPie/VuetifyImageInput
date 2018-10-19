export default function() {
	let cropRight = this.cropRight;
	let cropTop = this.cropTop;
	this.rotation--;
	this.cropLeft = cropTop;
	this.cropTop = cropRight;
}
