import Function_cast from '/utils/Function/cast';
import Object_mapValues from '/utils/Object/mapValues';

import checkeredBackground from './checkeredBackground';
import cleanMaxScaling from './cleanMaxScaling';
import cleanMinScaling from './cleanMinScaling';
import croppingLeft from './croppingLeft';
import croppingTop from './croppingTop';
import maxCroppingLeft from './maxCroppingLeft';
import maxCroppingTop from './maxCroppingTop';
import minCroppingLeft from './minCroppingLeft';
import minCroppingTop from './minCroppingTop';
import rotatedInternalImageHeight from './rotatedInternalImageHeight';
import rotatedInternalImageWidth from './rotatedInternalImageWidth';
import scaledRotatedInternalImageHeight from './scaledRotatedInternalImageHeight';
import scaledRotatedInternalImageWidth from './scaledRotatedInternalImageWidth';
import scaling from './scaling';
import updateImageData from './updateImageData';

export default {
	checkeredBackground,
	cleanMaxScaling,
	cleanMinScaling,
	croppingLeft,
	croppingTop,
	maxCroppingLeft,
	maxCroppingTop,
	minCroppingLeft,
	minCroppingTop,
	rotatedInternalImageHeight,
	rotatedInternalImageWidth,
	scaledRotatedInternalImageHeight,
	scaledRotatedInternalImageWidth,
	scaling,
	updateImageData,
	...Object_mapValues({
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
	}),
};
