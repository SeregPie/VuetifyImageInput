export default function(that, min, max, minInclusive, maxInclusive) {
	return (minInclusive ? that >= min : that > min) && (maxInclusive ? that <= max : that < max);
}
