import Function_cast from '../../utils/Function/cast';
import Object_mapValues from '../../utils/Object/mapValues';

export default Object_mapValues({
	remappedClearIcon: 'clearIcon',
	remappedClearIconStyle: 'clearIconStyle',
	remappedFlipHorizontallyIcon: 'flipHorizontallyIcon',
	remappedFlipHorizontallyIconStyle: 'flipHorizontallyIconStyle',
	remappedFlipVerticallyIcon: 'flipVerticallyIcon',
	remappedFlipVerticallyIconStyle: 'flipVerticallyIconStyle',
	remappedOverlayBackgroundColor: 'overlayBackgroundColor',
	remappedOverlayBorderColor: 'overlayBorderColor',
	remappedRotateClockwiseIcon: 'rotateClockwiseIcon',
	remappedRotateClockwiseIconStyle: 'rotateClockwiseIconStyle',
	remappedRotateCounterclockwiseIcon: 'rotateCounterclockwiseIcon',
	remappedRotateCounterclockwiseIconStyle: 'rotateCounterclockwiseIconStyle',
	remappedScalingSliderColor: 'scalingSliderColor',
	remappedUploadIcon: 'uploadIcon',
	remappedUploadIconStyle: 'uploadIconStyle',
}, key => function() {
	return Function_cast(this[key]).call(this);
});
