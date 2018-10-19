export default function() {
	let cropLeft = this.cropLeft;
	let cropBottom = this.cropBottom;
	this.rotation++;
	this.cropLeft = cropBottom;
	this.cropTop = cropLeft;
}
