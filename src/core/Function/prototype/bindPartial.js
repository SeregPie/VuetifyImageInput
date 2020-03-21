export default function(that, ...partials) {
	return function(...args) {
		return that.call(this, ...partials, ...args);
	};
}
