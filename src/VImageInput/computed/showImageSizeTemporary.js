export default function() {
	let timer;
	return (() => {
		this.showImageSize = true;
		clearTimeout(timer);
		timer = setTimeout(() => {
			this.showImageSize = false;
		}, 2000);
	});
}
