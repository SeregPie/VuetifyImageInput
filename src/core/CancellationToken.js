export default class {
	constructor() {
		this.cancelled = false;
	}

	cancel() {
		this.cancelled = true;
	}

	throwIfCancelled() {
		if (this.cancelled) {
			throw 0;
		}
	}
}
