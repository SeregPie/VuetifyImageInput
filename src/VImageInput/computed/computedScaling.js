import Math_clamp from '/utils/Math/clamp';

export default function() {
	return Math_clamp(
		this.scaling,
		this.computedMinScaling,
		this.computedMaxScaling,
	);
}
