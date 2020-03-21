export default function(turns) {
	if (this.flippedHorizontally !== this.flippedVertically) {
		turns *= -1;
	}
	this.rotationTurns += turns;
}
