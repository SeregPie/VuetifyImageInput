import checkeredBackground from './checkeredBackground';
import cleanMaxScaling from './cleanMaxScaling';
import cleanMinScaling from './cleanMinScaling';
import croppingLeft from './croppingLeft';
import croppingTop from './croppingTop';
import maxCroppingLeft from './maxCroppingLeft';
import maxCroppingTop from './maxCroppingTop';
import minCroppingLeft from './minCroppingLeft';
import minCroppingTop from './minCroppingTop';
import relativeRotatedInternalImageHeight from './relativeRotatedInternalImageHeight';
import relativeRotatedInternalImageWidth from './relativeRotatedInternalImageWidth';
import remappedProperties from './remappedProperties';
import rotatedInternalImageHeight from './rotatedInternalImageHeight';
import rotatedInternalImageWidth from './rotatedInternalImageWidth';
import scaledRotatedInternalImageHeight from './scaledRotatedInternalImageHeight';
import scaledRotatedInternalImageHeightDifference from './scaledRotatedInternalImageHeightDifference';
import scaledRotatedInternalImageWidth from './scaledRotatedInternalImageWidth';
import scaledRotatedInternalImageWidthDifference from './scaledRotatedInternalImageWidthDifference';
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
	relativeRotatedInternalImageHeight,
	relativeRotatedInternalImageWidth,
	rotatedInternalImageHeight,
	rotatedInternalImageWidth,
	scaledRotatedInternalImageHeight,
	scaledRotatedInternalImageHeightDifference,
	scaledRotatedInternalImageWidth,
	scaledRotatedInternalImageWidthDifference,
	scaling,
	updateImageData,
	...remappedProperties,
};
