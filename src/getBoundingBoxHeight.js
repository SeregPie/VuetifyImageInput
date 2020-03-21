export default function(width, height, rotation) {
	return Math.floor((width * Math.abs(Math.sin(rotation)) + height * Math.abs(Math.cos(rotation))));
}
