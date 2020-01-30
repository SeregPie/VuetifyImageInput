export default function() {
	let {
		overriddenMaxZoom: maxZoom,
		overriddenMinZoom: minZoom,
	} = this;
	return (maxZoom - minZoom) / 10;
}
