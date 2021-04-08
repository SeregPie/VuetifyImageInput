export default function(svg, size, color) {
	return {
		background: `url('data:image/svg+xml;base64,${btoa(svg)}') center center / ${size}px ${size}px repeat ${color}`,
	};
}
