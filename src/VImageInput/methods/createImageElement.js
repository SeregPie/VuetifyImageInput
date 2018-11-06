export default function($createElement) {
	return $createElement(
		'img',
		{
			style: {
				pointerEvents: 'none',
				position: 'absolute',
				transform: [
					...(this.flippedVertically ? [`translateY(${this.imageHeight}px)`, 'scaleY(-1)'] : []),
					...(this.flippedHorizontally ? [`translateX(${this.imageWidth}px)`, 'scaleX(-1)'] : []),
					//...(this.rotated ? [`translateX(${this.imageHeight}px)`, 'rotate(90deg)'] : []),
					`translate(${this.croppingLeft}px,${this.croppingTop}px)`,
					`scale(${this.scaling})`,
				].join(' '),
				transformOrigin: '0 0',
			},
			attrs: {
				src: this.internalImageData,
			},
		},
	);
}
