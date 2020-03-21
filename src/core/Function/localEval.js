export default function(code, context = null, scope = {}) {
	let args = Object.values(scope);
	let argNames = Object.keys(scope);
	return (new Function(...argNames, code)).apply(context, args);
}
