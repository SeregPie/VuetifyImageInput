export default function(timer) {
	this.showImageSize = true;
	clearTimeout(timer);
	return setTimeout(() => {
		this.showImageSize = false;
	}, 2000);
}
