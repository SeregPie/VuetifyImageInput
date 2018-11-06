import Function_cast from '/utils/Function/cast';
import Object_mapValues from '/utils/Object/mapValues';

import checkeredBackground from './checkeredBackground';
import cleanMinScaling from './cleanMinScaling';
import croppingLeft from './croppingLeft';
import croppingTop from './croppingTop';
import displayedImageHeight from './displayedImageHeight';
import displayedImageWidth from './displayedImageWidth';
import maxCroppingLeft from './maxCroppingLeft';
import maxCroppingTop from './maxCroppingTop';
import maxScaling from './maxScaling';
import minCroppingLeft from './minCroppingLeft';
import minCroppingTop from './minCroppingTop';
import rotatedInternalImageHeight from './rotatedInternalImageHeight';
import rotatedInternalImageWidth from './rotatedInternalImageWidth';
import scaling from './scaling';
import updateImageData from './updateImageData';

export default {
	checkeredBackground,
	cleanMinScaling,
	croppingLeft,
	croppingTop,
	displayedImageHeight,
	displayedImageWidth,
	maxCroppingLeft,
	maxCroppingTop,
	maxScaling,
	minCroppingLeft,
	minCroppingTop,
	rotatedInternalImageHeight,
	rotatedInternalImageWidth,
	scaling,
	updateImageData,
	...Object_mapValues({
		remappedClearIcon: 'clearIcon',
		remappedClearIconStyle: 'clearIconStyle',
		remappedFlipHorizontallyIcon: 'flipHorizontallyIcon',
		remappedFlipHorizontallyIconStyle: 'flipHorizontallyIconStyle',
		remappedFlipVerticallyIcon: 'flipVerticallyIcon',
		remappedFlipVerticallyIconStyle: 'flipVerticallyIconStyle',
		remappedRotateClockwiseIcon: 'rotateClockwiseIcon',
		remappedRotateClockwiseIconStyle: 'rotateClockwiseIconStyle',
		remappedRotateCounterclockwiseIcon: 'rotateCounterclockwiseIcon',
		remappedRotateCounterclockwiseIconStyle: 'rotateCounterclockwiseIconStyle',
		remappedUploadIcon: 'uploadIcon',
		remappedUploadIconStyle: 'uploadIconStyle',
	}, key => function() {
		return Function_cast(this[key]).call(this);
	}),
};
