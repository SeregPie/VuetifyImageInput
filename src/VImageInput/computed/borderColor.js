export default function() {
	let {theme} = this;
	return `rgba(${theme.isDark ? '255,255,255,0.7' : '0,0,0,0.54'})`;
}
