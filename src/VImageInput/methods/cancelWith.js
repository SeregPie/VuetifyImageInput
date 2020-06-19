export default function(cancellation) {
	this.triggerCancellation();
	this.setCancellation(cancellation);
}
