export default function(value) {
	return typeof value === 'number' && !Number.isNaN(value);
}
