import Math_clamp from '../../core/Math/clamp';

export default {
	get() {
		return Math_clamp(this.dirtyZoom, this.overriddenMinZoom, this.overriddenMaxZoom);
	},
	set(value) {
		this.dirtyZoom = value;
	},
};
