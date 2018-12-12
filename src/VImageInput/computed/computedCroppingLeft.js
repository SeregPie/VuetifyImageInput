import Math_clamp from '/utils/Math/clamp';

export default function() {
	return Math.round(Math_clamp(
		this.croppingLeft,
		this.minCroppingLeft,
		this.maxCroppingLeft,
	));
}
