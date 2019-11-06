import componentName from './name';

export default function() {
	let {
		$props,
		constructor,
	} = this;
	let {warn} = constructor.super.util;
	Object.entries({
		imageBackgroundColor: 'backgroundColor',
		imageMaxScaling: 'maxScaling',
		imageMinScaling: 'minScaling',
		rotateCounterClockwiseIcon: 'rotateCounterclockwiseIcon',
		rotateCounterClockwiseIconStyle: 'rotateCounterclockwiseIconStyle',
	}).forEach(([newPropName, oldPropName]) => {
		if ($props[oldPropName] !== undefined) {
			warn(`[${componentName}]: The property '${oldPropName}' has been renamed to '${newPropName}'.`);
		}
	});
	[
		'scalingSliderColor',
	].forEach(propName => {
		if ($props[propName] !== undefined) {
			warn(`[${componentName}]: The property '${propName}' has been removed.`);
		}
	});
}
