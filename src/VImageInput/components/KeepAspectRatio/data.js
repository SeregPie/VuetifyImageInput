export default function() {
	let {
		height,
		width,
	} = this;
	return {
		forcedHeight: height,
		forcedWidth: width,
		scaling: 1,
	};
}
