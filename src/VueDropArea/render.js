export default function() {
	let {
		$scopedSlots,
		active,
		on,
	} = this;
	return $scopedSlots.default({
		active,
		on,
	});
}
