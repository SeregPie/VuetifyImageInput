import startAnimationLoop from '../../../core/startAnimationLoop';

export default function() {
	startAnimationLoop(() => {
		if (this._isDestroyed) {
			return false;
		}
		this.update();
	}, 1000);
}
