import Function_cast from '/utils/Function/cast';
import Object_mapValues from '/utils/Object/mapValues';

import __checkeredBackground from './checkeredBackground';
import __cleanMaxScaling from './cleanMaxScaling';
import __cleanMinScaling from './cleanMinScaling';
import __croppingLeft from './croppingLeft';
import __croppingTop from './croppingTop';
import __displayedImageHeight from './displayedImageHeight';
import __displayedImageWidth from './displayedImageWidth';
import __maxCroppingLeft from './maxCroppingLeft';
import __maxCroppingTop from './maxCroppingTop';
import __minCroppingLeft from './minCroppingLeft';
import __minCroppingTop from './minCroppingTop';
import __rotatedInternalImageHeight from './rotatedInternalImageHeight';
import __rotatedInternalImageWidth from './rotatedInternalImageWidth';
import __scaling from './scaling';
import __updateImageData from './updateImageData';

export default {
	__checkeredBackground,
	__cleanMaxScaling,
	__cleanMinScaling,
	__croppingLeft,
	__croppingTop,
	__displayedImageHeight,
	__displayedImageWidth,
	__maxCroppingLeft,
	__maxCroppingTop,
	__minCroppingLeft,
	__minCroppingTop,
	__rotatedInternalImageHeight,
	__rotatedInternalImageWidth,
	__scaling,
	__updateImageData,
	...Object_mapValues({
		__remappedClearIcon: 'clearIcon',
		__remappedClearIconStyle: 'clearIconStyle',
		__remappedFlipHorizontallyIcon: 'flipHorizontallyIcon',
		__remappedFlipHorizontallyIconStyle: 'flipHorizontallyIconStyle',
		__remappedFlipVerticallyIcon: 'flipVerticallyIcon',
		__remappedFlipVerticallyIconStyle: 'flipVerticallyIconStyle',
		__remappedOverlayBackgroundColor: 'overlayBackgroundColor',
		__remappedOverlayBorderColor: 'overlayBorderColor',
		__remappedRotateClockwiseIcon: 'rotateClockwiseIcon',
		__remappedRotateClockwiseIconStyle: 'rotateClockwiseIconStyle',
		__remappedRotateCounterclockwiseIcon: 'rotateCounterclockwiseIcon',
		__remappedRotateCounterclockwiseIconStyle: 'rotateCounterclockwiseIconStyle',
		__remappedScalingSliderColor: 'scalingSliderColor',
		__remappedUploadIcon: 'uploadIcon',
		__remappedUploadIconStyle: 'uploadIconStyle',
	}, key => function() {
		return Function_cast(this[key]).call(this);
	}),
};
