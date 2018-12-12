import Math_clamp from '/utils/Math/clamp';

export default function() {
	return Math.round(Math_clamp(
		this.croppingTop,
		this.minCroppingTop,
		this.maxCroppingTop,
	));
}
