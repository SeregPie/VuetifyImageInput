import Function_cast from '/utils/Function/cast';
import Object_mapValues from '/utils/Object/mapValues';

import checkeredBackground from './checkeredBackground';
import cropLeft from './cropLeft';
import cropTop from './cropTop';
import imageData from './imageData';
import maxScaling from './maxScaling';
import minScaling from './minScaling';
import rotatedInternalImageHeight from './rotatedInternalImageHeight';
import rotatedInternalImageWidth from './rotatedInternalImageWidth';
import rotation from './rotation';
import scaledRotatedInternalImageHeight from './scaledRotatedInternalImageHeight';
import scaledRotatedInternalImageWidth from './scaledRotatedInternalImageWidth';
import scaling from './scaling';

export default {
	checkeredBackground,
	cropLeft,
	cropTop,
	imageData,
	maxScaling,
	minScaling,
	rotatedInternalImageHeight,
	rotatedInternalImageWidth,
	rotation,
	scaledRotatedInternalImageHeight,
	scaledRotatedInternalImageWidth,
	scaling,
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
