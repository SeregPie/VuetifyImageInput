export default function(gridSize, foregroundColor, backgroundColor) {
	let size = gridSize * 2;
	let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2" fill="${foregroundColor}"><rect x="1" width="1" height="1"/><rect y="1" width="1" height="1"/></svg>`;
	return {
		background: `url('data:image/svg+xml;base64,${btoa(svg)}') center center / ${size}px ${size}px repeat ${backgroundColor}`,
	};
}
