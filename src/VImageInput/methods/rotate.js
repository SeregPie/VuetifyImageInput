export default function(n) {
	this.rotation = ((this.rotation + n) % 4 + 4) % 4;
}
