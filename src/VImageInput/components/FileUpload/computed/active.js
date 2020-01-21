export default function() {
	let {
		dragEnter,
		mouseEnter,
	} = this;
	return dragEnter || mouseEnter;
}
