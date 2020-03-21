import MyClearButton from './components/ClearButton';
import MyFlipHorizontallyButton from './components/FlipHorizontallyButton';
import MyFlipVerticallyButton from './components/FlipVerticallyButton';
import MyRotateClockwiseButton from './components/RotateClockwiseButton';
import MyRotateCounterClockwiseButton from './components/RotateCounterClockwiseButton';
import MyZoomSlider from './components/ZoomSlider';

import checkeredBackground from './constants/checkeredBackground';

export default function(h) {
	let {
		clearable,
		flippable,
		flippedHorizontally,
		flippedVertically,
		fullHeight,
		fullWidth,
		image,
		imageHeight,
		imageWidth,
		originalImageHeight,
		originalImageWidth,
		rotatable,
		rotationTurns,
		translationHorizontally,
		translationVertically,
		zoom,
		zoomable,
	} = this;
	return h(
		'div',
		{
			style: {
				display: ['-ms-inline-grid', 'inline-grid'],
				gridColumns: '1fr auto',
				gridRows: '1fr auto',
				gridTemplateColumns: '1fr auto',
				gridTemplateRows: '1fr auto',
				...(fullHeight ? {height: '100%'} : {}),
				...(fullWidth ? {width: '100%'} : {}),
			},
		},
		[
			h(
				'div',
				{
					style: {
						gridColumn: 1,
						gridRow: 1,
						position: 'relative',
					},
				},
				[
					h(
						'div',
						{
							style: {
								height: `${imageHeight}px`,
								margin: '50px',
								width: `${imageWidth}px`,
							},
						},
					),
					h(
						'div',
						{
							style: {
								background: checkeredBackground,
								border: '1px solid #ccc',
								borderRadius: '4px',
								bottom: 0,
								left: 0,
								overflow: 'hidden',
								position: 'absolute',
								right: 0,
								top: 0,
							},
						},
						[
							h(
								'div',
								{
									style: {
										bottom: '50%',
										position: 'absolute',
										right: '50%',
										transform: 'translate(50%,50%)',
									},
								},
								[h(
									'div',
									{
										style: {
											transform: [
												`scale(${zoom})`,
												`scale(${[
													flippedHorizontally ? -1 : 1,
													flippedVertically ? -1 : 1,
												].join(',')})`,
												`rotate(${rotationTurns}turn)`,
												`translate(${[
													`${translationHorizontally}px`,
													`${translationVertically}px`,
												].join(',')})`,
											].join(' '),
											transition: 'all 0.3s',
										},
									},
									[h(
										'img',
										{
											attrs: {
												src: '/demo/image.jpg',
											},
										},
									)],
								)],
							),
							h(
								'div',
								{
									style: {
										border: '4px solid #fff',
										bottom: '50%',
										boxShadow: '0 0 4000px 4000px rgba(0,0,0,0.5)',
										height: `${imageHeight}px`,
										pointerEvents: 'none',
										position: 'absolute',
										right: '50%',
										transform: 'translate(50%,50%)',
										width: `${imageWidth}px`,
									},
								},
							),
						],
					),
				],
			),
			h(
				'div',
				{
					style: {
						display: 'flex',
						flexDirection: 'column',
						gridColumn: 2,
						gridRow: 1,
						justifyContent: 'center',
						transition: 'opacity 0.3s cubic-bezier(0.25,0.8,0.5,1)',
						...(image
							? {}
							: {
								opacity: 0,
								pointerEvents: 'none',
							}
						),
					},
				},
				[
					...(clearable
						? [
							h(MyClearButton),
							h('VSpacer'),
						]
						: []
					),
					...(rotatable
						? [
							h(MyRotateClockwiseButton),
							h(MyRotateCounterClockwiseButton),
						]
						: []
					),
					...(flippable
						? [
							h(MyFlipHorizontallyButton),
							h(MyFlipVerticallyButton),
						]
						: []
					),
				],
			),
			h(
				'div',
				{
					style: {
						gridColumn: 1,
						gridRow: 2,
						transition: 'opacity 0.3s cubic-bezier(0.25,0.8,0.5,1)',
						...(image
							? {}
							: {
								opacity: 0,
								pointerEvents: 'none',
							}
						),
					},
				},
				(zoomable
					? [h(MyZoomSlider)]
					: []
				),
			),
		],
	);
}
